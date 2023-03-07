$(document).ready(function() {
    let newSlidesPerView;
      $(window).on("load", resizeSlider);
      $(window).on("resize", resizeSlider);
      
      function resizeSlider(){
        let bodyWidth = $("body").width();
        if (bodyWidth < 550) {
            newSlidesPerView = 2.1;
            swiper.params.slidesPerView = newSlidesPerView;
            swiper.update();
          }
        if (bodyWidth < 500) {
          newSlidesPerView = 1.9;
          swiper.params.slidesPerView = newSlidesPerView;
          swiper.update();
        }
        if (bodyWidth < 400) {
          newSlidesPerView = 1.8;
          swiper.params.slidesPerView = newSlidesPerView;
          swiper.update();
        }
        if (bodyWidth < 370) {
          newSlidesPerView = 1.6;
          swiper.params.slidesPerView = newSlidesPerView;
          swiper.update();
        }
        if (bodyWidth < 340) {
          newSlidesPerView = 1.4;
          swiper.params.slidesPerView = newSlidesPerView;
          swiper.update();
        }
        swiper.params.slidesPerView = newSlidesPerView;
        swiper.update();
      };
    
    const swiper = new Swiper(".swiper", {
        // Optional parameters
        direction: "horizontal",
        centeredSlides: true,
        slidesPerView: 1.7,
        spaceBetween: 15,
        loop: true,
      });
  });