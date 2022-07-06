const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

function toggleMenu() {
  hamburger.classList.toggle('open');
  navList.classList.toggle('open');
}

hamburger.addEventListener('click', e => {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', e => {
    const target = e.target;
    const clickOnMenu = target == navList || navList.contains(target);
    const clickOnHamburger = target == hamburger;
    const menuIsOpen = navList.classList.contains('open');
    if (!clickOnMenu && !clickOnHamburger && menuIsOpen) {
        toggleMenu();
    }
    if (clickOnMenu) {
        toggleMenu();
    }
});


const button = document.querySelector('#btnCodeSpoiler');
const code = document.querySelector('.code');

function toggleSpoiler() {
    code.classList.toggle('shown');
};

button.addEventListener('click', e => {
    toggleSpoiler();
    button.innerHTML === "Show code" ? button.innerHTML = "Hide code" : button.innerHTML = "Show code";
});
