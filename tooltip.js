$(function () {
    if ($("*[title]").length) {
        $("*[title]").each(function () {
            $(this).addClass("tooltip");
        })
    }

    $(".tooltip").hover(
        function () {
            var title = $(this).attr('title');
            $(this).removeAttr('title');

            var position = $(this).position();
            var left = position.left;
            var div = $("<div></div>");

            $(div).addClass("tooltip");
            $(div).css("left", left + 'px');

            $(div).html(title);

            $(this).after(div);
        }, function () {
            $("div.tooltip").css("display", "none");
            var title = $("div.tooltip").html();
            $(this).attr('title', title);
        });
});