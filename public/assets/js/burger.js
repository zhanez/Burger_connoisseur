$(".devoured").on("click", function(){
    var id = $(this).attr("data-id")
    $.ajax({
        url:"/api/burgers/"+id,
        method:"PUT"
    })
    .then(function(){
    location.reload()
})

});

$(".delete").on("click", function(event){
    var id = $(this).attr("data-id");
    $.ajax({
        url:"/api/burgers/"+id,
        type:"DELETE"
    })
    .then(function(){
    console.log("deleted burger", id);
    location.reload()
})

})