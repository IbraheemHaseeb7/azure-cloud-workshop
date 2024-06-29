const { app, input } = require("@azure/functions");

const sql = input.sql({
    connectionStringSetting: "SqlConnectionString",
    commandText: "SELECT * FROM [dbo].[Students]",
    commandType: "Text",
});

app.http("getStudents", {
    methods: ["GET"],
    authLevel: "anonymous",
    extraInputs: [sql],
    handler: async (request, context) => {
        const result = await context.extraInputs.get(sql);

        return { body: JSON.stringify(result) };
    },
});
