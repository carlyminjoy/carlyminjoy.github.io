const nav = document.getElementById('nav');
const links = ['about', 'projects', 'contact'];

document.addEventListener('scroll', function(e) {
    if (window.scrollY == 0) {
        nav.classList.add('transparent')
        nav.classList.remove('shadow');
    } else {
        nav.classList.remove('transparent');
        nav.classList.add('shadow');
    }
})

links.forEach(function(link) {
    let linkId = link + '-link';
    let linkEl = document.getElementById(linkId);
    
    linkEl.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('inside event listener', link)

        document.getElementById(link).scrollIntoView({ 
            behavior: 'smooth' 
        });
    })
})

// Modals for project screenshots
let fundraisingLink = document.getElementById('fundraisingProject');
let conversationalLink = document.getElementById('conversationalProject');

fundraisingLink.addEventListener('click', function(e) {
    e.preventDefault();
    $('#fundraisingModal').modal({});
})

conversationalLink.addEventListener('click', function(e) {
    e.preventDefault();
    $('#conversationalModal').modal({});
})
