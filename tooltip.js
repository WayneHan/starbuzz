$(function () {
    $(".tooltip").hover(
        function () {
            var title = $(this).attr('title');
            $(this).removeAttr('title');
            var div = $("<div></div>", {
                "class": 'tooltip'
            });
            $(div).html(title);

            $(this).after(div);
        }, function () {
            $("div.tooltip").css("display", "none");
            var title = $("div.tooltip").html();
            $(this).attr('title', title);
        });
});