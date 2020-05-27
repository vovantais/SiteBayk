$(function () {
   // For full-screen
   function ibg() {
      $.each($('.ibg'), function (index, val) {
         if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
         }
      });
   }
   ibg();
   // Menu burger
   function BurgerToggle() {
      let menu = $('.header__menu').removeClass('active');
      let toggle = $('.header__toggle').removeClass('active');
      $(toggle).on('click', function () {
         $(menu).toggleClass('active');
         $(this).toggleClass('active');
         $('body').toggleClass('lock'); // запприщаем прокрутку когда бургер открыт
         $('.header__logo').toggleClass('move');
      })
   }
   BurgerToggle();

   // Carusel
   function Carusel() {
      let dots = $('.dot');
      let social = $('.socialNetwork__Carusel');

      let index = 0;

      function activeSlide(index) {
         $(social).removeClass('active')
         $(social[index]).addClass('active');
      }

      function activeDot(index) {
         $(dots).removeClass('active')
         $(dots[index]).addClass('active');
      }

      function nextSlide() {
         if (index == social.length - 1) {
            index = 0;
            prepereSlaider(index);
         } else {
            index++;
            prepereSlaider(index);
         }
      }

      function prevSlide() {
         if (index == 0) {
            index = social.length - 1;
            prepereSlaider(index);
         } else {
            index--;
            prepereSlaider(index);
         }
      }
      $(dots).on('click', function () {
         let indexDot = $(this).attr('data-nam');
         index = indexDot;
         prepereSlaider(indexDot);
         clearInterval(interval);
      });
      function prepereSlaider(index) {
         activeSlide(index);
         activeDot(index);
      }
      let interval = setInterval(nextSlide, 3000)
   }
   Carusel();
});