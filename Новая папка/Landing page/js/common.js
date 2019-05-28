(function d() {
    $('.some_images').slick({});
    $(document).ready(function(){
        $("#menu_id").on("click","a", function (event) {
            event.preventDefault();

            var id  = $(this).attr('href'),

                top = $(id).offset().top;

            $('body,html').animate({scrollTop: top-150}, 1500);
        });
    });
    new WOW().init();
    $(".button_menu").click(function (e) {
        e.preventDefault();
        console.log('ddd');
        $('.menu_mobile_block').toggleClass('active');
    })
    $(document).mouseup(function (e) {
        var container = $(".button_menu");
        if (container.has(e.target).length === 0){
            $('.menu_mobile_block').removeClass('active');
        }
    });
})();
