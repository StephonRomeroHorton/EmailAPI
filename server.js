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
  let style = req.body.style;
  let price = req.body.price;

  // Process the data or send a response
  console.log(`Received data: Name - ${name}, Email - ${email}, Phone - ${phone}`);
  

  const mailOptions1 = {
    from: 'beautyboss48235@gmail.com',
    to: `${email}`,
    subject: 'Appointment with the Beauty Boss',
    text: `Thank you for booking with The Beauty Boss. Your appointment for a ${style} ${price} is on ${month} ${day}, ${year} at ${time}. Your stylist will contact you soon with details, for any questions contact your stylist at 313-444-4444`,
  };



  transporter.sendMail(mailOptions1, (error, info) => {
    if (error) {
      console.error('Error sending email to client: ', error);
      res.json({ message: 'Error booking appointment, please correct email' });
     
    } else {
      console.log('Email sent to client successfully: ', info.response);
      res.json({ message: 'Booking Successful! Check email for appointment details' });

      const mailOptions2 = {
        from: 'beautyboss48235@gmail.com',
        to: 'hortonstephon12@gmail.com',
        subject: 'New Appointment Booked',
        text: ` You have a booking request for a ${style} ${price} with ${name} on ${month} ${day}, ${year} at ${time} call ${phone} or email ${email} to contact client`,
      };

      transporter.sendMail(mailOptions2, (error, info) => {
        if (error) {
          console.error('Error sending email to stylist: ', error);
        } else {
          console.log('Email sent to stylist successfully: ', info.response);
        }
      });

    }
  });
});


app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



