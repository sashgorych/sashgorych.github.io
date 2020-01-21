window.onload = function () {
    $('#check-in').datepicker({
        minDate: new Date(),
        autoClose: true

    })
    $('#check-out').datepicker({
        minDate: new Date(),
        autoClose: true
    })
    lightGallery(document.getElementById('lightgallery'));
    lightGallery(document.getElementById('lightgallery2'));
    checkCookie();
}
let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.menu');
let btnCall = document.querySelector('.call');
let btnDate = document.querySelector('.mobile-call');
let btnCallcont = document.querySelector('.numbers-window');
let dateBtn = document.querySelector('.getDate');
let chooseDateCont = document.querySelector('.choose-date');
let cancelChooseDateBtn = document.querySelector('#cancel');
const toggleMenu = () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('is-active');
}
const toggleDateContainer = () => {
    chooseDateCont.classList.toggle('active');
}
const toggleCall = () => {
    btnCallcont.classList.toggle('active');
}

cancelChooseDateBtn.addEventListener('click', e => {
    e.stopPropagation();
    chooseDateCont.reset();
    toggleDateContainer();
});
hamburger.addEventListener('click', e => {
    e.stopPropagation();

    toggleMenu();
});
dateBtn.addEventListener('click', e => {
    e.stopPropagation();
    toggleDateContainer();
});
btnDate.addEventListener('click', e => {
    e.stopPropagation();
    toggleDateContainer();
});
btnCall.addEventListener('click', e => {
    e.stopPropagation();
    toggleCall();
});


document.addEventListener('click', e => {
    let target = e.target;
    let its_menu = target == menu || menu.contains(target);
    let its_callCont = target == btnCallcont || btnCallcont.contains(target);
    let its_hamburger = target == hamburger;
    let its_callBtn = target == btnCall;
    let menu_is_active = menu.classList.contains('active');
    let its_callCont_is_active = btnCallcont.classList.contains('active');

    if (!its_menu && !its_hamburger && menu_is_active) {
        toggleMenu();
    }
    if (!its_callCont && !its_callBtn && its_callCont_is_active) {
        toggleCall();
    }
})


$('ul a[href*="#"]').on('click', function(e) {
    e.preventDefault()

    $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
    )
})
document.querySelector('.choose-date').addEventListener('click',function (e) {
    if(e.target.id == 'name'){
        let name = document.querySelector('#name');
        name.classList.remove('error');
    }
    if(e.target.id == 'phone'){
        let phone = document.querySelector('#phone');
        phone.classList.remove('error');
    }
    if(e.target.id == 'check-out'){
        let checkout = document.querySelector('#check-out');
        checkout.classList.remove('error');
    }
    if(e.target.id == 'email'){
        let email = document.querySelector('#email');
        email.classList.remove('error');
    }
    if(e.target.id == 'check-in'){
        let checkin = document.querySelector('#check-in');
        checkin.classList.remove('error');
    }
})
document.querySelector('#sendData').onclick = function (e) {
    e.preventDefault()
    let error = false;
    let name = document.querySelector('#name');
    let phone = document.querySelector('#phone');
    let email = document.querySelector('#email');
    let checkout = document.querySelector('#check-out');
    let checkin = document.querySelector('#check-in');
    let message = {
        'name': name.value,
        'email': document.querySelector('#email').value,
        'phone': phone.value,
        'check-in': checkin.value,
        'check-out': checkout.value,
        'countPeople': document.querySelector('#countPeople').value,
        'childCount': document.querySelector('#childCount').value,
        'roomCount': document.querySelector('#roomCount').value,
    }
    if(message['name'].length==0 ){
        name.classList.add('error');
        error = true;
    }
    if(message['email'].length==0 ){
        email.classList.add('error');
        error = true;
    }
    if(message['check-in'].length==0 ){
        checkin.classList.add('error');
        error = true;

    }
    if(message['check-out'].length==0 ){
        checkout.classList.add('error')
        error = true;

    }
    if(message['phone'].length==0 ){
        error = true;
        phone.classList.add('error')
    }
    if(!error) {
        call(message);
        showSuccess();
    }
}
function showSuccess() {
   let box = document.querySelector('#submitMsg');
   box.classList.add('active');
setTimeout(function () {
    box.classList.remove('active');
},2000)
}
function call(msg) {
    $.ajax({
        type: 'POST',
        url: "../js/mail.php",
        data: msg,
        success: function (data) {
            let form = document.querySelector('.choose-date');
           form.classList.remove('active');
           form.reset();
        },
        error: function (xhr, str) {
            alert('Возникла ошибка: ' + xhr.responseCode);
        }
    });

}
document.querySelector('#apply').addEventListener('click',cookieApply)
function checkCookie () {
    let coocieaccept= localStorage.getItem('coocie-accept')
    if(!coocieaccept){
        document.querySelector('.coocie-baner').classList.add('show')
    }
}
function cookieApply(e) {
    e.preventDefault();
    localStorage.setItem('coocie-accept', true);
    document.querySelector('.coocie-baner').classList.remove('show')
}