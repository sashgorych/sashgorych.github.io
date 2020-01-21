let hamburger = document.querySelector('.burger');
let menu = document.querySelector('.main-menu');
let hamburger2 = document.querySelector('.btn-card');
let menu2 = document.querySelector('.cart-modal');
const toggleMenu = () => {
    menu.classList.toggle('active');
}

hamburger.addEventListener('click', e => {
    e.stopPropagation();

    toggleMenu();
});

document.addEventListener('click', e => {
    let target = e.target;
    let its_menu = target == menu || menu.contains(target);
    let its_hamburger = target == hamburger;
    let menu_is_active = menu.classList.contains('active');

    if (!its_menu && !its_hamburger && menu_is_active) {
        toggleMenu();
    }
    let its_menu2 = target == menu2|| menu2.contains(target);
    let its_hamburger2 = target == hamburger2;
    let menu_is_active2 = menu2.classList.contains('active');

    if (!its_menu2 && !its_hamburger2 && menu_is_active2) {
        toggleMenu2();
    }
})



const toggleMenu2 = () => {
    menu2.classList.toggle('active');
}

hamburger2.addEventListener('click', e => {
    e.stopPropagation();

    toggleMenu2();
});


