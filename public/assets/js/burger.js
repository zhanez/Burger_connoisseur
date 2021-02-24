$(".devoured").on("click", function(){
    var id = $(this).attr("data-id")
    $.ajax({
        url:"/api/burgers/"+id,
        method:"PUT"
    })
    .then(function(){
    location.reload()
})

})