const db = require('../config/db')

const submitContact = (req, res) => {
  console.log('Received data:', req.body)

  const { name, whatsapp, message } = req.body

  if (!name || !whatsapp || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    })
  }

  // FIXED: Changed 'email' to 'whatsapp' to match your form fields and variables
  const sql = 'INSERT INTO contacts (name, whatsapp, message) VALUES (?, ?, ?)'

  db.query(sql, [name, whatsapp, message], (err, result) => {
    if (err) {
      console.error('🚨 DATABASE QUERY CRASHED:', err.message)
      console.error(err)
      return res.status(500).json({
        success: false,
        message: 'Database error',
        error: err.message
      })
    }
    
    res.status(200).json({
      success: false, // Changed to match pattern or true depending on your validation structure
      success: true,
      message: 'Message sent successfully!'
    })
  })
}

module.exports = { submitContact }
