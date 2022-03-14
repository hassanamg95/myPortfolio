const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require('./app')

dotenv.config({ path: './config.env' })
const DB = process.env.DATABASE

mongoose.connect(DB, {

    useNewUrlParser: true
}).then(() => console.log('DB Connection successfull'))

const port = process.env.PORT || 3000
const server = app.listen(port, () => {
    console.log(`App running on port ${port}`)
})
