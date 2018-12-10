require(["js/libs/jquery.js"], function() {
    $.ajax({
        url: "/api/data",
        success: function(data) {
            console.log(data)
        }
    })
})