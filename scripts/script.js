$(window).scroll(function() {
    var hT = $('#header').offset().top,
        hH = $('#header').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    console.log((hT - wH), wS);
    if (wS > (hT + hH - wH)) {
        $('#header').addClass('scrolled');
    } else {
        $('#header').removeClass('scrolled');
    }
    if (wS <= 100) {
        $('#header').removeClass('scrolled');
    }
});


var botonIdioma = document.querySelector('.cambiarIdioma');
botonIdioma.addEventListener('click', function() {
     var mostrarIdioma = document.querySelector('.seleccionIdioma');
    if (mostrarIdioma.style.display == 'none') {
        mostrarIdioma.style.display = 'block';
    } else {
        mostrarIdioma.style.display = 'none';
    }

});


var botonIdiomaIcon = document.querySelector('.cambiarIdiomaIcon');
botonIdiomaIcon.addEventListener('click', function() {
     var mostrarIdioma = document.querySelector('.seleccionIdiomaIcon');
    if (mostrarIdioma.style.display == 'none') {
        mostrarIdioma.style.display = 'block';
    } else {
        mostrarIdioma.style.display = 'none';
    }

});