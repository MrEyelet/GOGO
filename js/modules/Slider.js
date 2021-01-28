import Swiper from "swiper/bundle"
import "swiper/swiper-bundle.css"

class Slider {
  constructor() {
    this.runSlider()
  }

  runSlider() {
    const mySwiper = new Swiper(".slider__container", {
      loop: true,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        480: {
          slidesPerView: 2
          // spaceBetween: 20
        },
        768: {
          slidesPerView: 3
          // spaceBetween: 20
        }
      }
    })
  }
}

export default Slider
