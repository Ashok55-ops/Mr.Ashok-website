const db = require("../config/db");
const axios = require("axios");
require("dotenv").config();

const submitContact = async (req, res) => {
  console.log("Received data:", req.body);

  const { name, whatsapp, message } = req.body;

  // Validate required fields
  if (!name || !whatsapp || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  // Save data into MySQL
  const sql =
    "INSERT INTO contacts (name, whatsapp, message) VALUES (?, ?, ?)";

  db.query(sql, [name, whatsapp, message], async (err) => {
    if (err) {
      console.error("❌ Database Error:", err);

      return res.status(500).json({
        success: false,
        message: "Database Error",
      });
    }

    // Send Email via Brevo
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

          subject: `🚀 New Website Lead | ${name}`,

          htmlContent: `
<div style="margin:0;padding:30px;background:#f4f6fb;font-family:Arial,Helvetica,sans-serif;">

  <table width="650" align="center" cellpadding="0" cellspacing="0"
    style="background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">

    <tr>
      <td style="background:#7c3aed;padding:25px;text-align:center;">
        <h1 style="margin:0;color:#ffffff;font-size:26px;">
          🚀 New Website Lead
        </h1>
      </td>
    </tr>

    <tr>
      <td style="padding:35px;">

        <p style="font-size:17px;color:#333;margin-top:0;">
          Hello Ashok,
        </p>

        <p style="font-size:15px;color:#666;line-height:24px;">
          A new visitor has submitted your portfolio contact form.
        </p>

        <table width="100%" cellpadding="12" cellspacing="0"
          style="border-collapse:collapse;margin-top:25px;">

          <tr style="background:#f9fafb;">
            <td width="30%"><strong>Name</strong></td>
            <td>${name}</td>
          </tr>

          <tr>
            <td><strong>WhatsApp</strong></td>
            <td>${whatsapp}</td>
          </tr>

          <tr style="background:#f9fafb;">
            <td><strong>Message</strong></td>
            <td>${message}</td>
          </tr>

          <tr>
            <td><strong>Received On</strong></td>
            <td>${new Date().toLocaleString("en-IN")}</td>
          </tr>

        </table>

        <br><br>

        <a
          href="https://wa.me/${whatsapp.replace(/\\D/g, "")}"
          style="
            background:#25D366;
            color:#ffffff;
            padding:14px 24px;
            text-decoration:none;
            border-radius:8px;
            display:inline-block;
            font-weight:bold;
            font-size:15px;
          ">
          💬 Chat on WhatsApp
        </a>

      </td>
    </tr>

    <tr>
      <td
        style="
          background:#f3f4f6;
          text-align:center;
          padding:18px;
          color:#666;
          font-size:12px;
        ">
        This email was automatically generated from your Portfolio Website.
      </td>
    </tr>

  </table>

</div>
          `,
        },
        {
          headers: {
            accept: "application/json",
            "content-type": "application/json",
            "api-key": process.env.BREVO_API_KEY,
          },
        }
      );

      console.log("✅ Brevo Email Sent Successfully");
    } catch (error) {
      console.error(
        "❌ Brevo Email Error:",
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