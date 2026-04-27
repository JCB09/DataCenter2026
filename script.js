
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav核心a');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = 'rgba(11, 31, 58, 0.95)';
            nav.style.padding = '10px 0';
            nav.style.transition = '0.3s';
        } else {
            nav.style.backgroundColor = 'transparent';
            nav.style.padding = '20px 0';
        }
    });

    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            console.log(`Navigating to: ${link.innerText}`);
        });
    });
});