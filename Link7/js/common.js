$(document).ready(function () {
    changeToUa();
    fixedMenu();
    $(document).on("scroll", onScroll);
    $('#home a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            $(document).on("scroll", onScroll);
        });
    });
    $('.menu a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            $(document).on("scroll", onScroll);
        });
    });
});
$('.contact_me').on("click",function (event) {
    fixedMenu(event);
})
document.querySelector(".mobileMenu").addEventListener("click",menu);
function menu(e) {
    console.log( e.target.classList)
    e.target.classList.contains("closeMenu") && closeMenu();
    e.target.classList.contains("showMenu") && showMenu();
    e.target.classList.contains("ChangeLanguage") && closeMenu();
}
function closeMenu() {
    console.log('asas')
    document.querySelector(".mobileMenu").querySelector("ul").classList.remove("active");

}
function showMenu() {
    document.querySelector(".mobileMenu").querySelector("ul").classList.add("active");

}
function onScroll(event){
    var scrollPosition = $(document).scrollTop();
    if(scrollPosition>500){
    $('.aboutRight').addClass("active");
    }
    $('.top-menu a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top-300 <= scrollPosition && refElement.position().top-300+ refElement.height() > scrollPosition) {
            $('nav ul li a').removeClass("active");
            currentLink.addClass("active");
        }
        else{
            currentLink.removeClass("active");
        }
        if(scrollPosition<$("#home").height){
            $(".menu_home").addClass('active');
        }
    });
   fixedMenu(event)
}
function fixedMenu(event) {
    let scrollPosition = $(document).scrollTop();
    let refElement = $('#home');
    if(scrollPosition>refElement.height()){
        document.querySelector(".menu").classList.add("fix");
    }else{
        document.querySelector(".menu").classList.remove("fix");
    }
}
$('.language span').on("click",function () {
    document.querySelector(".language").querySelectorAll("span").forEach(function (el) {
        el.classList.remove('active');
    })
    $(this).addClass("active");
})
document.querySelector(".language").addEventListener("click", getLanguage);
function getLanguage(e) {
    (e.target.classList.contains("en") && document.body.dataset.type=="ua")&& changeToEnglish();
    (e.target.classList.contains("ua") && document.body.dataset.type=="en")&& changeToUa();
}

let dictionary = {
    "about": "про мене",
    "projects":"проекти",
    "home":"головна",
    "contact":"контакти",
    "have a question or want to work together?":"є питання чи пропозиції?",
    "submit":"відправити",
    "or find me here:":"або знайдіть мене тут:",
    "phone / viber":"телефон / viber",
    "chernivtsi, ukraine": "чернівці, україна"
};
console.log(document.querySelector(".ss").innerHTML);
function changeToEnglish() {
    document.body.dataset.type="en";
    document.querySelectorAll('.ChangeLanguage').forEach(function (element) {
        element.innerHTML = getKeyByValue(dictionary,element.innerHTML.toLowerCase());

    })

}
function changeToUa() {
    document.body.dataset.type="ua";
    document.querySelectorAll('.ChangeLanguage').forEach(function (element) {
        element.innerHTML = dictionary[element.innerHTML.toLowerCase()];

    });
}
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}
// (function () {
//     var is_hide=false;
//     var is_create=false;
//     function create(my_class) {
//         var div= document.createElement('div');
//         div.className=my_class;
//         document.body.appendChild(div);
//     }
//
//     $('body').on('click', '.menu ul', function(){
//         if(is_hide){
//             setTimeout(function () {
//                 $('.part1').remove();
//                 $('.part2').remove();
//                 $('.part3').remove();
//                 $('.part4').remove();
//                 $('.big_block').removeClass("hide");
//                 is_create=false;
//             },1800)
//         }
//         if(!is_create){
//             create("part1 part");
//             create("part2 part");
//             $('.big_block:first').clone().removeClass("big_block").appendTo('.part1');
//             $('.big_block:first').clone().removeClass("big_block").appendTo('.part2');
//             $('.big_block:first').clone().removeClass("big_block").appendTo('.part3');
//             $('.big_block:first').clone().removeClass("big_block").appendTo('.part4');
//             is_create=true;
//         }
//         if(is_create) {
//             setTimeout(function () {
//                 $('.part1').toggleClass("hide");
//                 $('.part2').toggleClass("hide");
//                 $('.part3').toggleClass("hide");
//                 $('.part4').toggleClass("hide");
//                 $('.big_block').addClass("hide");
//                 is_hide=!is_hide;
//             },10)
//
//         }
//
//
//     });
// })();