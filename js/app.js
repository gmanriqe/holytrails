$(document).ready(function(){
    $('.close-button').click(function(){
        setTimeout(function () {

            $(this).toggleClass("active");

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
});
