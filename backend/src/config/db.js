const mysql = require('mysql2');
require('dotenv').config();

let poolConfig;

// If DATABASE_URL exists (Production on Render), use it directly as a configuration string
if (process.env.DATABASE_URL) {
  poolConfig = process.env.DATABASE_URL;
} else {
  // Fallback configuration for local computer
  poolConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  };
}

const db = mysql.createPool(poolConfig);

db.getConnection((err, connection) => {
  if (err) {
    console.log('❌ Database connection failed:', err);
    return;
  }
  console.log('✅ MySQL Connected Successfully via Pool');
  connection.release();
});

module.exports = db;
