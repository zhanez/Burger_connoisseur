var orm=require("../config/orm")

var burger= {
  selectAll: function(cbController){
     orm.selectAll("burgers",function(burgerData){
         cbController(burgerData)
     })
  }

}

module.exports=burger 