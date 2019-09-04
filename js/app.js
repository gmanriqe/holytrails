$(document).ready(function(){
    $('.close-button').click(function(){
        var el = $(this);
        setTimeout(function () {
            el.toggleClass("active");
            $('.menu-fullscreen').toggleClass('open');
            $('.menu-principal li').each(function(i) {
                (function(self, j) {
                    setTimeout(function() {
                        $(self).toggleClass('animated fadeInUp');
                    },(j*300)+300);
                })(this, i);
            });
        }, 300);
    });

    $("[class$='chevron-down']").on("click", function(){
        $(this).parent().toggleClass("active");
    });
});
