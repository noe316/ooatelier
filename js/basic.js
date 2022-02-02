// #링크 스크롤 부드럽게 
$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
}); 

// header fix
$(function (){

    const ham = document.querySelector('.ham');
    const menu = document.querySelector('.nav_menu');
    const bg = document.querySelector('.header_bg');

    ham.addEventListener("click", function() {
        ham.classList.toggle('show');
        menu.classList.toggle('visible');
        bg.classList.toggle('visible');
    })
})


// 가로폭 조정시 

// $(window).resize(function(){
// 	ToggleEvent();
// });

// function ToggleEvent(){
// 	var winW = $(window).width();
//     var $ham = $(document).find('.ham'); 
//   $ham.removeClass('on');
//   if(winW <= 1080){
//   		$ham.addClass('on');
//   }
// }

// $(document).on('.ham' , function(){
// 	var $this = $(this);
// 	var isOnClass = $this.hasClass('on');
//   if(isOnClass === true){
//   		$this.addClass('show')
//     	$(document).find('.nav_menu, .header_bg').toggleClass('visible');
//   }
// });


//header 
// $(function() {
//     var winW = $(window).width();
//     console.log(winW)

//     if (winW < 1081) {
//         $('.ham').addClass('on')
//         $('.ham.on').on("click", function(){
//             $(this).toggleClass('show');
//             $('.nav_menu, .header_bg').toggleClass('visible');

//         })
//     }
// })

// $(function() {
//     $(window).resize(function(){
//         var winW = $(window).width();

//         if(winW > 1080) {
//             $('.ham').removeClass('on')
//             // $('.ham.on').removeClass('on')
//             $('.nav_menu').removeClass('on')
//             $('.header_bg').removeClass('on')
//             }
//             else if (winW < 1081) {
//                 $('.ham').addClass('on');
//                 $('.ham.on').on("click", function () {
//                     $('.nav_menu').removeClass('on')
//                     $('.header_bg').removeClass('on')
//                     $('.ham.on').addClass('show');
//                     $('.nav_menu, .header_bg').addClass('visible');
//                 });
//                 $('.ham.on.show').on("click", function(){
//                     $(this).removeClass('show');
//                     $('.nav_menu, .header_bg').removeClass('visible');
//                 });
//             }
//     })
// })















// $(function(){
//     var winW = $(window).width();

//     if(winW <= 1080) {
//         $(function(){
//             $('.ham').addClass('on')
//             $('.ham.on').on("click", function(){
//                 $(this).toggleClass('show')
//                 $('.nav_menu').toggleClass('visible');
//                 $('.header_bg').toggleClass('visible');
//             })
//         });
     
//     } if(winW > 1080) {
//         $(function(){
//             $('.ham').removeClass('on');
//         })
//     }
// })

// // 가로폭 조정시 
// $(window).resize(function(){
//     var winW = $(window).width();

//     if(winW <= 1080) {
//         $(function(){
//             $('.ham').addClass('on')
//             $('.ham.on').on("click", function(){
//                 $(this).toggleClass('show')
//                 $('.nav_menu').toggleClass('visible');
//                 $('.header_bg').toggleClass('visible');
//             })
//         });
     
//     } if(winW > 1080) {
//         $(function(){
//             $('.ham').removeClass('on')
//         })
//     }
// })




















// 0412 오류픽스





// header 
// $(function(){
//     var winW = $(window).width();

//     if(winW <= 1080) {
//         $(function(){
//             $('.ham').addClass('on')
//             $('.ham.on').on("click", function(){
//                 // $(this).toggleClass('show')
//                 // $('.nav_menu').toggleClass('visible');
//                 // $('.header_bg').toggleClass('visible');

//                 $(this).addClass('show');
//                 $('.nav_menu').addClass('visible');
//                 $('.header_bg').addClass('visible');
//             })
//         });
     
//     } if(winW > 1080) {
//         $(function(){
//             $('.ham').removeClass('on');
//         })
//     }

// })

// // 가로폭 조정시 
// $(window).resize(function(){
//     var winW = $(window).width();

//     if(winW <= 1080) {
//         $(function(){
//             $('.ham').addClass('on')
//             $('.ham.on').on("click", function(){
//                 // $(this).toggleClass('show')
//                 // $('.nav_menu').toggleClass('visible');
//                 // $('.header_bg').toggleClass('visible');

//                 $(this).addClass('show');
//                 $('.nav_menu').addClass('visible');
//                 $('.header_bg').addClass('visible');
//             })
//             $('.ham.on.show').on("click", function(){
//                 $('.ham').removeClass('show');
//                 $('.nav_menu').removeClass('visible');
//                 $('.header_bg').removeClass('visible');
//             })
//         });
     
//     } if(winW > 1080) {
//         $(function(){
//             $('.ham').removeClass('on')
//         })
//     }
// })










