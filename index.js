const elements = document.querySelectorAll('.hammenulist');

function changeColor(element) {
    elements.forEach(function (el) {
        el.classList.remove('nav-active');
        element.classList.add('nav-active');
    });
    element.classList.add('nav-active');
}

elements.forEach(function (element) {
    element.addEventListener('click', function () {
        changeColor(element);
    });
});