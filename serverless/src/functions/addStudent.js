const { app, output } = require("@azure/functions");

const sql = output.sql({
    connectionStringSetting: "SqlConnectionString",
    commandText: "Students",
});

app.http("addStudent", {
    methods: ["POST"],
    authLevel: "anonymous",
    extraOutputs: [sql],
    handler: async (request, context) => {
        context.extraOutputs.set(sql, {
            id: 4,
            name: "John Doe 4",
            age: 21,
        });

        return { body: `Successfully created new user` };
    },
});
