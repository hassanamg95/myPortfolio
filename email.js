const nodemailer = require('nodemailer')
const sgMail = require('@sendgrid/mail')
class Email {

   
   constructor(email, subject) {

      this.to = `${process.env.EMAIL_TO}`;
      this.from = email;
      this.subject = subject;
     
   }

   newTransport() {

    return  nodemailer.createTransport({

        service: 'SendGrid',        
        auth: {

            user: process.env.SENDGRID_USERNAME,
            pass: process.env.SENDGRID_PASSWORD
        }

      })

   }
   // Sne dthe actual email
   send() {

      // Define email options
      const mailOptions = {

         from: this.from,
         to: this.to,
         subject: '< Contact for a service >',
         text: `${this.subject}`
      }

      // Create transport and send email
      this.newTransport().sendMail(mailOptions).then(() => console.log('message sent successfully'))
      .catch((err) => console.log(err)) 
   }
    msgSuccess() {
      console.log('Message sent successfully!');
    }
  
}

module.exports = Email