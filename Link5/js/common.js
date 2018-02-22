var sec = new Date().getSeconds();
console.log(sec)

var min = new Date().getMinutes();
var hour = new Date().getHours();
console.log(hour)
var hourArrow = document.getElementsByClassName("hour")[0];
var minutesArrow  = document.getElementsByClassName("min")[0];
var secondsArrow  = document.getElementsByClassName("sec")[0];
var currentTime = document.getElementsByClassName("currentTime")[0];
var htmlDay = document.getElementsByClassName("currentDay")[0];
var dayToNewYear = document.getElementsByClassName("dayToNewYear")[0];

(function moveTime() {
    setdate();
    getDaysToNewYear();
    setArrow();
    setInterval(function () {
        updateTime();
    }, 1000);
})();
function setdate() {
    let time = new Date();
        htmlDay.innerHTML =`${dayName(time.getDay())} , ${time.getDate()}  ${month(time.getMonth())}`;
}
function setArrow() {
    secondsArrow.style.transform = "rotate(" + sec*6 + "deg)";
    minutesArrow.style.transform = "rotate(" + min*6 + "deg)";
    if(hour>12){
        hour=hour-12;
    }
     hourArrow.style.transform = "rotate(" + hour*30 + "deg)";
    subMuveHour(x(min));


}
function updateTime() {
    let time = new Date(),
        seconds=time.getSeconds(),
        minutes=time.getMinutes(),
        hours=time.getHours();
    seconds =  (seconds> 9) ? seconds : "0" + seconds;
    minutes = (minutes > 9) ? minutes : "0" + minutes;
    hours = (hours > 9) ? hours : "0" + hours;
    currentTime.innerHTML = `${hours}: ${minutes}: ${seconds}`;
    if(minutes%12==0){
        subMuveHour(x(minutes));
    }
    moveSec();
}

function moveSec() {
    sec+=1;
    secondsArrow.style.transform = "rotate(" + sec*6 + "deg)";
    if(sec % 60 == 0){
        moveMin();
    }
}

function moveMin() {
    let subdate=new Date().getMinutes();
    min+=1;
    minutesArrow.style.transform = "rotate(" + min*6 + "deg)";
    if(min % 60==0) {
        moveHour();
    }
    if(min%12==0){subMuveHour(x(subdate))}
}

function moveHour() {
    hour+=1;
    if(hour==12){
        hour-=12;
    }
    hourArrow.style.transform = "rotate(" + hour*30 + "deg)";

}


function subMuveHour(z) {
    let delta=hour*30+ parseInt(z)
    hourArrow.style.transform = "rotate(" + delta + "deg)";

}
function x(m) {
        if(m<12)return 6;
        if( (m>12)&&(m<24))return 12;
        if( (m>24)&&(m<36))return 18;
        if( (m>36)&&(m<48))return 24;
}
function getDaysToNewYear() {
    let curDate= new Date(),
        nextYear = new Date();
    nextYear.setFullYear((curDate.getFullYear()+ 1),0,1);
    let daysToNewYear = Math.round((nextYear - curDate) / 1000 / 60 / 60 / 24);
    dayToNewYear.innerHTML = "До нового року " + daysToNewYear + corectDay(daysToNewYear);
}

function corectDay(day) {
    switch(day % 10) {
        case 1:
            return "день";
        case 2,3,4:
            return "дні";
        default:
            return "днів";
    }
}

function dayName(dayOfWeek) {
    switch(dayOfWeek)
    {
        case 0:
            return "неділя";
        case 1:
            return "понеділок";
        case 2:
            return "вівторок";
        case 3:
            return "середа";
        case 4:
            return "четвер";
        case 5:
            return "п'ятниця";
        case 6:
            return "субота";
    }
}

function month(month) {
    switch(month)
    {
        case 0:
            return "січня";
        case 1:
            return "лютого";
        case 2:
            return "березня";
        case 3:
            return "квітня";
        case 4:
            return "травня";
        case 5:
            return "червня";
        case 6:
            return "липня";
        case 7:
            return "серпня";
        case 8:
            return "вересня";
        case 9:
            return "жовтня";
        case 10:
            return "листопада";
        case 11:
            return "грудня";
    }
}
