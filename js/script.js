// Smooth navigation scrolling
/*const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});


// Hero button scroll
const workBtn = document.getElementById("workBtn");

if(workBtn){
workBtn.addEventListener("click", () => {
  document.querySelector("#projects").scrollIntoView({
    behavior: "smooth"
  });
});
}


// Scroll animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

  sections.forEach(section => {

    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 100){
      section.classList.add("visible");
    }

  });

});*/
// Simple scroll animation

const elements = document.querySelectorAll(".project-card, .skill");

window.addEventListener("scroll", () => {

elements.forEach(el => {

const position = el.getBoundingClientRect().top;

if(position < window.innerHeight - 100){
el.style.opacity = "1";
el.style.transform = "translateY(0)";
}

});

});