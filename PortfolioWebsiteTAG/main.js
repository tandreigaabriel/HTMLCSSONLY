const bodyElement = document.querySelector('body');
const menuToggle = document.querySelector('.hamburger-menu');
const heroElement = document.querySelector('.hero');
const navList = document.querySelector('.nav-list')
// add eventlistener to hamburger menu


menuToggle.addEventListener('click', function () {
    bodyElement.classList.toggle('is-open')
    heroElement.classList.add('is-open')
})


navList.addEventListener('click', function (e) {
    let clickedElement = e.target;

    if (clickedElement.classList[0] === "nav-link") {
        bodyElement.classList.remove('is-open')
    }

})

// add eventlistener to the window object to close nav when we click outside
window.addEventListener('click', function (e) {
    let clickedElement = e.target;

    if (clickedElement.matches('.is-open')) {
        bodyElement.classList.remove('is-open')
        heroElement.classList.remove('is-open')

    }
})