const express = require("express");
const app = express();
const PORT = 3000;
const fetchStudents = require("./utils/fetchStudents");
const connect = require("./config/db");

app.get("/", async (req, res) => {
    try {
        const result = await fetchStudents();
        return res.send(result.recordset);
    } catch (error) {
        return res.send(error);
    }
});

app.listen(PORT, () => {
    // connects to database
    connect();
});
