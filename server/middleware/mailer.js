const nodeMailer = require('nodemailer')

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth:{
        user:process.env.MAILER_EMAIL,
        pass: process.env.MAILER_PASS
    }
})

const mailOptions = {
    
}