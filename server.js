var express =require("express")

var app = express()

var port= process.env.PORT || 8080

app.use(express.static("public"))


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