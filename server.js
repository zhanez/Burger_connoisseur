var express =require("express")

var app = express()

var port= process.env.PORT || 8080

app.use(express.static("public"))
// from browser{
//     burger_name:"cheese",
//     devoured:false
// } will be encrypted and be sent to the port -> jyugughgk

// server receives that data -> jyugughgk ->
//  it will parse the data to original format{
//     burger_name:"cheese",
//     devoured
// } -> after getting original, it will store it in req.body

app.use(express.urlencoded({extended:true}))
app.use(express.json())

var expressHandlebars= require("express-handlebars")
// view main handlebars html code
app.engine("handlebars", expressHandlebars({
    defaultLayout:"main"
}))
app.set("view engine", "handlebars")
app.use (require("./controllers/bugers_controllers"))
// open port
app.listen(port, function(){
    console.log("app is listening on port:"+port)
})