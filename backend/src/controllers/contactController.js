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

  const sql = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)'
  
  db.query(sql, [name, whatsapp, message], (err, result) => {
    if (err) {
      return res.status(500).json({ 
        success: false,
        message: 'Database error', 
        error: err 
      })
    }
    res.status(200).json({ 
      success: true,
      message: 'Message sent successfully!' 
    })
  })
}

module.exports = { submitContact }