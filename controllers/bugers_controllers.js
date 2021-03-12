// const burger = require("../models/burger")
// var express = require("express")
var burgerModel= require("../models/burger.js")
var router = require("express").Router()
// selectAll()
// insertOne()
// updateOne()

router.get("/",function(req,res){
    burgerModel.selectAll(function(burgerData){
        res.render("index", {burgers: burgerData})
    })
})

router.post("/api/burger", function(req,res){
   req.body.devoured =false 
    burgerModel.insertOne( req.body, function(burgerData){
        res.redirect("/")
    })
}) 

router.put("/api/burgers/:id", function(req,res){
    var condition={
        id:req.params.id
    }
    var updateObject={
        devoured:true
    }
    burgerModel.updateOne(updateObject, condition, function(burgerData){
        res.json(burgerData)
    })
})

router.delete("/api/burgers/:id", function(req,res){
    var deleteBurger={
        id:req.params.id
    }
    burgerModel.delete( deleteBurger, function(burgerData){

        res.json(burgerData)
    })
})


module.exports= router