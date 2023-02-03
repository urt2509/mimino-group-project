function swiperSlider() {
  // main slider
  const teamMain = document.querySelectorAll('[data-slider="team-slider"]');
  if (teamMain) {
    teamMain.forEach(slider => {
      // кнопки вперед та назад
      let arrowLeft = slider.querySelector('.swiper-button-prev');
      let arrowRight = slider.querySelector('.swiper-button-next');

      let swiper = new Swiper(slider.querySelector('.swiper'), {
        speed: 1000,
        slidesPerView: 2, // кількість слайдерів для показу
        spaceBetween: 40, // відстань між слайдерами
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },

        // додаємо додатковий клас
        // можна використовувати для додаткових анімацій
        on: {
          transitionStart: function () {
            let previousIndex = this.previousIndex;
            let previousSlide =
              slider.getElementsByClassName('swiper-slide')[previousIndex];
            if (previousSlide) {
              setTimeout(function () {
                previousSlide.classList.remove('is-play');
              }, 1000);
            }
          },
          transitionEnd: function () {
            let activeIndex = this.activeIndex;
            let activeSlide =
              slider.getElementsByClassName('swiper-slide')[activeIndex];
            activeSlide.classList.add('is-play');
          },
        },
        // адаптив
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          // when window width is >= 1200px
          1200: {
            slidesPerView: 2,
            spaceBetween: 40,
          }
        }
      });
    });
  }
  // main slider

  // details slider
  const detailsMain = document.querySelectorAll('[data-slider="details-slider"]');
  if (detailsMain) {
    detailsMain.forEach(slider => {
      // кнопки вперед та назад
      let arrowLeft = slider.querySelector('.swiper-button-prev');
      let arrowRight = slider.querySelector('.swiper-button-next');

      let swiper = new Swiper(slider.querySelector('.swiper'), {
        speed: 1000,
        slidesPerView: 1.3, // кількість слайдерів для показу
        spaceBetween: 20, // відстань між слайдерами
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },

        // додаємо додатковий клас
        // можна використовувати для додаткових анімацій
        on: {
          transitionStart: function () {
            let previousIndex = this.previousIndex;
            let previousSlide =
              slider.getElementsByClassName('swiper-slide')[previousIndex];
            if (previousSlide) {
              setTimeout(function () {
                previousSlide.classList.remove('is-play');
              }, 1000);
            }
          },
          transitionEnd: function () {
            let activeIndex = this.activeIndex;
            let activeSlide =
              slider.getElementsByClassName('swiper-slide')[activeIndex];
            activeSlide.classList.add('is-play');
          },
        },
        // адаптив
        breakpoints: {
          // when window width is >= 320px
          414: {
            slidesPerView: 1.3,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          1024: {
            slidesPerView: 3,
            spaceBetween: 34,
          },
          // when window width is >= 1200px
          1280: {
            slidesPerView: 'auto',
            spaceBetween: 86,
          }
        }
      });
    });
  }
  // details slider

  // hero slider
  const heroSlider = document.querySelectorAll('[data-slider="hero-slider"]');
  if (heroSlider) {
    heroSlider.forEach(slider => {
      //
      let arrowLeft = slider.querySelector('.swiper-button-prev');
      let arrowRight = slider.querySelector('.swiper-button-next');
      //

      //   let pagination = slider.querySelector('.swiper-pagination');
      swiper = new Swiper(slider.querySelector('.swiper'), {
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: arrowRight,
          prevEl: arrowLeft,
        },
        //
        on: {
          transitionStart: function () {
            let previousIndex = this.previousIndex;
            let previousSlide =
              slider.getElementsByClassName('swiper-slide')[previousIndex];
            if (previousSlide) {
              setTimeout(function () {
                previousSlide.classList.remove('is-play');
              }, 1000);
            }
          },
          transitionEnd: function () {
            let activeIndex = this.activeIndex;
            let activeSlide =
              slider.getElementsByClassName('swiper-slide')[activeIndex];
            activeSlide.classList.add('is-play');
          },
        },
        breakpoints: {
          // when window width is >= 414px
          414: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          // when window width is >= 1280px
          1280: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        },
      });
    });
  }
  // hero slider
}
window.addEventListener('load', swiperSlider, false);
