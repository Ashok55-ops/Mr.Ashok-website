const db = require('../config/db')
transporter.verify((err, success) => {
  if (err) {
    console.error("SMTP ERROR:", err);
  } else {
    console.log("SMTP Connected Successfully");
  }
});

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
