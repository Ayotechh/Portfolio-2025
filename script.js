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