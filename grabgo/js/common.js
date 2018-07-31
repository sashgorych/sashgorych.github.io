
(function init() {
    document.querySelectorAll('.ChangeTimeOfDay').forEach(el=>el.classList.add("night"));
    document.querySelectorAll('.ChangeTimeOfDay').forEach(el=>el.classList.remove("night"));
    setTimeout(function () {
        document.querySelector('.content').classList.add("show");
    // document.body.removeChild(document.querySelector('.preloader'));
    },2000);
    document.onmousemove=getCoords;
})();
let config={
    ulPadding: 40
}
function getCoords(elem) {
    var left = elem.clientX-(screen.width/2);
    x(left);
}
function x(arg) {
    var a= document.getElementsByClassName("city1")[0];
    var b= document.getElementsByClassName("city2")[0];
    var c= document.getElementsByClassName("forest")[0];
    a.style.left=-arg/40 +'px';
    b.style.left=-arg/90 +'px';
    c.style.left=-arg/25 +'px';

}
document.querySelector(".changeDay").onclick=function () {
let blocks=document.querySelectorAll('.ChangeTimeOfDay').forEach(el=>el.classList.toggle("night"));

};


//change food
let blockFood = document.querySelectorAll(".screen2_c1");
let allIcon=document.querySelectorAll(".foods>ul>li");
let foodText = document.querySelectorAll('.text');
document.querySelector('.foods').onclick=function () {
    let iconData = event.target.dataset.type;
    iconData && showCorrectFood(iconData,event.target);
};

function showCorrectFood(iconData,icon) {
    allIcon.forEach(el=>hide(el));
    blockFood.forEach(el => {
        hide(el);
        if(el.getAttribute('data-type')==iconData){
            active(el);
            active(icon)
        }
    });
    foodText.forEach(el => {
        hide(el);
        if(el.getAttribute('data-type')==iconData){
            active(el);
        }
    });

}
function hide(el) {
    el.classList.remove("active");
}
function active(el) {
    el.classList.add("active");
}
//change food







$(".slideBar li").click(function () {
    move(this,this.dataset.type);
    // document.querySelector(".manyChips") .classList.toggle("move")
});
let dots = {
    dot1: '0',
    dot2: '133',
    dot3: '270',
    dot4: '405',
    delta: "30"
};

let ul = document.querySelector(".slideBar")
var ball = document.querySelector(".btn");
let li = document.querySelector(".slideBar li");

function moveAtDot() {

    currentBlockLeft = ball.offsetLeft;

    if (currentBlockLeft < dots.dot2 - (dots.dot2 - dots.dot1) / 2) {
        $('.btn').animate({left: dots.dot1 + 'px'}, 200);
        moveDots(dots.dot1+"px");
        moveAnimateAllItems(dots.dot1);
    } else if (currentBlockLeft < dots.dot3 - (dots.dot3 - dots.dot2) / 2) {
        $('.btn').animate({left: dots.dot2 + 'px'}, 200);
        moveDots(dots.dot2 +"px");
        moveAnimateAllItems(dots.dot2);
    } else if (currentBlockLeft < dots.dot4 - (dots.dot4 - dots.dot3) / 2) {
        $('.btn').animate({left: dots.dot3 + 'px'}, 200);
        moveDots(dots.dot3 +"px");
        moveAnimateAllItems(dots.dot3);
    } else {
        $('.btn').animate({left: dots.dot4 + 'px'}, 200);
        moveDots(dots.dot4 +"px");
        moveAnimateAllItems(dots.dot4);
    }
}
let currentDotPosition = document.querySelector(".dot1");
function moveDots(distanceLeft = getComputedStyle(ball).left) {
    currentDotPosition.style.clip = "rect(0px 450px 10px " + distanceLeft  + ")";
}

function moveflag(e) {
    if (e.pageX < ul.offsetLeft+config.ulPadding) {
        ball.style.left = "0px";
    } else if (e.pageX > ul.offsetLeft + 480 - config.ulPadding) {
        ball.style.left = "405px";
    } else {
        ball.style.left = e.pageX - ul.offsetLeft - ball.offsetWidth / 2 + 'px';
    }
}
ball.onmousedown = function (e) {
    function moveAt(e) {
        moveDots();
        moveflag(e);
        if(!document.onmousemove){
            console.log('dsadsas')
        }
    }
    document.onmousemove = function (e) {
        moveAt(e);
        // moveElement($('.ch3'),ball.offsetLeft)
        moveAllItems(ball.offsetLeft);
    };

    document.onmouseup = function () {
        moveAtDot();
        document.onmousemove = null;
        document.onmouseup = null;
    };

}
ball.ondragstart = function () {
    return false;
};
let items={
    i1:
        {
            item:$('.ch1'),
            duration:.85
},
    i2:{
        item:$('.ch2'),
        duration:1.3
    },
    i3:{
        item:$('.ch3'),
        duration:1.6
    },
    i4:{
        item:$('.ch4'),
        duration:1
    },
    i5:{
        item:$('.ch5'),
        duration:.9
    },
    i6:{
        item:$('.ch6'),
        duration:.6
    },
    i7:{
        item:$('.ch7'),
        duration:1.2
    },
    i8:{
        item:$('.ch8'),
        duration:1.57
    },
    i9:{
        item:$('.ch9'),
        duration:.85
    },
    i10:{
        item:$('.ch10'),
        duration:1.6
    }
}
let itemsScreen2={
    i1:{
        item:$('.sc2i1'),
        duration:1
    },
    i2:{
        item:$('.sc2i2'),
        duration:1
    },
    i3:{
        item:$('.sc2i3'),
        duration:1
    },
    i4:{
        item:$('.sc2i4'),
        duration:1
    },
    i5:{
        item:$('.sc2i5'),
        duration:1
    },
    i6:{
        item:$('.sc2i6'),
        duration:1
    },
    i7:{
        item:$('.sc2i7'),
        duration:1
    },
    i8:{
        item:$('.sc2i8'),
        duration:1
    },
}
function moveAllItems(position) {
    for(let key in items){
        moveElement(items[key]['item'],-position*0.75,items[key]['duration'],0);
    }
    for(let key in itemsScreen2){
        moveElement(itemsScreen2[key]['item'],-position*0.75,itemsScreen2[key]['duration'],100);
    }

    $(".Screen2_ch").css("left",-position*0.75+100+"vw")
    $(".Screen3_ch").css("left",-position*0.74+200+"vw")
    $(".Screen4_ch").css("left",-position*0.74+300+"vw")
}
function moveElement(el,delta,duration=1,e) {
        let animation = el.animate({left:delta * duration + e + "vw"},0);
}
function moveAnimateAllItems(position) {
    $(".Screen2_ch").animate({left:-position*0.75+100+"vw"},400);
    $(".Screen3_ch").animate({left:-position*0.74+200+"vw"},400);
    $(".Screen4_ch").animate({left:-position*0.74+300+"vw"},400);
    for(let key in items){
        moveElementAnimate(items[key]['item'],position);
    }
}
function moveElementAnimate(el,delta) {
        el.animate({left:-delta+"vw"},400);
}
let ballMove = [0,133,270,405];
function move(el,elData) {
    moveDots(ballMove[elData] +"px");
    $(".btn").animate({left:ballMove[elData]+"px"},200);
    setTimeout(function () {
        $('.ch3').animate({left:elData* -100+"vw"}, 900);
    },100);
    setTimeout(function () {
        $('.ch8').animate({left:elData* -100+"vw"}, 1000);
    },150);
    setTimeout(function () {
        $('.ch2').animate({left:elData* -100+"vw"}, 1000);
    },200);

    setTimeout(function () {
        $('.ch1').animate({left:elData* -100+"vw"}, 1000);
    },100);

    setTimeout(function () {
        $('.ch4').animate({left:elData* -100+"vw"}, 900);
    },100);
    setTimeout(function () {
        $('.ch5').animate({left:elData* -100+"vw"}, 900);
    },100);
    setTimeout(function () {
        $('.ch6').animate({left:elData* -100+"vw"}, 900);
    },100);
    setTimeout(function () {
        $('.ch7').animate({left:elData* -100+"vw"}, 900);
    },100);

    setTimeout(function () {
        $('.ch9').animate({left:elData* -100+"vw"}, 1000);
    },350);
    setTimeout(function () {
        $('.ch10').animate({left:elData* -100+"vw"}, 1000);
    },350);

    setTimeout(function () {
        $('.Screen2_ch').animate({left:100+elData* -100+"vw"}, 1000);
    },250);
    setTimeout(function () {
        $('.Screen3_ch').animate({left:200+elData* -100+"vw"}, 1000);
    },250);
    setTimeout(function () {
        $('.Screen4_ch').animate({left:300+elData* -100+"vw"}, 1000);
    },250);



}