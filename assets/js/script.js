$(document).ready(function(){
    $('body').scrollspy({target: '#menu-navegacion'})

    //Scroll suavizado
    $('#menu-navegacion a').on('click', function(event){
        if(this.hash != ""){
            event.preventDefault(event);
            const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            })
        }
    })
});