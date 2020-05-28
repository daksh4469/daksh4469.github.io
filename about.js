const leftRed = document.querySelector(".left-red-bar");
const centerRed = document.querySelector(".center-red-bar");
const blueBar = document.querySelector(".blue-bar");
const blueTop = document.querySelector(".blue-top-bar");
const ah = document.querySelector(".about-heading");
const hi = document.querySelector(".bonjour");
const about = document.querySelectorAll(".about");
const bottomRed = document.querySelector(".bottom-red-bar");
const aboutd = document.querySelectorAll(".about-bottom");
const first = document.querySelectorAll(".first");


const tl = new TimelineMax();
const tl1 = new TimelineMax();
const tl2 = new TimelineMax();



tl.fromTo(centerRed, 1.5, {height: "0px"}, {height: "564px", ease: Sine.easeOut})
.fromTo(blueBar, 1.5, {height: "0px"}, {height: "350px", ease: Sine.easeOut}, "-=1.5")
.fromTo(blueTop, 1, {height: "0px"}, {height: "20px", ease: Sine.easeOut})
.fromTo(leftRed, 1, {width: "0px"}, {width: "20px", ease: Sine.easeOut}, "-=1")
.fromTo(bottomRed, 1, {height: "0px"}, {height: "20px", ease: Sine.easeOut}, "-=1")
.fromTo(aboutd, 1, {opacity: "0"}, {opacity: "1", ease: Sine.easeOut},"-=.5")

tl1.fromTo(ah, 1, {opacity: "0"}, {opacity: "1", ease: Sine.easeOut}, "+=1.5")
.fromTo(hi, 1, {opacity: "0"}, {opacity: "1", ease: Sine.easeOut},"-=.5")
.fromTo(about, 1, {opacity: "0"}, {opacity: "1", ease: Sine.easeOut}, "-=.5")



const sh = document.querySelector(".skills-heading");
const redbar = document.querySelector(".second");

/*
document.querySelector(".sbtn").addEventListener("click", function(){
    tl.fromTo(centerRed, .5, {height: "564px"}, {height: "0px", ease: Sine.easeOut})
    .fromTo(blueBar, .5, {height: "350px"}, {height: "0px", ease: Sine.easeOut}, "-=1.5")
    .fromTo(blueTop, 1, {height: "20px"}, {height: "0px", ease: Sine.easeOut}, "-=2")
    .fromTo(leftRed, 1, {width: "20px"}, {width: "0px", ease: Sine.easeOut}, "-=2")
    .fromTo(bottomRed, 1, {height: "20px"}, {height: "0px", ease: Sine.easeOut}, "-=2")
    .fromTo(aboutd, 1, {opacity: "1"}, {opacity: "0", ease: Sine.easeOut},"-=1.5")

    tl1.fromTo(ah, 1, {opacity: "1"}, {opacity: "0", ease: Sine.easeOut}, "-=1.5")
    .fromTo(hi, 1, {opacity: "1"}, {opacity: "0", ease: Sine.easeOut},"-=.5")
    .fromTo(about, 1, {opacity: "1"}, {opacity: "0", ease: Sine.easeOut}, "-=.5");

})*/

