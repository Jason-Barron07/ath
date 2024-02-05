// $(document).ready(function () {
//     let currentSlide = 0;
//     const slides = $('.slide');
//     let dots = $('.dot');
//     function showSlide(index) {
//         currentSlide = (index + slides.length) % slides.length;
//         slides.css('transform', `translateX(${-100 * currentSlide}%)`);
//         dots.removeClass('active');
//         dots.eq(currentSlide).addClass('active');
//     }
//     function changeSlide(offset) {
//         showSlide(currentSlide + offset);
//     }
//     $('.next.arrow').on('click', function () {
//         changeSlide(1);
//     });
//     $('.dots-container').on('click', '.dot', function () {
//         const dotIndex = $(this).index();
//         showSlide(dotIndex);
//     });
//     for (let i = 0; i < slides.length; i++) {
//         $('.dots-container').append('<div class="dot"></div>');
//     }
//     dots = $('.dot');
//     showSlide(currentSlide);
// });

// $(document).ready(function(){
//     let currentIndex = 0;
//     const totalSlides = $('#carousel img').length;

//     function showSlide(index) {
//       $('#carousel img').hide();
//       $('#carousel img').eq(index).show();
//     }

//     function nextSlide() {
//       currentIndex = (currentIndex + 1) % totalSlides;
//       showSlide(currentIndex);
//     }

//     function prevSlide() {
//       currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//       showSlide(currentIndex);
//     }

//     $('#next').click(nextSlide);
//     $('#prev').click(prevSlide);

//     showSlide(currentIndex);
//   });

$(document).ready(function () {
    $(".arrow").on("click", function () {
      var currentImg = $(".slidein img.active");
      var nextImg = currentImg.next();
      if (nextImg.length === 0) {
        nextImg = $(".slidein img:first");
      }
      currentImg.removeClass("active").css("z-index", -10);
      nextImg.addClass("active").css("z-index", 10);
    });
    $(".prev").on("click", function () {
      var currentImg = $(".slidein img.active");
      var prevImg = currentImg.prev();
      if (prevImg.length === 0) {
        prevImg = $(".slidein img:last");
      }
      currentImg.removeClass("active").css("z-index", -10);
      prevImg.addClass("active").css("z-index", 10);
    });
    $(".next").on("click", function () {
      var currentSVG = $(".sirc .activeSVG");
      var nextSVG = currentSVG.next();
      if (nextSVG.length === 0) {
        nextSVG = $(".sirc img:first");
      }
      currentSVG.removeClass("activeSVG");
      nextSVG.addClass("activeSVG");
    });
  });