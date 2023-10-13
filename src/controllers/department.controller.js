"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

const Department = require("./src/models/department.models");

module.exports = {
  list: async (req, res) => {
    // const data = await Department.find(search).sort(sort).skip(skip).limit(limit)
    const data = await res.getModdelList(Department);
    res.status(200).send({
      error: false,
      // data:data
      data,
    });
  },

  create: async (req, res) => {
    const data = await Department.create(req, res);
    res.status(201).send({
      error: false,
      data,
    });
  },

  read: async (req, res) => {
    const data = await Derpartment.findOne({_id:req.params.id})
    res.status(200).send({
        error: false,
        data,
      });
  },

  update: async (req, res) => {
    const data = await Department.updateOne({_id: req.params.id},req.body)
    res.status(202).send({
        error: false,
        data,
        new: await Department.findOne({_id:req.params.id})
      });
  },

  delete: async (req, res) => {
    const data = await Department.deleteOne({_id:req.params.id})
// const statusCode = data.deletedCount>=1 ? 204:404


    res.status(data.deletedCount>=1 ? 204:404/*statusCode*/).send({
        error: false,
        data,
      });
  }
  }
