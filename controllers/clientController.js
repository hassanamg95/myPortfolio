const Client = require('./../models/clinetModels')
const Email = require('../email')

const createClient  = async (req, res) => {

    
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
        
      await new Email(req.body.email, req.body.subject).send()
    }
    
    catch(err) {

        res.status(409).json({

            status: 'Failed',
            err
        })
    console.log(err.message)
    }
    
    // console.log(newClient)
    
}
module.exports = createClient