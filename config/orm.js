var connection= require("./connection.js")


var orm ={
    selectAll: function(tableName, cbModels){
        connection.query("SELECT * from ??", tableName, function(err, burgerData){
            cbModels(burgerData)
        })
    }
}

module.exports= orm