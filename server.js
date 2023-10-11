const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 3000; // Choose any available port you prefer
const bodyParser = require('body-parser'); // Import the body-parser module
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());



const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:'beautyboss48235@gmail.com',
    pass: 'xjgmyoqyrismupnm',
  },
});


// Define an endpoint to send emails
app.post('/email', (req, res) => {


  
  let name = req.body.name;
  let email = req.body.email;
  let phone = req.body.phone;
  let month = req.body.month;
  let day = req.body.day;
  let year = req.body.year;
  let time = req.body.time;

  // Process the data or send a response
  console.log(`Received data: Name - ${name}, Email - ${email}, Phone - ${phone}`);
  

  const mailOptions = {
    from: 'beautyboss48235@gmail.com',
    to: `${email}`,
    subject: 'Yous a bitch',
    text: `you have an appointment with ${name} on ${month} ${day}, ${year} at ${time} call ${phone} or email ${email} to contact client`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email: ', error);
      res.json({ message: 'Error sending email' });
     
    } else {
      console.log('Email sent successfully: ', info.response);
      res.json({ message: 'Email sent successfully' });
    }
  });
});



app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



