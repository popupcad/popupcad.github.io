(function($) {
  var videoWrapper = $('.video-wrapper');
  if( videoWrapper.is(':visible') ) {
    // if visible, screen is desktop size or larger
    // var	videoUrl = videoWrapper.data('video'),
    // video = $('<video loop><source src="'+videoUrl+'.mp4" type="video/mp4" /><source src="'+videoUrl+'.webm" type="video/webm" /></video>');
    videoTag = $('#video-tag').html();
    videoWrapper.append(videoTag);
    // video.get(0).play();
  }
})(jQuery);
