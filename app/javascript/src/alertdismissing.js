$(document).on('turbolinks:load', function(){
  $('.close').click(function(){
    $('[role=alert]').hide('slow');
  })
})