$(document).ready(function () {

    $('#contact-form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            method: 'POST',
            url: '//formspree.io/carlylminjoy@gmail.com',
            data: $(this).serialize(),
            dataType: 'json'
            success: function(data) {
    			alertify.success('Message sent!');
		    },
            error: function(err) {
    			alertify.error('Could not send.');
		    }
        });
        $(this).get(0).reset();
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
