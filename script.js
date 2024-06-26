function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

  document.querySelectorAll("#nav-top-buttons a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href").substring(1); // Remove the "#" from the href
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        locoScroll.scrollTo(targetElement);
      }
    });
  });
}

locoScroll();

gsap.to("#main #img", {
  width: "28vh",
  height: "28vh",
  rotate: 721,
  top: "9.5%",
  scrollTrigger: {
    trigger: "#img",
    scroller: "#main",
    // markers:true,
    start: "top 0%",
    end: "top -207%",
    scrub: 1,
    pin: true,
  },
});

var tl = gsap.timeline();
tl.from("#main #img", {
  opacity: 0,
  duraion: 0.5,
});

var data = [
  {
    name: "Graduation",
    src: "https://i.imgur.com/aAEEK.jpeg",
  },
  {
    name: "My Beautiful Dark Twisted Fantasy",
    src: "https://i.scdn.co/image/ab67616d0000b273d9194aa18fa4c9362b47464f",
  },
  {
    name: "Yeezus",
    src: "",
  },
  {
    name: "The Life of Pablo",
    src: "https://i.scdn.co/image/ab67616d0000b2732a7db835b912dc5014bd37f4",
  },
  {
    name: "Ye",
    src: "https://upload.wikimedia.org/wikipedia/en/7/74/Ye_album_cover.jpg",
  },
];

// gsap.to("#img1",{
//   scrollTrigger:{
//     trigger:"#img1",
//     scoller:"#main",
//     start:"top 9%",
//     end:"top -5%",
//     scrub:2,
//   }
// })

function yeezus_animation() {
  var allH1 = document.querySelectorAll("#page2 h1");
  allH1.forEach(function (elem) {
    var clutter = "";
    var h1Text = elem.textContent;
    var splittedText = h1Text.split("");
    splittedText.forEach(function (e) {
      clutter += `<span>${e}</span>`;
    });
    elem.innerHTML = clutter;
  });

  gsap.to("#page2 h1 span", {
    color: "#1A2425",
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page2 h1",
      scroller: "#main",
      // markers: true,
      start: "top 70%",
      end: "top -10%",
      scrub: 1,
    },
  });
}

yeezus_animation();

// function scroll() {
//   gsap.to("#page3-5 img", {
//     height: "100%",
//     width:"100%",
//     // opacity: "0%",
//     scrollTrigger:{
//       // opacity: "100%",
//       trigger:"#page3-5",
//       scroller: "#main",
//       // markers: true,
//       start: "top 0",
//       end: "top -50%",
//       scrub: 4,
//       pin: true,
//     }
//   });
// }

// scroll()


var tl1 = gsap.timeline()
var tl2 = gsap.timeline()
var tl3 = gsap.timeline()

// tl1.to("#page3-5",{
//   backgroundColor: "#141414",
//   scrollTrigger:{
//     markers: true,
//     trigger:"#page3-5",
//     scroller: "#main",
//     start: "top 0",
//     end: "top -5%",
//     scrub: 1,
//   }
// })

// tl2.to("#page3-5 h1",{
//   color: "#fff",
//   duration: 2,
//   scrollTrigger:{
//     markers: true,
//     trigger:"#page3-5",
//     scroller: "#main",
//     start: "top 0",
//     end: "top -10%",
//     scrub: 1,
//   }
// })



tl3.to("#page3-5 h1", {
  transform: "translateX(-60%)",
  // backgroundColor: "black",
  scrollTrigger:{
    // markers: true,
    trigger:"#page3-5",
    scroller: "#main",
    start: "top 0",
    end: "top -200%",
    scrub: 5,
    pin: true,
  }
})
