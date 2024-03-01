function animationLoader(){
var tl = gsap.timeline();
tl.from(".line h1",{
    y:100,
    stagger:0.2,
    duration:0.7,
    delay:0.5
})
tl.from("#line1-part1",{
    opacity:0,
    onStart: function(){
        var h5timer = document.querySelector("#line1-part1 h5");
var grow=0;
setInterval(function(){
    if(grow<=100){
        h5timer.innerHTML = grow;
        grow++; 
    }
},33);
    }
})
tl.to(".line h2",{
    opacity:1,
    animationName:"anime"
})
tl.to("#loader",{
    opacity:0,
    delay:0,
    duration:0.2
})
tl.from("#page1",{
    delay:0.4,
    y:1600,
    duration:0.5,
    opacity:0,
    ease:Power4
})
tl.to("#loader",{
    display:"none"
})
tl.from("#nav",{
    opacity:0
})
tl.from(".hero h1 , #hero3 h2",{
    y:100,
    stagger:0.2
})
}
animationLoader();

function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to(".crsr",{
            left:dets.x,
            top:dets.y
        })
    })
    
    Shery.makeMagnet("#nav-part2 h2" );
}
cursorAnimation();