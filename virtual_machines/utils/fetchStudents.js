const sql = require("mssql");

module.exports = fetchStudents = async () => {
    return await sql.query`select * from students`;
};
