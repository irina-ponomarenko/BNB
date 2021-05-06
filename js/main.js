$(document).ready(function(){
    //--------------------------dropdown faq----------------------//

    $(".item-faq").click(function() {
        let child = $(this).children(".container-info-faq");

        $(".item-faq").children(".container-info-faq").slideUp(300);
        $(".close-faq-item").removeClass('active-btn-faq');
        
        if (child.is(":hidden")) {
            child.slideDown(300);
            $(this).find('.close-faq-item').addClass('active-btn-faq');
        };
    });


    //--------------------------open window faq and connect ----------------------//

    $(".faq-btn").click(function (){
       $(".wrapper-dark").addClass("active-bg");
       $(".container-faq").addClass("active-faq");
    });

    $(".close-window").click(function (){
        let darkWrap =  $(this).closest(".wrapper-dark");

        darkWrap.removeClass("active-bg");
        darkWrap.find(".container-faq").removeClass("active-faq");
        darkWrap.find(".container-connect").removeClass("active-connect");
    });

    $(".connect").click(function (){
        $(".wrapper-dark").addClass("active-bg");
        $(".container-connect").addClass("active-connect");
    });

    //----------------open warn messages---------------//


    setTimeout(function(){
        $("#warn").fadeIn("slow");
    }, 2000);

    setTimeout(function(){
        $("#warn1").fadeIn("slow");
    }, 3000);

    $(".warn-btn").click(function (){
       $(this).closest(".warn-container").hide("slow");
    });

});