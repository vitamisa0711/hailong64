const text = "Hi bbi iêu 💖\n\n" +
             "Dạo này nhiều chuyện xảy ra quá nên giờ em mới chúc mừng anh ngày 6/4 được hiccc 🥺\n\n" +
             "Chúc Hải Long ngày quốc tế nam giới vui vẻ, hạnh phúc và lun iu emmm 💕\n\n" +
             "I LOVE UUUUU MOAZ 😘";

const captions = [
  "2000",
  "2010",
  "2012",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024"
];

let i = 0;
let slideIndex = 0;

/* 🔥 đảm bảo ẩn từ đầu (fix lỗi hiện sớm trên iPad) */
window.onload = function() {
  document.getElementById("content").style.display = "none";
  document.getElementById("love").style.display = "none";
};

/* 🎁 mở quà */
function openGift() {
  document.querySelector(".gift-box").style.display = "none";

  const content = document.getElementById("content");
  content.style.display = "block";

  document.getElementById("music").play();

  typeWriter();
  createHearts();
  startSlideshow();
}

/* ✍️ hiệu ứng viết chữ */
function typeWriter() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}

/* ❤️ hiện màn cuối */
function showLove() {
  document.getElementById("love").style.display = "block";
}

/* 📸 slideshow + caption */
function startSlideshow() {
  const slides = document.querySelectorAll(".slide");

  setInterval(() => {
    slides.forEach(s => s.classList.remove("active"));

    slideIndex++;
    if (slideIndex >= slides.length) slideIndex = 0;

    slides[slideIndex].classList.add("active");

    /* tránh lỗi nếu caption thiếu */
    if (captions[slideIndex]) {
      document.getElementById("caption").innerText = captions[slideIndex];
    } else {
      document.getElementById("caption").innerText = "";
    }
  }, 3000);
}

/* 💕 trái tim bay */
function createHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }, 300);
}
