(function($) {
var $galleryImages = $('.carousel-images ul li');
var $prev = $('.carousel .prev');
var $next = $('.carousel .next');
var counter = 0;

  $(document).ready(function() {
    function changeActiveClassNext() {
      $next.eq(counter + 3).removeClass('active');
      $next.eq(counter).addClass('active');
      $next.eq(counter - 1).addClass('active');
      $next.eq(counter - 2).addClass('active');
    }

    function changeActiveClassPrev() {
      $prev.eq(counter - 1).removeClass('active');
      $prev.eq(counter).addClass('active');
      $prev.eq(counter + 1).addClass('active');
      $prev.eq(counter + 2).addClass('active');
    }

    function changeButtonState() {
      if (counter === 0) {
        $prev.prop('disabled', true);
      } else {
        $prev.prop('disabled', false);
      }
      if ($galleryImages.length === counter + 3) {
        $('.next').prop('disabled', true);
      } else {
        $('.next').prop('disabled', false);
      }
    }

    $('.next').on('click', function() {
      console.log(counter);
      counter++;
      changeActiveClassNext();
      changeButtonState();
      $('ul').animate({
        left: '-=210'
      }, 500);
    });

    $('.prev').on('click', function() {
      counter--;
      changeActiveClassPrev();
      changeButtonState();
      if (counter === 0) {
        $(this).prop('disabled', true);
      } else {
        $(this).prop('disabled', false);
      }
      $('ul').animate({
        left: '+=210'
      }, 500);
    });
  changeButtonState()
  });

})(jQuery);

