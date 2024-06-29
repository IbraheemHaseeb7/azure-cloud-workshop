const sql = require("mssql");
const dotenv = require("dotenv");

dotenv.config();

module.exports = async () => {
    return await sql.connect(process.env.CONN_STRING);
};
