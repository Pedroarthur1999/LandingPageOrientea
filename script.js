$(document).ready(function () {
  $(".hamburguer").click(function () {
    console.log("clicou");
    $(this).toggleClass("show-menu");
    $(".sidebar").toggleClass("toggled");
  });
});

ScrollReveal().reveal("#home", {
  origin: "right",
  distance: "250px",
  duration: 1000,
  delay: 500,
  easing: "ease",
  reset: false,
});

ScrollReveal().reveal("#sobre", {
  origin: "bottom",
  distance: "250px",
  duration: 1000,
  delay: 200,
  easing: "ease",
  reset: false,
});

ScrollReveal().reveal("#services", {
  origin: "bottom",
  distance: "250px",
  duration: 1500,
  easing: "ease",
  delay: 200,
  reset: false,
});
ScrollReveal().reveal("#app", {
  origin: "bottom",
  distance: "250px",
  duration: 1500,
  easing: "ease",
  delay: 200,
  reset: false,
});
