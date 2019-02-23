//smoose scroll to block news in all pages
$(document).ready(function(){
    $(".menu-comment-block").on("click", function (event) {
        event.preventDefault();
        var id  ='#news',
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

//animate scroll to comments of news
document.querySelectorAll('.comments').forEach(function (el) {
    el.addEventListener('click',function (e) {
        e.preventDefault();
        var id  ='#go-comments-block',
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
})
})

//delete placeholder *search* in small screens
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

//hide show menu in header
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
//inc like in news
document.querySelectorAll('.likes').forEach(function (el) {
    el.addEventListener('click', function (e) {
        e.target.parentNode.classList.toggle("liked")
        console.log(e.target.innerHTML)
        if(e.target.parentNode.classList.contains("liked")){
            e.target.innerHTML = +e.target.innerHTML+1
        }else{
            e.target.innerHTML = +e.target.innerHTML-1
        }
})
})
//btn hide comments
document.querySelectorAll(".btn-hide-more-comments").forEach(function (el) {
    el.addEventListener('click',function (e) {
        this.parentNode.querySelectorAll('.written-comment').forEach(function (el) {
            el.classList.add('hide');
        })
        this.parentNode.querySelector('.btn-hide-more-comments').classList.remove('show')
        this.parentNode.querySelector('.btn-show-more-comments').innerHTML="Показати коментарі"

        //check if show more com btn visible
        if(this.parentNode.querySelector('.btn-show-more-comments').classList.contains('display-none')){
            this.parentNode.querySelector('.btn-show-more-comments').classList.remove('display-none')
        }

    })
});
//btn show more comments
document.querySelectorAll(".btn-show-more-comments").forEach(function (el) {
    el.addEventListener('click',function (e) {
        let myButton = e.target;

        let i = 0;
        this.parentNode.querySelectorAll('.written-comment').forEach(function (el) {
            if(el.classList.contains('hide') && i<2) {
                el.classList.remove('hide');
                i++;
            }
        })
        //check if first clik on btn show comment
        if(this.parentNode.querySelector('.btn-show-more-comments').innerHTML=="Показати коментарі"){
            this.parentNode.querySelector('.btn-show-more-comments').innerHTML="Показати быльше коментарів..."
        }

        //hide show more if no comments
        if( this.parentNode.querySelectorAll('.hide').length == 0){
            this.parentNode.querySelector('.btn-show-more-comments').classList.add('display-none')
        }
        $(".slick-list").height("auto");
        //show btn hide comments
        this.parentNode.querySelector('.btn-hide-more-comments').classList.add('show')
    })
});