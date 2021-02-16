var burgerModel= require("../models/burger")
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




module.exports= router