function openCert(file) {
  window.open(file, "_blank");
}

const text = "Vaishnavi Saxena";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing-name").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}

window.onload = typeEffect;