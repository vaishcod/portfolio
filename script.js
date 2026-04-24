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

function openCert(filePath) {
    window.open(filePath, '_blank');
}

window.onload = typeEffect;
