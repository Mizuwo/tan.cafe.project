const wrapper = document.querySelector('.wrapper');
const login = document.querySelector('.loginl');
const register = document.querySelector('.registerl');
const blogin = document.querySelector('.blogin');
const forgot = document.querySelector('.forgot');
const pclose = document.querySelector('.close-icon');
const popup = document.querySelector('.login-button');
const homecont = document.querySelector('.home-content');
const aboutcont = document.querySelector('.about-content');
const menucont = document.querySelector('.menu-container');
const bscont = document.querySelector('.bs-container');
const service = document.querySelector('.services');
const contact = document.querySelector('.contacts');
const credits = document.querySelector('.credits');
const bg = document.querySelector('.background');
const togglebg = document.querySelector('.togglebg');
const scrolltop = document.getElementById('backtotopbutton');
let scrollProgress = document.getElementById('progress');
let headerr = document.querySelector('.hh');
let navbaricon = document.querySelector('.navbaricon');
let navbarspinn = document.querySelector('.spinn');
const aboutTextBg = document.querySelector('.abouttextbga');


popup.addEventListener('click', () => {
    wrapper.classList.add('popup');
    /* homecont.classList.add('active');
    aboutcont.classList.add('active');
    menucont.classList.add('active');
    bscont.classList.add('active');
    service.classList.add('active');
    contact.classList.add('active');
    credits.classList.add('active'); */
    let stat = document.querySelectorAll('.stat');
    stat.forEach(function (element) {
        element.classList.add('statactive');
    });
});


pclose.addEventListener('click', () => {
    wrapper.classList.remove('popup');
    homecont.classList.remove('active');
    aboutcont.classList.remove('active');
    menucont.classList.remove('active');
    bscont.classList.remove('active');
    service.classList.remove('active');
    contact.classList.remove('active');
    credits.classList.remove('active');
    wrapper.classList.remove('active');
    wrapper.classList.remove('activee');
    let stat = document.querySelectorAll('.stat');
    stat.forEach(function (element) {
        element.classList.remove('statactive');
    });
});

register.addEventListener('click', () => {
    wrapper.classList.add('active');
});

login.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

forgot.addEventListener('click', () => {
    wrapper.classList.add('activee');
});

blogin.addEventListener('click', () => {
    wrapper.classList.remove('activee');
});

togglebg.addEventListener('click', () => {
    bg.classList.toggle('active');
    togglebg.classList.toggle('active');
});

navbarspinn.addEventListener('click', () => {
    navbaricon.classList.toggle('sliding');
    hh.classList.toggle('active');
});

scrollProgress.addEventListener("click", ()=> {
    document.documentElement.scrollTop = 0;
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollProgress.style.scale = '1';
        headerr.classList.add('slide');
        navbaricon.classList.add('slide');
    } else {
        scrollProgress.style.scale = '0';
        headerr.classList.remove('slide');
        navbaricon.classList.remove('slide');
        navbaricon.classList.remove('sliding');
        headerr.classList.remove('active');
    }
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hide');
hiddenElements.forEach((el) => observer.observe(el));

/* const aboutcontent = document.querySelector('.aboutimg').classList.contains('show'); */

/* if (aboutcontent) {
    aboutTextBg.classList.add('slide');
}
else {
    aboutTextBg.classList.remove('slide');
} */

/* document.addEventListener("DOMContentLoaded", function(event) {
    let firstImage = document.querySelector(".imageone");

    // Add event listener for animation iteration
    firstImage.addEventListener("animationiteration", function(event) {
        // Stop the animation when it reaches 100%
        if (firstImage.style.transform === "translateX(-50%)") {
            firstImage.style.animationPlayState = "paused";
        }
    });
}); */