
let $root = $('html, body');
$('a[href^="#"]').click(function() {
    let href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 200, function() {
        window.location.hash = href;
    });
    return false;
});



var slideUp = {
    distance: '50px',
    origin: 'bottom',
    delay: 500,
    duration: 700,
    opacity: 0
};

ScrollReveal().reveal('.about',slideUp);
ScrollReveal().reveal('.products',slideUp);
ScrollReveal().reveal('.how-we-work',slideUp);
ScrollReveal().reveal('.partners',slideUp);
ScrollReveal().reveal('.contacts',slideUp);