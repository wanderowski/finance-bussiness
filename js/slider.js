$(document).ready(function(){
      $('.main').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: true
      });
})

$(document).ready(function(){
  $('.about__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    arrows: false
  });
})

$(document).ready(function(){
  $('.sponsors__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    arrows: false
    });
})




