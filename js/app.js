$(document).on('scroll', function() {
  var pixelsFromTop = $(document).scrollTop();
  var documentHeight = $(document).height()
  var windowHeight = $(window).height()

  var difference = documentHeight - windowHeight

  var percentage = 100 * pixelsFromTop / difference

  $('#progress-bar').css('width', percentage + '%')

})
