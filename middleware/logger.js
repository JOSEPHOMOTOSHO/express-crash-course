//create a logger(to login haha)
//package that deals with date
const moment = require('moment')
const logger = (req,res,next) =>{
    console.log(
        `${req.protocol}://${req.get('host')}${req.originalUrl}
        :${moment().format()}`)/*basically https(req.protocol)://localhost(req.get("host"))/req.originalUrl so basically https://localhost/ap/members. We are trying to get the host that was hit */
    next()
}

module.exports = logger;