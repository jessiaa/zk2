require(["js/libs/jquery.js"], function() {
    $.ajax({
        url: "/users/api/data",
        datatype: "json",
        success: function(data) {
            var html = ""
            data.msg.forEach(i => {
                html += `<dl>
                <dt><img src="images/${i.images}" alt=""></dt>
                <dd>${i.content}</dd>
                <dd><span>${i.idoname}</span><i>${i.num}</i></dd>
            </dl>`
            });
            $("section").html(html);
        }
    })
})