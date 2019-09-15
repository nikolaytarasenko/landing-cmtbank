// main elements
const langItems = document.querySelectorAll('.languages__item');
const langCurrent = document.querySelector('.languages__current');

// function for display current (selected) language
const displayCurrentLanguage = e => {
    e.preventDefault();

    for (let i = 0; i < langItems.length; i ++) {
        langItems[i].classList.remove('js-active');
    }

    e.target.classList.add('js-active');

    langCurrent.textContent = e.target.textContent;
};

window.onload = function() {
    // listeners for language selection
    for (let i = 0; i < langItems.length; i ++) {
        langItems[i].addEventListener('click', displayCurrentLanguage);
    }
};