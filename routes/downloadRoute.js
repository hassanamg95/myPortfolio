const express = require('express')
const path = require('path')
var mime = require('mime')
const fs = require('fs')
const contentDisposition = require('content-disposition')

const router = express.Router()


router.get('/download',  (req, res) => {


        var filename = __dirname + './../uploads/CV-Hassan.pdf'
         res.download(filename)
    
        // var file = __dirname + './../uploads/CV-Hassan.pdf'
        // var filename = path.basename(file)
        // var mimeType = mime.lookup(filename)

        // res.setHeader('Content-disposition', 'attachement; filename=' + filename)
        // res.setHeader('Content-type', mimeType)

        // var fileStream = fs.createReadStream(file)
        // fileStream.pipe(re)

        // res.status(200).json({

        //     status: "Success",
        //     msg: "File downloaded"
        // })



      
    
})


module.exports = router