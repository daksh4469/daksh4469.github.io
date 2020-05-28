const skills = document.querySelector(".skills-heading");
const redbar = document.querySelector(".second-red-bar");
const bluebar = document.querySelector(".second-blue-bar");
const redskills = document.querySelector(".red-skills");
const quote = document.querySelector(".quote");

const tl = new TimelineMax();

tl.fromTo(skills, 1, {opacity: "0"}, {opacity: "1", ease: Sine.easeOut}, "+=.5")
.fromTo( quote, 1.5, {opacity: "0"}, {opacity: "1", ease: Sine.easeOut}, "-=1")
.fromTo(redbar, 1.5, {height: "0vh"}, {height: "50vh", ease: Sine.easeOut}, "-=.5")
.fromTo(redskills, 2, {opacity: "0"}, {opacity: "1", ease: Sine.easeOut}, "-=1")
.fromTo(bluebar, 1, {height: "0vh"}, {height: "50vh", ease: Sine.easeOut}, "-=2.5")
