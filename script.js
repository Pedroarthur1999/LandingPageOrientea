$(document).ready(function () {
  $(".hamburguer").click(function () {    
    $(this).toggleClass("show-menu");
    $(".sidebar").toggleClass("toggled");
  });
});

ScrollReveal().reveal("#home", {
  origin: "right",
  distance: "100px",
  duration: 1000,
  delay: 0,
  easing: "ease",
  reset: false,
});

ScrollReveal().reveal("#sobre", {
  origin: "left",
  distance: "100px",
  duration: 1000,
  delay: 0,
  easing: "ease",
  reset: false,
});

ScrollReveal().reveal("#services", {
  origin: "bottom",
  distance: "100px",
  duration: 1000,
  easing: "ease",
  delay: 0,
  reset: false,
});
ScrollReveal().reveal("#app", {
  origin: "bottom",
  distance: "100px",
  duration: 1000,
  easing: "ease",
  delay: 0,
  reset: false,
});
