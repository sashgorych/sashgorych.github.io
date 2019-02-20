//smoose scroll to block news
$(document).ready(function(){
    $(".menu-comment-block-mobile").on("click", function (event) {
        event.preventDefault();

        var id  ='#news',

            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1500);
    });
});

//delete placeholder
$(window).resize(function () {
    if(screen.width<521) {
        $('.search-input').attr('placeholder', '');
    }else{
        $('.search-input').attr('placeholder', 'Пошук');
    }
});
window.onload = function () {
    if(screen.width<521) {
        $('.search-input').attr('placeholder', '');
    }else{
        $('.search-input').attr('placeholder', 'Пошук');
    }
}
//hide show menu
$(document).mouseup(function (e) {
    var container =  $('.mobile-menu');
    if(e.target.classList.contains("menu-holder") && !e.target.classList.contains("act")){
        document.querySelector('.mobile-menu').classList.add('sh')
        console.log('s')
        document.querySelector('.menu-holder').classList.add('act')
    }
    else{
        if(e.target.classList.contains("menu-holder")){
            e.target.classList.remove("act");
            container.removeClass("sh");
        }
        if (container.has(e.target).length === 0){
            container.removeClass('sh');
            $('.menu-holder').removeClass('act');

        }
    }


});