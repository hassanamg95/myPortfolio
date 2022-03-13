// const appError = require('./../features/appError')

// const handleDuplicateFields = err => {

//     const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
//     console.log(value);
//    const message = `Duplicate field value ${value}, please use another value`
//    return new appError(message, 400)
// } 
// module.exports = (err, req, res, next) => {

//     err.statusCode = err.statusCode || 500
//     err.message = err.message || 'error'

//     let error = { ...err };
//     error.message = err.message;

//     if (error.code === 11000) error = handleDuplicateFields(error)

//     return res.status(err.statusCode).json({
//         status: err.status,
//         error: err,
//         message: err.message,
//         stack: err.stack
//     });


// }
// // let error = { ...err}
// // error.message = err.message
// // if(error.code === 11000) error = handleDuplicateFields(error)