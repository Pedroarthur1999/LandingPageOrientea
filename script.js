


$(document).ready(function() {
    $(".hamburguer").click(function() {
        console.log('clicou');
        $(this).toggleClass("show-menu");
        $('.sidebar').toggleClass("toggled")
    });
});



    ScrollReveal().reveal('#home', {
      origin: 'bottom',
      distance: '250px',
      duration: 1000,
      delay: 500,
      easing: 'ease',
      reset: false
    });

    ScrollReveal().reveal('#sobre', {
      origin: 'right',
      distance: '250px',
      duration: 1000,
      delay: 500,
      easing: 'ease',
      reset: false
    });


    ScrollReveal().reveal('#services', {
      origin: 'left',
      distance: '250px',
      duration: 1000,
      easing: 'ease',
      reset: false
    });




