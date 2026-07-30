const db = require('../config/db')
const nodemailer = require('nodemailer')
require('dotenv').config()

// Configure the email transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS  // Your App Password (not your normal password)
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
      to: 'ashokchaudharydm@gmail.com', // Where you want to receive the leads
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
