$(document).ready(function(){
    //--------------------------dropdown faq----------------------//

    $(".item-faq").click(function() {
        $(".item-faq").children(".container-info-faq").slideUp(300);
        $(".close-faq-item").removeClass('active-btn-faq');
        if ($(this).children(".container-info-faq").is(":hidden")) {
            $(this).children(".container-info-faq").slideDown(300);
            $(this).find('.close-faq-item').addClass('active-btn-faq');
        };
    });


    //--------------------------open window faq----------------------//

    $(".faq-btn").click(function (){
       $(".wrapper-dark").addClass("active-bg");
       $(".container-faq").addClass("active-faq");
    });

    $(".close-window").click(function (){
        $(this).closest(".wrapper-dark").removeClass("active-bg");
        $(this).closest(".wrapper-dark").find(".container-faq").removeClass("active-faq");
        $(this).closest(".wrapper-dark").find(".container-connect").removeClass("active-connect");
    });

    $(".connect").click(function (){
        $(".wrapper-dark").addClass("active-bg");
        $(".container-connect").addClass("active-connect");
    });

});