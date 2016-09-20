/*jslint browser: true*/
/*global $ */
$(document).ready(function () {
    $("button").mouseenter(function(){
        $(this).css({backgroundColor:'#6cb611',color:'#FFF'});
    });
    $('.why ul li').click(function () {
        // Accordion for Why choose us tabs
       if($(this).children('p').hasClass("hide")){
        $(this).children('p').removeClass("hide");
        $(this).find('i').removeClass("fa-plus").addClass("fa-minus");
        $(this).siblings().children('p').addClass("hide");
        $(this).siblings().find('i').removeClass("fa-minus").addClass("fa-plus");
        }
    });
    $(window).resize(function() {
      // This will execute whenever the window is resized
    $('.features li').children('div').addClass("hide");
     // prevent children div in other than xs screen
    });
    $('.features li').click(function ()
        {  
            var width = $(window).width();
            if ( width <= 767 ){
                // Features Display For XS Screen
                if($(this).hasClass("active")){
                    $(this).children('div').removeClass("hide");
                }
                else {
                    $(this).addClass("active"); 
                    $(this).siblings().removeClass("active");
                    var number = $( ".features li" ).index( $(this) );
                    number +=1;
                    switch (number) {
                        case 1:
                            $('.features li:nth-child(1)').children('div').removeClass("hide");
                            $('.features li:nth-child(1)').siblings().children('div').addClass("hide");
                        break;
                        case 2:
                            $('.features li:nth-child(2)').children('div').removeClass("hide");
                            $('.features li:nth-child(2)').siblings().children('div').addClass("hide");
                        break;
                        case 3:
                            $('.features li:nth-child(3)').children('div').removeClass("hide");
                            $('.features li:nth-child(3)').siblings().children('div').addClass("hide");
                        break;
                        case 4:
                            $('.features li:nth-child(4)').children('div').removeClass("hide");
                            $('.features li:nth-child(4)').siblings().children('div').addClass("hide");
                        break;
                    }// Switch Close
                }// Inner Else Close
        }// Outer If Close
    else {
        // Features Display For Other Than XS Screens
            if($(this).hasClass("active")){}
            else {
                $(this).addClass("active"); 
                $(this).siblings().removeClass("active");
                var number = $( ".features li" ).index( $(this) );
                number +=1;
                switch (number) {
                    case 1:
                        $('.details > div:nth-child(1)').siblings().fadeOut("slow", function() {
        $(this).removeClass("show");});

                        $('.details > div:nth-child(1)').delay( 700 ).fadeIn("slow", function() {
        $(this).addClass("show");});
                    break;
                    case 2:
                        $('.details > div:nth-child(2)').siblings().fadeOut("slow", function() {
        $(this).removeClass("show");});
                        $('.details > div:nth-child(2)').delay( 700 ).fadeIn("slow", function() {
        $(this).addClass("show");});
                    break;
                    case 3:
                        $('.details > div:nth-child(3)').siblings().fadeOut("slow", function() {
        $(this).removeClass("show");});
                        $('.details > div:nth-child(3)').delay( 700 ).fadeIn("slow", function() {
        $(this).addClass("show");});
                    break;
                    case 4:
                        $('.details > div:nth-child(4)').siblings().fadeOut("slow", function() {
        $(this).removeClass("show");});
                        $('.details > div:nth-child(4)').delay( 700 ).fadeIn("slow", function() {
        $(this).addClass("show");});
                    break;
                }// Switch Close
            };// Inner Else Close
    }// Outer Else Close
    });// Function Close
    
});// Document Close