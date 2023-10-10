const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 3000; // Choose any available port you prefer
const bodyParser = require('body-parser'); // Import the body-parser module
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));



const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:'beautyboss48235@gmail.com',
    pass: 'xjgmyoqyrismupnm',
  },
});


// Define an endpoint to send emails
app.post('/email', (req, res) => {
  const requestData = req.body;
  console.log('Request Data:', requestData);
  
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;

  // Process the data or send a response
  console.log(`Received data: Name - ${name}, Email - ${email}, Phone - ${phone}`);
  

  const mailOptions = {
    from: 'beautyboss48235@gmail.com',
    to: `${email}`,
    subject: 'Yous a bitch',
    text: `you have an appointment with ${name} on July , call ${phone}`,
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



