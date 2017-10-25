$(document).ready(function () {
    // Set up flashing div in about section
    var flash = setInterval(function() {
        $("span.flash").toggleClass("background-black");
    }, 500);

    // form submission with alertify
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            method: 'POST',
            url: 'https://formspree.io/carlylminjoy@gmail.com',
            data: $(this).serialize(),
            dataType: 'json',
            success: function(data) {
    			alertify.success('Message sent!');
		    },
            error: function(err) {
    			alertify.error('Please enter your name, email and message.');
		    }
        });
        $(this).get(0).reset();
    });

    // scrolling nav buttons
    $('.nav-btn').click(function(evt) {
        var navHeight = $(".navbar").height();
        evt.preventDefault();
        $('html, body').stop().animate({
            scrollTop: $( $(this).attr('href') ).offset().top - navHeight
        }, 1000);
    });
});
