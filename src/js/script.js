//use when the page loading, create square loader shape
(function ($) {
  "use strict";

  $(document).ready(function () {
    $("#preloader").fadeOut("slow");

    $(".feat-swiper").hcSticky({
      stickTo: $(".feat-product-grid"),
    });

    $(".user-items .search-item").click(function () {
      $(".search-box").toggleClass("active");
      $(".search-box .search-input").focus();
    });
    $(".close-button").click(function () {
      $(".search-box").toggleClass("active");
    });

    //The code initializes a Swiper carousel on an element with the class "main-swiper." It enables looping, sets a speed of 500 milliseconds for slide transitions, and includes clickable pagination with bullets inside an element with the ID "billboard."
    var swiper = new Swiper(".main-swiper", {
      speed: 500,
      loop: true,
      pagination: {
        el: "#billboard .swiper-pagination",
        clickable: true,
      },
    });

    $(".product-swiper").each(function () {
      var sectionId = $(this).attr("id");
      var swiper = new Swiper("#" + sectionId + " .swiper", {
        slidesPerView: 4,
        spaceBetween: 20,
        pagination: {
          el: "#" + sectionId + " .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          999: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1366: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
      });
    });

    //This code initializes a testimonial carousel using Swiper on elements with the class "testimonial-swiper." It enables looping and includes navigation arrows and clickable pagination.
    var swiper = new Swiper(".testimonial-swiper", {
      loop: true,
      navigation: {
        nextEl: ".swiper-arrow-next",
        prevEl: ".swiper-arrow-prev",
      },
      pagination: {
        el: "#testimonials .swiper-pagination",
        clickable: true,
      },
    });

    //This code initializes a Swiper carousel for elements with the class "collection-swiper." It displays four slides at a time with 10 units of space between them. The carousel does not loop, and it includes pagination with clickable bullets inside the element with the ID "collections." Responsive breakpoints are defined for different screen sizes, adjusting the number of visible slides and spacing accordingly.
    var swiper = new Swiper(".collection-swiper", {
      slidesPerView: 4,
      spaceBetween: 10,
      loop: false,
      pagination: {
        el: "#collections .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        599: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        980: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });

    // init jarallax parallax
    //This code initializes two functions. The first one, initJarallax, applies parallax scrolling to elements with the class "jarallax" and retains images for those with the class "jarallax-img." The second function, initQuantitySpinner, sets up a quantity spinner for products. The script then executes both functions at the end of the document using jQuery.
    var initJarallax = function () {
      jarallax(document.querySelectorAll(".jarallax"));

      jarallax(document.querySelectorAll(".jarallax-img"), {
        keepImg: true,
      });
    };

    initJarallax();
    initQuantitySpinner();
  }); // End of a document
})(jQuery);
