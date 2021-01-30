import { gsap, TimelineMax, Power1, Power4 } from "gsap"
gsap.registerPlugin()
class AppearElements {
  constructor() {
    this.preloader = document.querySelector(".preloader")
    this.tlShowElements = new TimelineMax({})

    this.events()
  }

  events() {
    document.addEventListener("DOMContentLoaded", event => {
      // wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets
      window.onload = () => {
        // OPTIONAL - waits til next tick render to run code (prevents running in the middle of render tick)
        window.requestAnimationFrame(() => {
          // GSAP custom code goes here
          this.showElements()
        })
      }
    })
  }

  showElements() {
    this.tlShowElements.from(".preloader__cover", { duration: 1.5, x: "200%", ease: Power1.easeOut })
    this.tlShowElements.to(".preloader__outer-circle", 0.5, { duration: 0.5, opacity: 0, ease: Power4.easeOut }, "=-1.5")
    this.tlShowElements.to(".preloader", { duration: 1.5, x: "-100%", ease: Power4.easeOut }, "=-1")
    // setTimeout(() => {
    //   this.preloader.remove()
    // }, 2500)
    this.tlShowElements.from(".box", { duration: 1.5, x: "10%", opacity: 0, stagger: 0.15, ease: Power4.easeOut }, 0.1, "=-1.5")
    // this.tlShowElements.staggerFrom(".tiles__single", 1.5, { y: "15%", opacity: 0, ease: Power4.easeOut }, 0.2, "-=1.5")
    // this.tlShowElements.from(".hero__desc", 0.75, { opacity: 0, ease: Sine.easeOut }, "-=1.5")
    // this.tlShowElements.staggerFrom(".cover", 1.5, { x: "-200%", ease: Power4.easeOut }, 0.2, "-=1.5")
    // this.tlShowElements.from(".btn__inner", 0.1, { visibility: "hidden", ease: Power4.easeOut }, "-=1.4")
    // this.tlShowElements.from(".btn svg rect", 1.5, { opacity: 0, ease: Power4.easeOut }, "-=1")
  }
}

export default AppearElements
