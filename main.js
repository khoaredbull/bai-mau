if ($(window).width() > 1023) {
  window.sr = ScrollReveal({
    opacity: '0'
})
sr.reveal('.box-2', { 
    origin: 'right',
    duration: '5000',
    distance: '200px'
 });
sr.reveal('.box-1', { 
    origin: 'left',
    duration: '5000',
    distance: '200px'
 });
sr.reveal('.banner-title', { 
    origin: 'bottom',
    duration: '2000',
    distance: '30px',
    delay: '5000'
 });
sr.reveal('.banner-text-wrap', { 
    origin: 'bottom',
    duration: '2000',
    distance: '30px',
    delay: '6000'
 });
sr.reveal('.share-icon', { 
    origin: 'bottom',
    duration: '2000',
    distance: '30px',
    delay: '5000'
 });
}

 $('.box-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: '.next',
    prevArrow: '.prev',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      }
    ]
  });
  $('.side-bar > img').on('click', function() {
      $('.nav-bar').toggleClass('show')
      $('.over-flay').toggleClass('open')
  })

