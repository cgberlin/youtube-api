$(document).ready(function() {
    $(".fancybox")
        .fancybox({
            openEffect  : 'none',
            closeEffect : 'none',
            nextEffect  : 'none',
            prevEffect  : 'none',
            padding     : 0,
            margin      : 50,
            beforeShow  : function() {
                var id = $.fancybox.inner.find('iframe').attr('id');
                var player = new YT.Player(id, {
                    events: {
                        'onReady': onPlayerReady,
                        'onStateChange': onPlayerStateChange
                    }
                });
            }
        });
        $(".fancybox").fancybox({
          'width': 600,
          'height': 400,
          'type': 'iframe',
          'fitToView' : false
  });
});
