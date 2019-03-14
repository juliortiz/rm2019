
$(document).ready(main);

var contador = 1;
function main () {

    //menu celular
    $('.header__icon').click(function(){
        if ( contador == 1 ){
            $('.header__nav--cel').animate({
                left:'0%'
            });
            contador = 0;
        } else {
            contador = 1;
            $('.header__nav--cel').animate({
                left:'-100%'
            });
        }
    });


    //Mostrar y ocultar submenu
    $('.submenu').click(function(e){
        e.stopPropagation();
        $(this).children('.children').slideToggle();
    })
    $('.submenu1').click(function(e){
        e.stopPropagation();
        $(this).children('.children1').slideToggle();
    })


    //tabs
    let tabs = Array.prototype.slice.apply($('.tab__item'));
    let panels = Array.prototype.slice.apply($('.panels__item'));
    $('.tab').on('click',function(e){
        if(e.target.classList.contains('tab__item')){
            let i = (tabs.indexOf(e.target));
            tabs.map(tab => tab.classList.remove('active'));
            tabs[i].classList.add('active');

            panels.map(panel => panel.classList.remove('active'));
            panels[i].classList.add('active');
        }
    });

    //Carrusel slick
    $('.marcas').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
    });

    $('.logos').slick({
      slidesToShow: 9,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
    });

    $('.repuestos-carrusel').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
    });

    $('.vehiculos').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    $('.repuestos').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    //
    $('.repuesto__boton').on('click',function(){
        $('.form').toggleClass("form-visible")
        $('.repuesto__boton').css("display","none");
    })

    
    
}
