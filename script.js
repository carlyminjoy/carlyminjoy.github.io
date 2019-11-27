document.addEventListener('scroll', function(e) {
    var nav = document.getElementById('nav');
    if (window.scrollY == 0) {
        nav.classList.add('transparent')
        nav.classList.remove('shadow');
    } else {
        nav.classList.remove('transparent');
        nav.classList.add('shadow');
    }

    console.log(window.scrollY);
})