function toggleMenu() {
    const menu = document.getElementById('menu');                                   
    menu.classList.toggle('active');
    const menuIcon = document.querySelector('.menu-icon i');
    if (menu.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
}

document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.getElementById('menu');
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            const menuIcon = document.querySelector('.menu-icon i');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) { 
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    sections.forEach(section => {
        if (scrollPos >= section.offsetTop - 50 && scrollPos < section.offsetTop + section.offsetHeight) {
            document.querySelectorAll('.menu a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${section.id}`) {
                    link.classList.add('active');
                }
            });
        }   
    });
});

