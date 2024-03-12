function locomotiveAnimation() {
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
}

function animationLoader() {
  var tl = gsap.timeline();
  tl.from(".line h1", {
    y: 100,
    stagger: 0.2,
    duration: 0.7,
    delay: 0.5,
  });
  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      var h5timer = document.querySelector("#line1-part1 h5");
      var grow = 0;
      setInterval(function () {
        if (grow <= 100) {
          h5timer.innerHTML = grow;
          grow++;
        }
      }, 33);
    },
  });
  tl.to(".line h2", {
    opacity: 1,
    animationName: "loader-anime",
  });
  tl.to("#loader", {
    opacity: 0,
    delay: 2.6,
    duration: 0.2,
  });
  tl.from("#page1", {
    delay: 0.4,
    y: 1600,
    duration: 0.5,
    opacity: 0,
    ease: Power4,
  });
  tl.to("#loader", {
    display: "none",
  });
  tl.from("#nav", {
    opacity: 0,
  });
  tl.from(".hero h1 , #hero3 h2", {
    y: 100,
    stagger: 0.2,
  });
  tl.from(
    "#herono1 , #page2",
    {
      opacity: 0,
    },
    "-=1.2"
  );
}
animationLoader();

function cursorAnimation() {
  Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  
  document.querySelector("#nav-part2 h2").addEventListener("mouseleave", function(){alert("hi")})
  var videocontainer = document.querySelector("#video-container");
  var video = document.querySelector("#video-container video")
  videocontainer.addEventListener("mouseenter",function(){
    gsap.to(".mousefollower",{
      opacity:0
    })
    videocontainer.addEventListener("mousemove",function(dets){
      gsap.to("#video-crsr",{
        left:dets.x -500,
        y:dets.y-300
      })
    })
  })
  videocontainer.addEventListener("mouseleave",function(){
    gsap.to(".mousefollower",{
      opacity:1,
    })
    gsap.to("#video-crsr",{
      top:"-10%",
      left:"70%"
    })
  })
  var flag=0
  video.addEventListener("click",function(){
    // alert("hi")
    if(flag==0){
      video.play()
    video.style.opacity =1
    document.querySelector("#video-crsr").innerHTML = `<i class="ri-pause-line"></i>`
    gsap.to("#video-crsr",{
      scale:0.5 
    })
    flag =1;
    }
    else{
      video.pause()
      video.style.opacity =0
      document.querySelector("#video-crsr").innerHTML = `<i class="ri-play-line"></i>`
      gsap.to("#video-crsr",{
        scale:1 
      })
      flag =0;
    }
    
  })
  Shery.makeMagnet("#nav-part2 h2" );
  
}


cursorAnimation();
locomotiveAnimation();

function sheryAnimation() {
  Shery.imageEffect("#image-div", {
    style: 3,
    config: {
      uFrequencyX: { value: 12, range: [0, 100] },
      uFrequencyY: { value: 12, range: [0, 100] },
      uFrequencyZ: { value: 10, range: [0, 100] },
      geoVertex: { range: [1, 64], value: 32 },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.7272749932567818 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.89, range: [1, 5] },
      scrollType: { value: 0 },
      noEffectGooey: { value: false },
      onMouse: { value: 1 },
      noise_speed: { value: 0.69, range: [0, 10] },
      metaball: { value: 0.4, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.58, range: [0, 2] },
      noise_scale: { value: 7.63, range: [0, 100] },
    },
    gooey: true,
  });
 
}
sheryAnimation();

document.addEventListener("mousemove",function(dets){
  gsap.to("#flag",{
    left:dets.x,
    top:dets.y
  })
})

document.querySelector("#hero3").addEventListener("mouseenter",function(){
  gsap.to("#flag",{
    opacity:1
  })
})
document.querySelector("#hero3").addEventListener("mouseleave",function(){
  gsap.to("#flag",{
    opacity:0
  })
})

var text = document.querySelector("#text");
var flag=0;

  text.addEventListener("mouseenter",function(){
    gsap.to("#text h1",{
     fontFamily:"silk serif",
     // color:red,
    //  fontSize: 12,
     onStart: function(){
       $('#text h1').textillate({ in: { effect: 'fadeIn' } });
     }
    })
   }) 