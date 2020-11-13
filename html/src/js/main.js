"use strict";

$(document).ready(function (){
    /* ------------------------------------- */
    /* *. Mobile Menu.......................... */
    /* ------------------------------------- */
    $('.mi-menu-btn').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.mi-sidemenu').toggleClass('active');
    });


});