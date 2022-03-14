const Client = require('./../models/clinetModels')
const Email = require('../email')
const appError = require('./../features/appError')


const createClient  = async (req, res, next) => {

    
    try{
        const newClient = await Client.create({

            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject
        })
        
        res.status(201).json({

            data: {

                newClient
            }
        })
        
    //   await new Email(req.body.email, req.body.subject).send()
    }
    
    catch(err) {

            res.status(400).json({

                status: 'failed',
                msg:  err.message
            }) 

    }
    
    
}
module.exports = createClient