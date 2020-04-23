const union = document.querySelector('.union');
const unionFilling = union.querySelector('.union__filling');
const nav = document.querySelector('.nav');
const navItem = nav.querySelectorAll('.nav__item');
const navText = nav.querySelectorAll('.nav__text');
const logo = document.querySelector('.logo');
const logoImg = logo.querySelector('.logo__img');
const logoText = logo.querySelector('.logo__text');
let title = document.querySelector('.title');
const line = document.querySelectorAll('.line');
const search = document.querySelector('.search');
const searchImg = search.querySelector('.search__img');
// Условия чтобы сразу проверить какой пункт меню выбран.
if (window.screen.width > 715) {
    checkChoice();
} 

   //отрытие/закрытие Sidebar

function openSidebar() {
    for(let i=0; i<navText.length; i++) {
        navText[i].classList.toggle('addBlock');
    }
    logoText.classList.toggle('addBlock');

    
     //Изменение пути к картинке в кнопке сайдбара

    if (unionFilling.outerHTML === '<img class="union__filling" src="./images/burgerMenu.png" alt="">') {
        unionFilling.src = './images/menuExit.png';
    }
    else if (unionFilling.outerHTML === '<img class="union__filling" src="./images/menuExit.png" alt="">') {
        unionFilling.src ='./images/burgerMenu.png';

    }
}
union.addEventListener('click', openSidebar);

navItem.forEach(function(item) {
    item.addEventListener('click', changeText);
})

//Меняет заголовок по выбору пункта меню

function changeText() {  
    title.textContent = this.textContent;
    checkChoice();
}

//Окрашивает выбранный заголовок в сайдбаре и проявляет line
function checkChoice() {
    for(let i=0; i<navItem.length; i++) {
        if (navText[i].innerText === title.innerText) {
            navItem[i].classList.add('filter');
            line[i].classList.add('addBlock');
            
        }
        else if (navItem[i].classList.contains('filter')) {
            navItem[i].classList.remove('filter');
            line[i].classList.remove('addBlock');
        }
    }
}
// Функция отслеживания скрола для назначаниея ширины поисковой строке
$(window).scroll(function(){
    if (window.screen.width <1061) {
        if ($(window).scrollTop() > 20) {
            $('.search').addClass('searchwidth');
            if (window.screen.width < 351) {   // убирает картинку увеличительного стекла
                searchImg.classList.add('removeBlock');
            }            
        }
        else {
            $('.search').removeClass('searchwidth');
            if (window.screen.width < 351) {
                searchImg.classList.remove('removeBlock');
            }
        }
    }
    
});

// чтобы закрывалась пометка(line) при закрытии панели union.
if (window.screen.width < 716) {
    union.addEventListener('click', checkChoicemob);
}
function checkChoicemob() {
    for(let i=0; i<navItem.length; i++) {
        if (navText[i].innerText === title.innerText) {
            navItem[i].classList.toggle('filter');
            line[i].classList.toggle('addBlock');
        }
    }
    if (window.screen.width < 716) {
        logoImg.classList.toggle('addBlock');
    }
}