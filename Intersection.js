
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
        threshold: 0.5
    });

    for (const iterator of historySection) {
        observer.observe(iterator);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const clElement = document.querySelector('.cl');

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            const target = entry.target;
            if (entry.isIntersecting) {
                target.classList.add('visible');
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    });

    observer.observe(clElement);
});