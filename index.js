"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
/*
    $ npm i express dotenv mongoose express-async-errors
    $ npm i cookie-session
    $ npm i jsonwebtoken
*/
const express = require('express')
const app = express()
/* ------------------------------------------------------- */
require('dotenv').config()
const PORT = process.env?.PORT || 8000

//asyncError to errorHandler
require('express-async-errors')
/* ------------------------------------------------------- */
//!Configrations

//Connect to the DB
const {dbConnection } = require('./src/configs/dbConnection')
dbConnection()
/* ------------------------------------------------------- */
//!MIDDLEWARES


// Accept JSON:
app.use(express.json())
//Sessionscookies:
app.use(require('cookie-session')({secret: process.env.SECRET_KEY}))
//res.getModelList():
app.use(require('./src/middlewares/findSearchSortPage'))

<<<<<<< HEAD
// Login/Logout Control Middleware
app.use(async (req, res, next) => {
const Personnel = require('./src/models/personnel.model')
req.isLogin = false
if(req.session?.id){

    const user = await Personnels.findOne({_id: req.session.id})
    req.isLogin = user.password == req.session.password
}
next()
})

=======
>>>>>>> 8c3e59ec0686b740b122966e937928a5f55664eb
/* ------------------------------------------------------- */
//!ROUTES

//HomePath'/':
    app.all('/',(req,res)=>{
        res.send({
            error:false,
            message: 'Welcome to PERSONAL API'
        })
    })

    // /departments
    app.use('/departments',require('./src/routes/department.router'))
    // /personnels
    app.use('/personnels',require('./src/routes/department.router'))
 

/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */


// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

// RUN SERVER:
app.listen(PORT, () => console.log('http://127.0.0.1:' + PORT))

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')()