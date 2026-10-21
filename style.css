/* RYDH — JAVASCRIPT */

document.addEventListener("DOMContentLoaded", function () {
// Efek teks berjalan
const typingText = document.getElementById("typingText");

if (typingText) {
const words = [
"Future Builder",
"Web Developer",
"Creative Thinker"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const word = words[wordIndex];

  typingText.textContent = word.substring(0, charIndex);

  if (!deleting) {
    charIndex++;

    if (charIndex > word.length) {
      deleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    charIndex--;

    if (charIndex < 0) {
      deleting = false;
      charIndex = 0;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, deleting ? 45 : 90);
}

typeEffect();

}

// Menu navigasi HP
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
menuToggle.addEventListener("click", function () {
navLinks.classList.toggle("active");

  const expanded =
    menuToggle.getAttribute("aria-expanded") === "true";

  menuToggle.setAttribute("aria-expanded", String(!expanded));
});

navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

}

// Animasi saat bagian website muncul
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
const observer = new IntersectionObserver(function (entries) {
entries.forEach(function (entry) {
if (entry.isIntersecting) {
entry.target.classList.add("show");
observer.unobserve(entry.target);
}
});
}, {
threshold: 0.12
});

revealElements.forEach(function (element) {
  observer.observe(element);
});

} else {
revealElements.forEach(function (element) {
element.classList.add("show");
});
}

// Tombol kembali ke atas
const backToTop = document.getElementById("backToTop");

if (backToTop) {
backToTop.addEventListener("click", function () {
window.scrollTo({
top: 0,
behavior: "smooth"
});
});
}

// Tahun footer otomatis
const yearElement = document.getElementById("currentYear");

if (yearElement) {
yearElement.textContent = new Date().getFullYear();
}

console.log("Website Rydh berhasil dimuat!");
});