const db = require("../config/db");
const axios = require("axios");
require("dotenv").config();

const submitContact = async (req, res) => {
  console.log("Received data:", req.body);

  const { name, whatsapp, message } = req.body;

  if (!name || !whatsapp || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const sql =
    "INSERT INTO contacts (name, whatsapp, message) VALUES (?, ?, ?)";

  db.query(sql, [name, whatsapp, message], async (err) => {
    if (err) {
      console.error("Database Error:", err);
      return res.status(500).json({
        success: false,
        message: "Database Error",
      });
    }

    try {
      await axios.post(
        "https://api.brevo.com/v3/smtp/email",
        {
          sender: {
            name: "Portfolio Website",
            email: "ashokchaudharydm@gmail.com",
          },
          to: [
            {
              email: "ashokchaudharydm@gmail.com",
              name: "Ashok",
            },
            {
              email: "amanchaudharydm@gmail.com",
              name: "Aman",
            },
          ],
          subject: `🚀 New Lead from ${name}`,
          htmlContent: `
            <h2>New Contact Form Submission</h2>

            <p><strong>Name:</strong> ${name}</p>
            <p><strong>WhatsApp:</strong> ${whatsapp}</p>
            <p><strong>Message:</strong></p>

            <p>${message}</p>
          `,
        },
        {
          headers: {
            accept: "application/json",
            "api-key": process.env.BREVO_API_KEY,
            "content-type": "application/json",
          },
        }
      );

      console.log("✅ Brevo Email Sent Successfully");
    } catch (error) {
      console.error(
        "❌ Brevo Error:",
        error.response?.data || error.message
      );
    }

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  });
};

module.exports = {
  submitContact,
};