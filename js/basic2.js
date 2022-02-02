function res() {
    var winW = $(window).width();
    console.log(winW)


    // if(winW > 640) {
    //     $(function(){
    //         $('.ham').removeClass('on')
    //     })
    // } else {
    //     $(function(){
    //         $('.ham').removeClass('on')
    //         $('.ham').addClass('on')
    //         // $('.navi_menu').removeClass('visible')
    //         // $('.navi_menu').addClass('visible')
    //     });
    //     $('.ham').on("click", function(){
    //         $(this).toggleClass('show');
    //         $('.navi_menu').toggleClass('visible')
    //         $('.header_bg').toggleClass('visible')
    //     })
    if(winW <= 640) {
        $(function(){
            $('.ham').removeClass('on')
            $('.ham').addClass('on')
            // $('.navi_menu').removeClass('visible')
            // $('.navi_menu').addClass('visible')
        });
        $('.ham').on("click", function(){
            $(this).toggleClass('show');
            $('.navi_menu').toggleClass('visible')
            $('.header_bg').toggleClass('visible')
        })
    } else {
        $('.ham').removeClass('on')
    }
}

$(function(){
    res();

    $(window).resize(function(){
        res();
    })

})