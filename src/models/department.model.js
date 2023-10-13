"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------ */
const { mongoose } = require('../configs/dbConnection')
/* --------------------------- --------------------------- */
const DepartmentSchema = new mongoose.Schema({

    namw:{
        type:String,
        trim:true,
        required:true,
        unique:true
    }
},{collection:"departments",timestamps:trure})

module.exports=mongoose.model("Department",DepartmentSchema)