// Typewriter Effect
const typingText = "Vaishnavi Saxena";
let index = 0;

function typeEffect() {
  const typingElement = document.getElementById("typing-name");
  if (typingElement) {
    if (index < typingText.length) {
      typingElement.innerHTML += typingText.charAt(index);
      index++;
      setTimeout(typeEffect, 120);
    }
  }
}

// Scroll Spy: Highlight active section in navigation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

function scrollSpy() {
  let currentSectionId = "";
  
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    // Highlight if scrolled past the 1/3 of the section
    if (window.scrollY >= sectionTop - 150) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSectionId}`) {
      link.classList.add("active");
    }
  });
}

// Window Event Listeners
window.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});

window.addEventListener("scroll", scrollSpy);