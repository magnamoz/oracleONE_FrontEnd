function scrollSuave (selector) {
    $(selector).click(function(event){
        event.preventDefault();
        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);  
    });
}

scrollSuave ('a[href*=painel-sobre]');
scrollSuave ('a[href*=painel-palestrantes]');
scrollSuave ('a[href*=painel-formulario]');