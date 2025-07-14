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

// === Fade-In on Scroll ===


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // Animate only once
    }
  });
}, {
  threshold: 0.1
});

faders.forEach((el) => observer.observe(el));
