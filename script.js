// === MODAL LOGIC ===
const modal = document.getElementById("blockModal");
const closeBtn = document.getElementById("closeModal");
const faders = document.querySelectorAll(".fade-in");
document.getElementById("year").textContent = new Date().getFullYear();

function showModal() {
  modal.style.display = "flex";
}

closeBtn.onclick = () => {
  modal.style.display = "none";
};

// === BLOCK ACTIONS ===
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  showModal();
});

document.addEventListener("keydown", function (e) {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
    (e.ctrlKey && ["U", "S", "C", "X", "A"].includes(e.key))
  ) {
    e.preventDefault();
    showModal();
  }
});

 // Scroll fade-in effect
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.2 }
      );

      document.querySelectorAll("[data-fade]").forEach((section) => {
        observer.observe(section);
      });

      const phrases = [
  "A Frontend Developer",
  "A Product Designer",
  "A Cybersecurity Analyst"
];

const output = document.querySelector(".typewriter-output");
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  const displayedText = currentPhrase.substring(0, charIndex);

  // Wrap each character in a <span> for coloring
  output.innerHTML = [...displayedText]
    .map((char) => `<span>${char === " " ? "&nbsp;" : char}</span>`)
    .join("");

  if (!isDeleting && charIndex < currentPhrase.length) {
    charIndex++;
    typingSpeed = 120;
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    typingSpeed = 40;
  } else {
    isDeleting = !isDeleting;
    typingSpeed = isDeleting ? 1000 : 500;
    if (!isDeleting) {
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  setTimeout(typeEffect, typingSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});
