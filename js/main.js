// main elements
const langItems = document.querySelectorAll('.languages__item');
const langCurrent = document.querySelector('.languages__current');
const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger');

// function for display current (selected) language
const displayCurrentLanguage = e => {
    e.preventDefault();

    for (let i = 0; i < langItems.length; i ++) {
        langItems[i].classList.remove('js-active');
    }

    e.target.classList.add('js-active');

    langCurrent.textContent = e.target.textContent;
};

const toggleMenu = e => {
    nav.classList.toggle('js-open');
    document.body.classList.toggle('js-overflow');
};

const showMenu = () => {
    if (document.documentElement.clientWidth >= 751 || window.innerWidth >= 768) {
        document.body.classList.remove('js-overflow');
    }
};

window.onload = function() {
    // listeners for language selection
    for (let i = 0; i < langItems.length; i ++) {
        langItems[i].addEventListener('click', displayCurrentLanguage);
    }

    burger.addEventListener('click', toggleMenu);
    window.addEventListener('resize', showMenu);
};