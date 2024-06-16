


$(document).ready(function() {
    $(".hamburguer").click(function() {
        console.log('clicou');
        $(this).toggleClass("show-menu");
        $('.sidebar').toggleClass("toggled")
    });
});







