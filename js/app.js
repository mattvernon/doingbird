$(document).on('scroll', function() {
  var pixelsFromTop = $(document).scrollTop();
  var documentHeight = $(document).height()
  var windowHeight = $(window).height()

  var difference = documentHeight - windowHeight

  var percentage = 100 * pixelsFromTop / difference

  $('#progress-bar').css('width', percentage + '%')

})

$('#hamburger').click(function(){

  // open hamburger icon, animate and change color
  $(this).toggleClass('open');

  // 2. show mobile header
  $('#mobile-nav').toggleClass('open')

  return false

});
