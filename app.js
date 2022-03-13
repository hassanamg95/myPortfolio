const path = require('path')
const express = require('express')
const app = express()
const publicDirectoryPath = path.join(__dirname, 'public')
const clientRouter = require('./routes/clientRoute')

app.use(express.json())

app.use(express.static(publicDirectoryPath));
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true , limit: '10kb'}))
app.use('', clientRouter)

app.use('', (req, res) => {

    res.render('index')
})

module.exports = app