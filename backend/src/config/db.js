const mysql = require('mysql2');
require('dotenv').config();

// Create a connection pool to prevent PROTOCOL_CONNECTION_LOST crashes
const db = mysql.createPool(process.env.DATABASE_URL || {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Pools don't use .connect(), we use .getConnection() to test the connection status safely
db.getConnection((err, connection) => {
  if (err) {
    console.log('❌ Database connection failed:', err);
    return;
  }
  console.log('✅ MySQL Connected Successfully via Pool');
  connection.release(); // release connection back to the pool
});

module.exports = db;
