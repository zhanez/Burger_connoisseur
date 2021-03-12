var orm=require("../config/orm")

var burger= {
  selectAll: function(cbController){
     orm.selectAll("burgers",function(burgerData){
         cbController(burgerData)
     })
  },
 
  insertOne:function(body, cbController){
    orm.insertOne("burgers", body, function(burgerData){
      cbController(burgerData)
    })
  },
  updateOne: function(updateObject, condition,cbController){
    orm.updateOne("burgers", updateObject, condition, function(burgerData){
        cbController(burgerData)
    })
 },
 
  delete:function(condition, cbController){
    orm.delete("burgers", condition, function(burgerData){
      cbController(burgerData)
    });
  }
}




module.exports=burger 