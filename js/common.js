var imgGal = $(function(img, e) {
  // Cache variables
  var $overlay = $('<div id="overlay"></div>'),
    $image = $("<img>"),
    $caption = $('<p class="caption"></p>');

  // add image to overlay
  $overlay.append($image);

  // add overlay
  $("body").append($overlay);

  // Capture click event on a link to img
  var imgLinks = $('#imageGallery a');

  imgLinks.click(function(e) {
    e.preventDefault();
    var imgLoc = $(this).attr('href');
    $image.attr('src', imgLoc);
    //add caption to overlay
    $caption.insertAfter($image);
    $image.addClass('borderedImg');
    $overlay.slideDown();

    var captionText = $(this).children('img').attr('alt');
    $caption.text(captionText);

  });

  $overlay.click(function() {
    $overlay.slideUp();
  });
});
