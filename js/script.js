document.getElementById("sweeties1").addEventListener('click', () => toggleMe3(document.querySelector(".menu-mobail")));
document.getElementById("sweeties2").addEventListener('click', () => toggleMe3(document.querySelector(".menu-mobail")));

function toggleMe3(x) {
    if (!x) return true;
    if (x.style.display === "none" || x.style.display === "") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    return true;
}
/*.............................СКРЫТЬ-РАЗВЕРНУТЬ ТЕСКТ.................................*/
const whatWillHappenButtonNode = document.querySelector("#js-whatWillHappen-btn");
let isWhatWillHappenButtonPressed = false;

whatWillHappenButtonNode.addEventListener('click', () => {
    document.querySelector('.whatWillHappen__txt-mobail2').classList.toggle('expend-btn__hidden');
    isWhatWillHappenButtonPressed = !isWhatWillHappenButtonPressed;
    whatWillHappenButtonNode.innerText = isWhatWillHappenButtonPressed ? 'Свернуть <' : 'Продолжение >';
});

const aboutButtonNode = document.querySelector("#js-aboutTheAuthor-btn");
let isAboutButtonPressed = false;

aboutButtonNode.addEventListener('click', () => {
    document.querySelector('.aboutTheAuthor__txt-mobail2').classList.toggle('expend-btn__hidden');
    isAboutButtonPressed = !isAboutButtonPressed;
    aboutButtonNode.innerText = isAboutButtonPressed ? 'Свернуть <' : 'Продолжение >';
});

const placeButtonNode = document.querySelector("#js-place-btn");
let isPlaceButtonPressed = false;

placeButtonNode.addEventListener('click', () => {
    document.querySelector('.place-mobail').classList.toggle('expend-btn__hidden');
    isPlaceButtonPressed = !isPlaceButtonPressed;
    placeButtonNode.innerText = isPlaceButtonPressed ? 'Скрыть карту' : 'Показать на карте';
});
/* ..........................................SWIPER СЛАЙДЕР НАЧАЛО........................ */
var swiper1 = new Swiper('.swiper1', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Default parameters
    slidesPerView: 0,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    // Responsive breakpoints1
    breakpoints: {
        // when window width is >= 360px
        360: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        // when window width is >= 1378px
        1378: {
            slidesPerView: 3,
            // spaceBetween: 100
        },
    }
})
/* ..........................................SWIPER СЛАЙДЕР КОНЕЦ........................ */
document.addEventListener('DOMContentLoaded', () => { // DOM готов к взаимодейтсвию
    const onScrollHeader = () => { // объявляем основную функцию onScrollHeader
        const header = document.querySelector('.header__mobail') // находим header и записываем в константу
        let prevScroll = window.pageYOffset // узнаем на сколько была прокручена страница ранее
        let currentScroll // на сколько прокручена страница сейчас (пока нет значения)
        window.addEventListener('scroll', () => { // при прокрутке страницы
            currentScroll = window.pageYOffset // узнаем на сколько прокрутили страницу
            const headerHidden = () => header.classList.contains('header_hidden') // узнаем скрыт header или нет
            if (currentScroll > prevScroll && !headerHidden()) { // если прокручиваем страницу вниз и header не скрыт
                header.classList.add('header_hidden') // то скрываем header
            }
            if (currentScroll < prevScroll && headerHidden()) { // если прокручиваем страницу вверх и header скрыт
                header.classList.remove('header_hidden') // то отображаем header
            }
            prevScroll = currentScroll // записываем на сколько прокручена страница на данный момент
        })
    }
    onScrollHeader() // вызываем основную функцию onScrollHeader
});