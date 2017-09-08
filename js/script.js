$(document).ready {
  $('#contact-form').submit(function(e) {
    var name    = $('inputName');
    var email   = $('inputEmail');
    var message = $('inputMessage');

    if (!name.value || !email.value || !message.value) {
      // alertify.error 'Please check your entries'
      return false;
    } else {
      $.ajax {
        method: 'POST',
        url: '//formspree.io/carlylminjoy@gmail.com',
        data: $('#contact-form').serialize(),
        datatype: 'json'
      }
      e.preventDefault();
      $(this).get(0).reset();
      // alertify.success 'Message sent'
    }
}
