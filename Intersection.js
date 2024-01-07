
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