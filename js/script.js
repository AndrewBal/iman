$(document).ready(function () {
    $(".phone").mask("+380 (99) 999-99-99");

    $('.reviews-table__slider').slick({
        prevArrow: null,
        nextArrow: null,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }

            },

        ]
    });


    let modal = document.getElementById("my_modal");
    let span = document.getElementsByClassName("close_modal_window")[0];
    let buttons = document.querySelectorAll('.btn_modal_window');


    buttons.forEach((elem) => {
        elem.addEventListener('click', () => {
            modal.style.visibility = "visible";
            $('.modal_content').addClass('md-show');
            $('body').css("overflow", "hidden");
        });
    });


    span.onclick = function () {
        modal.style.visibility = "hidden";
        $('.modal_content').removeClass('md-show');
        $('body').css("overflow", "visible");
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.visibility = "visible";
        }
    };

});



