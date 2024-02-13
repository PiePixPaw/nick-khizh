document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.getElementById("carousel");
  const images = [
    "img/cert_img/python_cer.png",
    "img/cert_img/python_cer.png",
    "img/cert_img/python_cer.png",
    "img/cert_img/python_cer.png",
    "img/cert_img/python_cer.png",
    "img/cert_img/python_cer.png",
    "img/cert_img/python_cer.png",
    // Добавьте пути к изображениям, как требуется
  ];

  images.forEach(image => {
    const img = document.createElement("img");
    img.src = image;
    img.classList.add("carousel-item");
    img.addEventListener("click", () => {
      img.classList.toggle("expanded");
    });
    carousel.appendChild(img);
  });

  let currentIndex = 0;
  const totalImages = images.length;

  function moveCarousel(direction) {
    if (direction === "next") {
      currentIndex = (currentIndex + 1) % totalImages;
    } else {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    }
    const offset = -currentIndex * 320; // Width of each image (300px) + margin (20px)
    carousel.style.transform = `translateX(${offset}px)`;
  }

  // Прокрутка карусели мышью
  let isDown = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });
  carousel.addEventListener("mouseleave", () => {
    isDown = false;
  });
  carousel.addEventListener("mouseup", () => {
    isDown = false;
  });
  carousel.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // Скорость прокрутки карусели
    carousel.scrollLeft = scrollLeft - walk;
  });

  // Кнопки прокрутки карусели
  const nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.addEventListener("click", () => moveCarousel("next"));
  document.body.appendChild(nextButton);

  // Добавьте кнопку для предыдущего изображения, если необходимо

});
