export default function async (req, res)  {  
    console.log("Api called")
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: 'coderhuntsofficial@gmail.com',
        pass: process.env.Password,
      },
      secure: true,
    })
    const mailData = {
      from: 'coderhuntsofficial@gmail.com',
      to: req.body.email,
      subject: `Thanks for giving Feedback`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>Feedback Recieved : ${req.body.message}</div><p>From : ${req.body.name}</p><p>Sent from:
      ${req.body.email}</p>`
    }
    transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log("Email send")
    })
    res.status(200)
  }