const btnMenu = document.querySelector('.btn-rond-menu')
const nav = document.querySelector('.nav-gauche');
const allItemNav = document.querySelectorAll('.nav-menu-item');
const ligne = document.querySelector('.cont-ligne');

btnMenu.addEventListener('click', () => {

    ligne.classList.toggle('active')
    nav.classList.toggle('menu-visible')

})

if(window.matchMedia('(max-width: 1300px)')) {
 
    allItemNav.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.toggle('menu-visible')
            ligne.classList.toggle('active');
        })
    })

}


const txtAnim = document.querySelector('.txt-animation');

let typewriter = new Typewriter(txtAnim,  {
    loop: false,
    deleteSpeed: 20
})

typewriter 
.pauseFor(900)
.changeDelay(20)
.typeString('Moi c\'est Guillaume Azas')
.pauseFor(300)
.typeString('<strong>, Développeur Web</strong> !')
.pauseFor(1000)
.deleteChars(6)
.typeString('<span style="color: #27ae60;"> CSS</span> !')
.pauseFor(1000)
.deleteChars(6)
.typeString('<span style="color: #EA39ff;"> Bootstrap</span> !')
.pauseFor(1000)
.deleteChars(11)
.typeString('<span style="color: midnightblue;"> Freelance</span> !')
.pauseFor(1000)
.deleteChars(11)
.typeString('<span style="color: #ff6910;"> Front-End</span> !')
.start()