const nodemailer = require('nodemailer')

class Email {

   
   constructor(email, subject) {

      this.to = `${process.env.EMAIL_TO}`;
      this.from = email;
      this.subject = subject;
     
   }

   newTransport() {

    return  nodemailer.createTransport({

        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {

            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }

      })

   }
   // Sne dthe actual email
  async send() {

      // Define email options
      const mailOptions = {

         from: this.from,
         to: this.to,
         subject: this.subject
      }

      // Create transport and send email
     await this.newTransport().sendMail(mailOptions)
   }
    msgSuccess() {
      console.log('Message sent successfully!');
    }
  
}

module.exports = Email