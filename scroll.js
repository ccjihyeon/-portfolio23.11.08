const contentWebper = document.getElementById('content-webper');
        let bodyHeight;
    
        
        HorizentalPage();
                
        window.addEventListener('resize', HorizentalPage)

        function addScrollEvent() {
            document.body.style.height = `${bodyHeight - (window.innerWidth-window.innerHeight)}px`
            window.addEventListener('scroll', scrollHor)
        }
        function scrollHor()  {
            contentWebper.style.transform = `translateX(-${window.scrollY}px)`
        }

        function HorizentalPage() {
            bodyHeight = contentWebper.getBoundingClientRect().width;
         
            let sum = 0 ;
            for(let i = 0 ; i < contentWebper.childElementCount; i ++) {
                console.log(contentWebper.children[i].getBoundingClientRect().width)
            }

            document.body.style.height = 'auto';
            window.removeEventListener('scroll',scrollHor);
            contentWebper.style.transform = `translateX(0px)`
            if(window.innerWidth >= 1366) {
                addScrollEvent()
            }
        }
    


        // 테스트용 코드

        const contents = document.querySelector('.history-title-content')
        window.addEventListener('scroll', ()=>{
            console.log(contents.getBoundingClientRect())
        })