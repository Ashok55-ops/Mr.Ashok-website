const db = require('../config/db')
const nodemailer = require('nodemailer')
require('dotenv').config()

// Create your custom SMTP transporter layout using your exact parameters
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465, // Use 465 for secure SSL connection to bypass cloud network timeouts
  secure: true, // true for 465, false for 587
  auth: {
    user: 'ashokchaudharydm@gmail.com',
    pass: 'amgtisdidmrovbsi' // Your clean 16-character Google app password
  }
})


const submitContact = (req, res) => {
  console.log('Received data:', req.body)
  const { name, whatsapp, message } = req.body

  if (!name || !whatsapp || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required' })
  }

  const sql = 'INSERT INTO contacts (name, whatsapp, message) VALUES (?, ?, ?)'

  db.query(sql, [name, whatsapp, message], (err, result) => {
    if (err) {
      console.error('🚨 DATABASE QUERY CRASHED:', err.message)
      return res.status(500).json({ success: false, message: 'Database error' })
    }

        // --- NEW CODE: SEND EMAIL NOTIFICATION ---
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'ashokchaudharydm@gmail.com, amanchaudharydm@gmail.com', 
      subject: `🚨 New Lead Received from ${name}`,
      text: `You have a new contact form submission:\n\nName: ${name}\nWhatsApp: ${whatsapp}\nMessage: ${message}`
    }

    transporter.sendMail(mailOptions, (mailErr, info) => {
      if (mailErr) {
        console.error('❌ Email notification failed to send:', mailErr)
        // We still return status 200 because the lead was successfully saved to the DB
      } else {
        console.log('✉️ Lead email sent successfully:', info.response)
      }
    })
    // ----------------------------------------

    res.status(200).json({
      success: true,
      message: 'Message sent successfully!'
    })
  })
}

module.exports = { submitContact }
