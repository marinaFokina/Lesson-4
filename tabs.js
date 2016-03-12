(function($) {
    var n;
    $(".tabs").on("click", "li:not(.active)", function() {
        n = $(this).parents(".tabs_block"), $(this).tabs(n)
    }), $.fn.tabs = function(n) {
        $(this).addClass("active").siblings().removeClass("active"), n.find(".box").eq($(this).index()).show(1, function() {
            $(this).addClass("open_tab")
        }).siblings(".box").hide(1, function() {
            $(this).removeClass("open_tab")
        })
    }
})(jQuery);