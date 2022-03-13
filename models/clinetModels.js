const mongoose = require('mongoose')
const validator = require('validator')

const clientSchema = mongoose.Schema({

   name: {

       type: String,

   },
   email: {

      type: String,
      required: [true, "Provide your email address"],
      lowercase: true,
      validate: [validator.isEmail, "Please input a valid address email"]

   },
   subject: {

    type: String
   },
   sentAt: {

      type: Date,
      default: Date.now()
   }
   
})

const Client = mongoose.model('Client', clientSchema)
module.exports = Client