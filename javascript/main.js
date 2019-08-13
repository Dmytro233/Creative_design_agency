$(document).ready(function() {
  // Слайдер
  $(".header__slider").slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 300,
    fade: true,
    dotsClass: "dots-style",
    appendArrows: ".arrow",
    prevArrow:
      "<button class='slick-prev slick-arrow' type='button'><i class='fas fa-chevron-left'></i></button>",
    nextArrow:
      "<button class='slick-next slick-arrow' type='button'><i class='fas fa-chevron-right'></i></button>"
  });

  // Меню
  $('ul.menu a[href^="#"]').click(function() {
    var target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top
      },
      500
    );
    $('ul.menu>li>a[href^="#"]').css({
      color: "#232323",
      "font-weight": "normal"
    });
    $(this).css({ color: "#000000", "font-weight": "bold" });
    return false;
  });

  // Випадаюче меню
  $(".menu-icon").click(function() {
    $("nav").slideToggle(500);
    $("ul").css({
      display: "flex",
      "flex-direction": "column"
    });
  });

  // Кновпка вверх
  $(window).scroll(function() {
    if ($(this).scrollTop() != 0) {
      $(".toTop").fadeIn();
    } else {
      $(".toTop").fadeOut();
    }
  });
  $(".toTop").click(function() {
    $("body, html").animate({ scrollTop: 0 }, 800);
  });
});
