$(document).ready(function(){
    $('#carouselExampleIndicators').carousel();


    /*---------Main fade slider-----------*/

    $('.slider-big-content').slick({
      dots: true,
      infinite: true,
      speed: 2000,
      fade: true,
      cssEase: 'linear',
      autoplaySpeed: 3000,
      autoplay: true,
      prevArrow: $('.white-circle-left'),
      nextArrow: $('.white-circle-right'),
    });


    /*--------Zoom slide show---------*/
    
    $('.zoom-slide-content').slick({
      infinite: true,
      speed: 1000,
      fade: true,
      cssEase: 'linear',
      autoplaySpeed: 3000,
      autoplay: true,
    });
    

      /*---------------Fancybox------------*/

  
      $('.highslide').fancybox({
           loop : true
       });

  });