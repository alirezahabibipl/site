document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const products = {
    "5700xt": {
      title: "AMD Radeon RX 5700 XT",
      price: "۴۰,۰۰۰,۰۰۰ تومان",
      image: "img/1.jpg",
      desc: "کارت گرافیک حرفه‌ای مخصوص گیمینگ 8GB GDDR6، با عملکرد خیره‌کننده در رزولوشن 2K.",
    },
    "4060": {
      title: "NVIDIA GeForce RTX 4060",
      price: "۲۵,۰۰۰,۰۰۰ تومان",
      image: "img/4060.jpg",
      desc: "کارت گرافیک نسل جدید NVIDIA با پشتیبانی از DLSS 3 و فناوری Ray Tracing.",
    },
  };

  const product = products[id];
  if (product) {
    document.getElementById("product-title").textContent = product.title;
    document.getElementById("product-price").textContent = product.price;
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-desc").textContent = product.desc;
  } else {
    document.querySelector(".product-container").innerHTML =
      "<p>محصول مورد نظر یافت نشد ❌</p>";
  }

  // افزودن به سبد خرید (ساده)
  document
    .getElementById("add-to-cart")
    .addEventListener("click", () => alert("محصول به سبد خرید اضافه شد ✅"));
});
