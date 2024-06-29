const { app } = require("@azure/functions");

app.http("myFirstTrigger", {
    methods: ["GET"],
    authLevel: "anonymous",
    handler: async (request, context) => {
        const a = request.query.get("a");
        const b = request.query.get("b");

        return { status: 200, body: +a + +b };
    },
});
