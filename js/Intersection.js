historyIneraction();

function historyIneraction(){

    const historySection = document.querySelectorAll('.history-title-content');
    
    document.addEventListener('DOMContentLoaded', function () {
        
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }
    
    const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    });
    
    for (const iterator of historySection) {
        observer.observe(iterator);
    }
});
}




document.addEventListener('DOMContentLoaded', function () {
    const teamSymbolSection = document.querySelectorAll('.symbol');

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0
    });
    teamSymbolSection.forEach((symbol)=>{

        observer.observe(symbol);
    })
});