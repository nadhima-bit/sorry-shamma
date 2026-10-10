// Birthday surprise for Shamma Fathima 💗
// Put your photos inside the "photos" folder and name them:
// photo1.jpg, photo2.jpg, photo3.jpg, photo4.jpg

const screens = [...document.querySelectorAll(".screen")];

function showScreen(id) {
  screens.forEach(screen => screen.classList.toggle("active", screen.id === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-next]").forEach(button => {
  button.addEventListener("click", () => showScreen(button.dataset.next));
});

document.getElementById("celebrate").addEventListener("click", () => {
  document.getElementById("magicMessage").hidden = false;
  launchConfetti();
  document.getElementById("celebrate").textContent = "Surprise unlocked! 💖";
});

document.getElementById("restart").addEventListener("click", () => {
  document.getElementById("magicMessage").hidden = true;
  document.getElementById("celebrate").textContent = "Tap for a little birthday magic 🎊";
  showScreen("welcome");
});

const heartContainer = document.querySelector(".floating-hearts");
const heartSymbols = ["💗", "💕", "♡", "🌸", "✨"];
function createFloatingHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${14 + Math.random() * 18}px`;
  heart.style.animationDuration = `${7 + Math.random() * 7}s`;
  heartContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 14500);
}
setInterval(createFloatingHeart, 700);

function launchConfetti() {
  const symbols = ["🎉", "💗", "✨", "🌷", "💕", "🎊"];
  for (let i = 0; i < 48; i++) {
    const bit = document.createElement("span");
    bit.className = "heart";
    bit.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    bit.style.left = `${Math.random() * 100}%`;
    bit.style.bottom = `${Math.random() * 30}%`;
    bit.style.fontSize = `${16 + Math.random() * 20}px`;
    bit.style.animationDuration = `${2.5 + Math.random() * 3}s`;
    heartContainer.appendChild(bit);
    setTimeout(() => bit.remove(), 6000);
  }
}
