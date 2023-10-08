const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 3000; // Choose any available port you prefer
const bodyParser = require('body-parser'); // Import the body-parser module
const cors = require('cors');

app.use(cors());




const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:'beautyboss48235@gmail.com',
    pass: 'xjgmyoqyrismupnm',
  },
});
app.use(bodyParser.urlencoded({ extended: false }));

// Define an endpoint to send emails
app.post('/email', (req, res) => {
  const mailOptions = {
    from: 'beautyboss48235@gmail.com',
    to: 'hortonstephon12@gmail.com',
    subject: 'Yous a bitch',
    text: 'This is a test email sent from Nodemailer!',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email: ', error);
      res.json({ error: 'Error sending email' });
     
    } else {
      console.log('Email sent successfully: ', info.response);
      res.json({ message: 'Email sent successfully' });
    }
  });
});



app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});













