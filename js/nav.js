$(function () {
    $('.nav-item>a').on('click', function () {
        if (!$('.nav').hasClass('nav-mini')) {
            if ($(this).next().css('display') == "none") {
                $('.nav-item').children('ul').slideUp(300);
                $(this).next('ul').slideDown(300);
                $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
            } else {
                $(this).next('ul').slideUp(300);
                $('.nav-item.nav-show').removeClass('nav-show');
            }
        }
    });

    $('.main_nav_left .nav ul .nav-item').hover(function () {
        if($('.main_nav_left .nav').hasClass('nav-mini')){
            if($(this).find('ul').length == 0){
                $(this).find('span').addClass('show_span') ;
            }
        }

    },function () {
        if($('.main_nav_left .nav').hasClass('nav-mini')){
            if($(this).find('ul').length == 0){
                $(this).find('span').removeClass('show_span') ;
            }
        }

    })


    $('#mini').on('click', function () {
        if (!$('.nav').hasClass('nav-mini')) {
            $('.nav-item.nav-show').removeClass('nav-show');
            $('.nav-item').children('ul').removeAttr('style');
            $('.nav').addClass('nav-mini');
            $('.bg_scellc').css('background-color','#F1F1F1') ;
            $('.main_contain').animate({left:'60px'}) ;
        } else {
            $('.nav').removeClass('nav-mini');
            $('.bg_scellc').css('background-color','#F1F1F1') ;
            $('.main_contain').animate({left:'200px'}) ;
        }
    });

    $('.shouqi_btn').on('click', function () {
        if($('.shouqi_btn').hasClass('active')){
            $('.main_contain').animate({right:'360px'}) ;
            $('.main_right').animate({width:'350px'}) ;
            $('.shouqi_btn').removeClass('active') ;
            $('#right_iframe').show() ;
        }else{
            $('.main_contain').animate({right:'15px'}) ;
            $('.main_right').animate({width:'0'}) ;
            $('.shouqi_btn').addClass('active') ;
            $('#right_iframe').hide() ;
        }

    })


});