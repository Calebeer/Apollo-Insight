
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/close2.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close2.png";
    }
}

const observer = new IntersectionObserver( entries =>{
    console.log(entries)
})

