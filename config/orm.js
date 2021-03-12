var connection= require("./connection.js")


var orm ={
    selectAll: function(tableName, cbModels){
        connection.query("SELECT * from ??", tableName, function(err, burgerData){
            cbModels(burgerData)
        })
    },
    insertOne: function(tableName, body, cbModels){
        connection.query("INSERT INTO ?? set ?", [tableName, body], function(err, burgerData){
            cbModels(burgerData)
        })
    },
    updateOne: function(tableName, updateObject, condition, cbModels){
        connection.query("UPDATE ?? set ? WHERE ?", [tableName, updateObject, condition],function(err, burgerData){
            cbModels(burgerData)
        })
    },
    delete: function(tableName, condition, cbModels){
        connection.query("DELETE FROM ?? WHERE ?", [tableName, condition],function(err, burgerData){
            cbModels(burgerData)
        })
    }
}

module.exports= orm