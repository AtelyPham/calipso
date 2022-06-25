const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
const path = require('path')
const jwt = require('jsonwebtoken')

dotenv.config({
    path: path.resolve(__dirname, '../.env')
})

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: true,
    service: "gmail",
    port: 465,
    auth: {
      user: 'Your email',
      pass: 'password app',
    },
});

const makeToken = (email) => {
    const expirationDate = new Date();
    expirationDate.setHours(new Date().getHours() + 1);
    return jwt.sign({ email, expirationDate }, process.env.JWT_SECRET_KEY);
};

const sendEmail = (email) => {
    
    const token = makeToken(email)

    const URL_VERIFY_TOKEN = `http://localhost:4000/api/account?token=${token}`
    
    const mailOptions = {
        from: `vanthang23032001@gmail.com`,
        to: `${email}`,
        subject: 'Welcome to Calipso',
        text: 'Welcome to Calipso',
        html: `<h2>Hey ${email}</h2>
        <p>Here's the login link you just requested:</p>
        <p>${URL_VERIFY_TOKEN}</p>`,
    }

    transporter.sendMail(mailOptions, (err) => {
        err ? console.log(err) : console.log(token)
    })
}



module.exports = sendEmail;