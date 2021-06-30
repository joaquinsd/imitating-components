$(document).on('turbolinks:load', function(){
  $('button').click(function(){
    var idDiv = $($(this).data('target'));

    if (idDiv.is(':visible')) {
      idDiv.slideUp('fast');
    }
    else {
      $('.accordion div.collapse').slideUp('fast');
      idDiv.slideDown('fast');
    }
  })
})