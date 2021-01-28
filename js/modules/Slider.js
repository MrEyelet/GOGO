import Swiper from "swiper/bundle"
import "swiper/swiper-bundle.css"

class Slider {
  constructor() {
    this.runSlider()
  }

  runSlider() {
    const mySwiper = new Swiper(".swiper-container", {
      // direction: "horizontal",
      // loop: true,
      // slidesPerView: 3,
      spaceBetween: 30,
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
        },
        768: {
          slidesPerView: 3
        }
      }
    })
  }
}

export default Slider
