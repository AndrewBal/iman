$(document).ready(function() {
    $(".phone").mask("+380 (99) 999-99-99");

    $('.reviews-table__slider').slick({});



    var modal = document.getElementById("my_modal");
    var btn = document.getElementById("btn_modal_window");
    var span = document.getElementsByClassName("close_modal_window")[0];

    btn.onclick = function () {
        modal.style.visibility = "visible";
        $('.modal_content').addClass('md-show');
        $('body').css("overflow", "hidden");
    };

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



