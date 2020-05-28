const back = document.querySelector(".blue-bg");
const list = document.querySelector(".icon-list");
const email = document.querySelector(".email");
const git = document.querySelector(".git");

const tl = new TimelineMax();

tl.fromTo(back, 1, {height: "0px"}, {height: "71vh", ease: Sine.easeOut}, "+=1")
.fromTo(git, 1.5, {opacity: "0"}, {opacity: "1", ease: Sine.easeOut}, "-=1")
.fromTo(email, 1.5, {opacity: "0"}, {opacity: "1", ease: Sine.easeOut})

