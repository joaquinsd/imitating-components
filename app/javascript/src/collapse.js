$(document).on('turbolinks:load', function(){
  $('[role=button]').click(function(){
    $('#collapseExample').slideToggle('slow');
  })
})