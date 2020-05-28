const home = document.querySelector(".home");
const logo = document.querySelector(".logo");
const explore = document.querySelector(".explore-btn");
const desc = document.querySelector(".description");
const line = document.querySelector(".line");

const tl = new TimelineMax();

tl.fromTo(home, 2, {height: "0%"}, {height: "100vh", ease: Sine.easeOut})
.fromTo(logo, 1, {height: "0px"}, {height: "76px", ease: Sine.easeOut})
.fromTo(explore, 1, {opacity: "0"}, {opacity: "1", ease: Sine.easeOut})
.fromTo(line, 1, {width: "0%"}, {width: "42%", ease: Sine.easeOut}, "-=3")
.fromTo(desc, 1, {opacity: "0"}, {opacity: "1", ease: Sine.easeOut}, "-=3")

