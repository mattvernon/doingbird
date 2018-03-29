$(document).on('scroll', function() {
  var pixelsFromTop = $(document).scrollTop();
  var documentHeight = $(document).height()
  var windowHeight = $(window).height()

  var difference = documentHeight - windowHeight

  var percentage = 100 * pixelsFromTop / difference

  // console.log(pixelsFromTop)

  if(pixelsFromTop > windowHeight) {
    $('header a').css('color', 'black')
  } else {
    $('header a').css('color', 'white')
  }

  if(pixelsFromTop > 30) {
    $('footer a').css('color', 'black')
  } else {
    $('footer a').css('color', 'white')
  }
})

$('#hamburger').click(function(){

  // open hamburger icon, animate and change color
  $(this).toggleClass('open');

  // 2. show mobile header
  $('#mobile-nav').toggleClass('open')

  return false

});
