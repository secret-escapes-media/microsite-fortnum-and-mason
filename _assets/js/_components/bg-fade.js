function bgFade(){

  var scrollPosition = $(document).scrollTop();
  var startFade = $('.js-start-fade-here').position().top;
  var opacity = ((startFade - ( scrollPosition * 2.25 )) / -startFade)-1;

  if( scrollPosition > startFade ){
    if (opacity > 0 && opacity < 1) {
      console.log(opacity);
      $('.js-bg-fade').css({
        "opacity": opacity
      });
    }
  } else {
    $('.js-bg-fade').css({
      "opacity": 0
    });
  }

}
bgFade();
$(document).scroll(function() { bgFade() });