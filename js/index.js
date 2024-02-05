const elements = document.querySelectorAll('.hammenulist');

const hambuttonClick = document.querySelector('.hambutton-cilck')


function changeColor(element) {
    elements.forEach(function (el) {
        el.classList.remove('nav-active');
    });
    element.classList.add('nav-active');
}


elements.forEach(function(element) {
    element.addEventListener('click', ()=>{
        changeColor(element);
        console.log(element);
    });
});
const button = document.querySelector('.hambutton');

function closeMenu(){
    button.classList.remove('active');
    hambuttonClick.classList.remove('active')
    // 메뉴 닫는부분 추가
}

function openMenu(){
    button.classList.add('active');
    hambuttonClick.classList.add('active')
}

button.addEventListener('click',()=>{
    if(!button.classList.contains('active')) {
        openMenu();
    }else{
        closeMenu();
    }
})
