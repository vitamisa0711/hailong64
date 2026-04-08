text = "Hi bbi iêu 💖\n\n" +
             "Dạo này nhiều chuyện xảy ra quá nên giờ em mới chúc mừng anh ngày 6/4 được hiccc 🥺\n\n" +
             "Chúc Hải Long ngày quốc tế nam giới vui vẻ, hạnh phúc và lun iu emmm 💕\n\n" +
             "I LOVE UUUUU MOAZ";

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
  "2024",
  "2025",
  "2026"
];

let i = 0;
let slideIndex = 0;

function openGift() {
  document.querySelector(".gift-box").style.display = "none";
  document.getElementById("content").classList.remove("hidden");
  document.getElementById("music").play();

  typeWriter();
  createHearts();
  startSlideshow();
}

function typeWriter() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}

function showLove() {
  document.getElementById("love").classList.remove("hidden");
}

function startSlideshow() {
  setInterval(() => {
    const slides = document.querySelectorAll(".slide");

    slides.forEach(s => s.classList.remove("active"));

    slideIndex++;
    if (slideIndex >= slides.length) slideIndex = 0;

    slides[slideIndex].classList.add("active");
    document.getElementById("caption").innerText = captions[slideIndex];
  }, 3000);
}

function createHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }, 300);
}
