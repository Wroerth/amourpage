$(window).scroll(function () {
    var scr = $(window).scrollTop(),
        C = $('#contenedor'),
        A = $('#abrir'),
        E = $('#carta'),
        F = $('#carta hgroup h2'),
        P = $('#perspectiva');

    console.log('scroll position:', scr);  // Verifica el valor del scroll

    // giro y abertura
    if (scr >= 100) {
        console.log("Opening container and 'abrir'");
        C.css({
            'transition': 'all 1s',
            'transform': 'rotateY(180deg)'
        });
        A.css({
            'transition': 'all 1s .5s',
            'transform': 'rotateX(180deg)',
            'z-index': '0'
        });
    } else if (scr < 100) {
        console.log("Closing container and 'abrir'");
        C.css({
            'transition': 'all 1s .5s',
            'transform': 'rotateY(0deg)'
        });
        A.css({
            'transition': 'all 1s',
            'transform': 'rotateX(0deg)',
            'z-index': '10'
        });
    }

    // Sobre trasladoY / carta
    if (scr >= 500) {
        console.log("Moving and rotating card");
        E.css({
            'transition': 'all .5s 1s',
            'top': '-550px',
            'height': '500px'
        });
        P.css({
            'transition': 'all 1s',
            'transform': 'translateY(450px)'
        });
        F.css({
            'transition': 'all 1s',
            'transform': 'rotateZ(180deg)'
        });
    } else if (scr < 500) {
        console.log("Resetting card position and rotation");
        E.css({
            'transition': 'all .5s',
            'top': '3px',
            'height': '200px'
        });
        P.css({
            'transform': 'translateY(0px)'
        });
        F.css({
            'transform': 'rotateZ(0deg)'
        });
    }
});
