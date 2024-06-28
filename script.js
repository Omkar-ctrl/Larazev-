function locomotiveJS() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

locomotiveJS();

var titlesvg = document.querySelector("#page1 h1");
window.addEventListener("load", () => {
  gsap.from(".navpart1 h4", {
    duration: 1,
    y: -50,
    opacity: 0,
    stagger: 0.2,
    ease: "power1.out",
  });
  gsap.from("nav h1", {
    duration: 1.5,
    x: -250,
    opacity: 0,
    stagger: 1,
    scale: 2,
    ease: "power1.out",
  });
});

// function TitleAnimate() {
//   titlesvg.addEventListener("mouseenter", function () {
//     var tl1 = gsap.timeline();

//     tl1.to("#page1 h1 span svg", {
//       marginLeft: "-7vh",
//       marginTop: "2vh",
//       top: "5%",
//       stagger: true,
//     });

//     tl1.to("#desAgen", {
//       wordSpacing: "5vw",
//       stagger: true,
//     });

//     tl1.to("#page1 h1 span svg", {
//       marginLeft: "-33vh",
//       marginTop: "2vh",
//       top: "40%",
//       rotate: 360,
//       stagger: true,
//     });

//     tl1.to("#page1 h1 span svg", {
//       marginLeft: "-7vh",
//       marginTop: "2vh",
//       top: "20%",
//       delay: 0.5,
//       stagger: true,
//     });

//     tl1.to("#page1 h1 span", {
//       padding: "2vh",
//       padding: "3.4vw",
//       stagger: true,
//     });
//   });
//   titlesvg.addEventListener("mouseleave", function () {
//     gsap.to("#page1 h1 span", {
//       padding: "2vh",
//       padding: "3.4vw",
//       stagger: true,
//     });
//   });
// }

// TitleAnimate();

function VideoHover() {
  var RighElems = document.querySelectorAll(".right-elem");

  RighElems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });

    elem.addEventListener("mouseleave", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });

    elem.addEventListener("mousemove", function (dets) {
      gsap.to(elem.childNodes[3], {
        x: dets.x - elem.getBoundingClientRect().x - 30,
        y: dets.y - elem.getBoundingClientRect().y - 120,
      });
    });
  });
}

VideoHover();

function VideoBg() {
  var page3Center = document.querySelector(".page_center_div");
  var video = document.querySelector("#page3 video");

  page3Center.addEventListener("click", function () {
    video.play();
    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      borderRadius: 0,
    });
  });
  video.addEventListener("click", function () {
    video.pause();
    gsap.to(video, {
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      borderRadius: "30px",
    });
  });
}

VideoBg();

function PlayVideo() {
  var RightSection = document.querySelectorAll(".img_div");
  var video = document.querySelectorAll(".img_div video");

  RightSection.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      elem.childNodes[3].play();
      elem.childNodes[3].style.opacity = 1;
    });

    elem.addEventListener("mouseleave", function () {
      elem.childNodes[3].load();
      elem.childNodes[3].style.opacity = 0;
    });
  });
}
PlayVideo();

function page7Animations() {
  gsap.from("#btm6-part2 h4", {
    x: 0,
    scale: 0.8,
    duration: 1,

    scrollTrigger: {
      trigger: "#btm6-part2",
      scroller: "#main",
      // markers:true,
      start: " 50% 80% ",
      end: " 20% 40% ",
      scrub: 5,
    },
  });
}

page7Animations();




function loadingAnimation() {

  var tl = gsap.timeline()
  tl.from("#page1", {
      opacity: 0,
      duration: 0.2,
      delay: 0.2
  })
  tl.from("#page1", {
      transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
      borderRadius: "150px",
      duration: 2,
      ease: "expo.out"
  })
  tl.from("nav", {
      opacity: 0,
      delay: -0.2
  })
  tl.from("#page1 h1, #page1 p, #page1 div", {
      opacity: 0,
      duration: 0.5,
      stagger: 0.2
  })
}




function TitleAnimate() {
  var tl1 = gsap.timeline();



  tl1.to("#page1 h1 span svg", {

    delay:3
});
  tl1.to("#page1 h1 span svg", {
      marginLeft: "-7vh",
      marginTop: "2vh",
      top: "5%",

      stagger: true,
  });

  tl1.to("#desAgen", {
      wordSpacing: "5vw",
      stagger: true,
  });

  tl1.to("#page1 h1 span svg", {
      marginLeft: "-33vh",
      marginTop: "2vh",
      top: "40%",
      rotate: 360,
      stagger: true,
  });

  


  tl1.to("#page1 h1 span svg", {
      marginLeft: "-7vh",
      marginTop: "2vh",
      top: "20%",
      delay: 0.5,
      stagger: true,
  });
  tl1.to("#desAgen", {
    wordSpacing: "0vw",
    stagger: true,
});
  tl1.to("#page1 h1 span", {
      padding: "2vh",
      padding: "3.4vw",
      stagger: true,
  });

  tl1.to("#desAgen", {
    wordSpacing: "0vw",
    stagger: true,
});

tl1.to("#page1 h1 span svg", {
  rotate: 180,
  
});
}


gsap.to(".nav_bottom",{

  width:"88%"

})

window.onload = function() {

  loadingAnimation()
  TitleAnimate();


};


