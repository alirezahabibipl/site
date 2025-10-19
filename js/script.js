// اسلایدر ساده خودکار با نقاط
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slides");
  const allSlides = document.querySelectorAll(".slide");
  const dotsContainer = document.getElementById("dots");

  let index = 0;

  // ایجاد دات‌ها
  allSlides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.className = "dot";
    dot.addEventListener("click", () => moveTo(i));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  function moveTo(i) {
    index = i;
    slides.style.transform = `translateX(-${index * 100}%)`;
    slides.style.transition = "transform 0.6s ease-in-out"; // حرکت نرم
    updateDots();
  }

  function updateDots() {
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  function autoPlay() {
    index = (index + 1) % allSlides.length;
    moveTo(index);
  }

  updateDots();

  // هر ۵ ثانیه اسلاید بعدی
  let timer = setInterval(autoPlay, 5000);

  slides.addEventListener("mouseenter", () => clearInterval(timer));
  slides.addEventListener("mouseleave", () => {
    timer = setInterval(autoPlay, 5000);
  });
});
