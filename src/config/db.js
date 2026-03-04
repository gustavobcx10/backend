import mysql from "mysql2/promise";
import dotenv from "dotev";
dotenv.config();

export const conexão = mysql.createPool({
    host:process.emv.DB_host,
    user:process.emv.DB_user,
    password:process.emv.DB_PASSWORD,
    database:process.DB_NAME,
    port:process.env.DB_PORT,
    wairForConnections:true,
    connectionLimit:10,
    queueLimit:0
})