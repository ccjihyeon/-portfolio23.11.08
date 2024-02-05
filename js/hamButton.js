const webper = document.getElementById('content-webper');
const hamMenu = document.querySelector('.hammenu');

for(let i = 0 ; i < hamMenu.childElementCount ; i ++) {
    hamMenu.children[i].addEventListener('click',()=>{
        const pos = webper.children[i+1].offsetLeft
        // contentWebper.style.transform = `translateX(-${pos}px)`
        window.scrollTo({
            top: pos, // Y 좌표 (픽셀)
            left: 0, // X 좌표 (픽셀)
            behavior: 'smooth' // 부드러운 스크롤 적용
        });
    })
}

const upButton = document.querySelector('.up-button');

upButton.addEventListener('click', ()=> {
    window.scrollTo({
        top: 0, // Y 좌표 (픽셀)
        left: 0, // X 좌표 (픽셀)
        behavior: 'smooth' // 부드러운 스크롤 적용
    });
})