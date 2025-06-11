function mostrarDeclaracao() {
  const bloco = document.getElementById("declaracao");
  bloco.classList.toggle("hidden");
}

// Carrossel
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

// Fotos dinâmicas
const fotos = Array.from(
  { length: 12 },
  (_, i) => `imagens/anonovo (${i + 1}).jpg`,
);
const swiperContainer = document.getElementById("swiper-container");
fotos.forEach((src, i) => {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";
  slide.innerHTML = `<img src="${src}" alt="Foto ${i + 1}" />`;
  swiperContainer.appendChild(slide);
});

// Vales dinâmicos
const vales = [
  { emoji: "🤗", texto: "Vale Abraço" },
  { emoji: "💋", texto: "Vale Beijo" },
  { emoji: "🍔", texto: "Vale Mc" },
  { emoji: "💆", texto: "Vale Cafuné" },
  { emoji: "🎲", texto: "Vale Misterioso" },
  { emoji: "🎁", texto: "Vale Presente" },
];

const valesContainer = document.getElementById("vales-container");
vales.forEach((vale) => {
  const card = document.createElement("div");
  card.className =
    "vale-card bg-white border-2 border-pink-200 rounded-2xl shadow-md p-6 text-center transition hover:shadow-xl cursor-pointer";
  card.setAttribute("onclick", "resgatar(this)");
  card.innerHTML = `
    <div class="text-2xl mb-4">${vale.emoji} ${vale.texto}</div>
    <button class="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition">Resgatar</button>
  `;
  valesContainer.appendChild(card);
});

function resgatar(card) {
  if (card.classList.contains("resgatado")) return;
  card.classList.add("resgatado");
  const button = card.querySelector("button");
  button.textContent = "Resgatado ❤️";
  button.disabled = true;
}
