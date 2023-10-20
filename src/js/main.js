const html = document.querySelector('html')
const nav = document.querySelector('.nav')
const ulList = document.querySelector('.nav__list')
const itemLink = document.querySelectorAll('.nav__item')
const burgerBtn = document.querySelector('.nav__btn-burger')
const closeBtn = document.querySelector('.nav__btn-close')
const errorText = document.querySelector('.footer__mail-error')
const inputSubmit = document.querySelector('.footer__mail-input')
const btnSubmit = document.querySelector('.footer__mail-button')
const footerYear = document.querySelector('.footer__year')

const handleMenu = () => {
    if(ulList.classList.contains('nav__list--active')) {
        burgerBtn.classList.remove('hide')
        closeBtn.classList.add('hide')
        ulList.classList.remove('nav__list--active')
    } else {
        ulList.classList.add('nav__list--active')
        burgerBtn.classList.add('hide')
        closeBtn.classList.remove('hide')
    }
    disableScroll()
}

const disableScroll = () => {
    if(ulList.classList.contains('nav__list--active')) {
        html.style.overflow = 'hidden'; 
    } else {
        html.style.overflow = 'scroll'; 
    }
}

const sendMail = () => {
    if(inputSubmit.value === '' || inputSubmit.value.length <= 10) {
        errorText.style.visibility = 'visible'
    } else {
        errorText.style.visibility = 'hidden'
    }
}

const resizeMenu = () => {
    if(window.innerWidth >= 992) {
        ulList.classList.remove('nav__list--active')
        burgerBtn.classList.remove('hide')
        closeBtn.classList.add('hide')
    }
}

const navBackground = () => {
    if(window.scrollY > 10) {
        nav.classList.add('scroll-menu')
    } else {
        nav.classList.remove('scroll-menu')
    }
}

const handleCurrentYear = () => {
    const year = new Date().getFullYear();
    footerYear.innerText = year
}

handleCurrentYear();
window.addEventListener('scroll', navBackground)
window.addEventListener('resize', resizeMenu)
btnSubmit.addEventListener('click', sendMail)
burgerBtn.addEventListener('click', handleMenu)
closeBtn.addEventListener('click', handleMenu)

itemLink.forEach(item => {
    item.addEventListener('click', () => {
        burgerBtn.classList.remove('hide')
        closeBtn.classList.add('hide')
        ulList.classList.remove('nav__list--active')
        disableScroll()
    })
})