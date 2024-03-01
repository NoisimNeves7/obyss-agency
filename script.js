
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
    delay:4,
    duration:0.2
})
tl.from("#page1",{
    delay:0.4,
    y:1600,
    duration:0.5,
    opacity:0,
    ease:Power4
})
t1.to("#loader",{
    display:none
})