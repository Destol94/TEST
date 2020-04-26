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

// Условия проверки выбора заголовка. При меньше разрешении проверка не нужна, так как сайд бар скрыт полностью
if (window.innerWidth > 715) {
    checkChoice();
} 

   //отрытие/закрытие Sidebar

function openSidebar() {
    for(let i=0; i<navText.length; i++) {
        navText[i].classList.toggle('addBlock');
    }
    logoText.classList.toggle('addBlock');
    logo.classList.toggle('addBlock');

     //Изменение картинки кнопки откр/закр Sidebar

    if (unionFilling.outerHTML === '<img class="union__filling" src="./images/burgerMenu.png" alt="">') {
        unionFilling.src = './images/menuExit.png';
    }
    else if (unionFilling.outerHTML === '<img class="union__filling" src="./images/menuExit.png" alt="">') {
        unionFilling.src ='./images/burgerMenu.png';
    }
}

//кнопка открытия/закрытия Sidebar
union.addEventListener('click', function(){
    if (window.innerWidth > 715) {
        openSidebar();
    }
    else {
        checkChoicemob();
        openSidebar();
    }
});

//отрытие/закрытие Sidebar на маленьких рахрешениях
function checkChoicemob() {
    for(let i=0; i<navItem.length; i++) {
        if (navText[i].innerText === title.innerText) {
            navItem[i].classList.toggle('filter');
            line[i].classList.toggle('addBlock');
        }
    }
}

//Меняет заголовок по выбору пункта меню
navItem.forEach(function(item) {
    item.addEventListener('click', changeText);
})

function changeText() {
    title.textContent = this.textContent;
    checkChoice();
}

//Окрашивает выбранный заголовок в Sidebar и проявляет line
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
$(window).scroll(scrollsearch);
function scrollsearch(){
    if (window.innerWidth <1061) {
        if ($(window).scrollTop() > 20) {
            $('.search').addClass('searchwidth');
             // убирает картинку увеличительного стекла
             if (window.innerWidth <351) {
                searchImg.classList.add('removeBlock');
             }
             addEventListener('resize', function(){  // убирает картинку поиска, если при проскроленной страницу уменьшить ширину
                 if (window.innerWidth < 351) {
                    searchImg.classList.add('removeBlock');
                 }
             })
            
        }
        else {
            $('.search').removeClass('searchwidth');
            searchImg.classList.remove('removeBlock');
        }
    }
    
}

// проверка если уже страница прокручена вниз, чтобы поисковая строка была нужной ширины
scrollsearch();


//если меню не открыто, убирать line
addEventListener('resize',function(){
     if (!(navText[2].classList.contains('addBlock')) && (window.innerWidth < 716)) { 
        for (let i=0; i < line.length; i++) {
            if (line[i].classList.contains('addBlock')) {
                line[i].classList.remove('addBlock');
                navItem[i].classList.remove('filter');
            }
        }
    }
    else {
        checkChoice();
    }
    if (window.innerWidth >350) {  //Проявляет картинку поиска в строке, если увеличивешь ширину при прокрученной странице вниз
        searchImg.classList.remove('removeBlock');
    }
});