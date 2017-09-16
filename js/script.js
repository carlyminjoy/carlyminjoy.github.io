$(document).ready(function () {

    $('#contact-form').submit(function(e) {
        $.ajax({
            method: 'POST',
            url: 'https://formspree.io/carlylminjoy@gmail.com',
            data: $(this).serialize(),
            datatype: 'json'
        });
        e.preventDefault();
        $(this).get(0).reset();
        alertify.success('Message sent!');
    });

    $('.nav-btn').click(function(evt) {
        var navHeight = $(".navbar").height();
        evt.preventDefault();
        console.log('clicked!');
        $('html, body').stop().animate({
            scrollTop: $( $(this).attr('href') ).offset().top - navHeight
        }, 1000);
    });
});
