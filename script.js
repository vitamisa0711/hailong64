const text = "Hi bbi iêu 💖\n\n" +
             "Dạo này nhiều chuyện xảy ra quá nên giờ em mới chúc mừng anh ngày 6/4 được hiccc 🥺\n\n" +
             "Chúc Hải Long ngày quốc tế nam giới vui vẻ, hạnh phúc và lun iu emmm 💕";

const captions = [
  "2000","2010","2012","2015","2016","2017",
  "2018","2019","2020","2021","2022","2023","2024", "2025", "2026"
];

let i = 0;
let slideIndex = 0;

/* 🎁 mở quà */
function openGift() {
  const gift = document.querySelector(".gift-box");

  /* bung quà */
  gift.classList.add("open");

  setTimeout(() => {
    document.getElementById("intro").style.display = "none";

    document.getElementById("content").style.display = "block";
    document.getElementById("love").style.display = "block";

    document.getElementById("music").play();

    typeWriter();
    createHearts();
    startSlideshow();
  }, 600);
}

/* 💌 chữ rung */
let textArray = Array.from(text);

function typeWriter() {
  if (i < textArray.length) {
    let char = textArray[i];

    if (char === "\n") {
      document.getElementById("text").innerHTML += "<br>";
    } 
    else if (char === " ") {
      document.getElementById("text").innerHTML += " ";
    }
    else {
      document.getElementById("text").innerHTML += 
        "<span class='shake'>" + char + "</span>";
    }

    i++;
    setTimeout(typeWriter, 40);
  }
}

/* 📸 slideshow */
function startSlideshow() {
  const slides = document.querySelectorAll(".slide");

  slides[0].classList.add("active");

  setInterval(() => {
    slides.forEach(s => s.classList.remove("active"));

    slideIndex++;
    if (slideIndex >= slides.length) slideIndex = 0;

    slides[slideIndex].classList.add("active");

    if (captions[slideIndex]) {
      document.getElementById("caption").innerText = captions[slideIndex];
    }
  }, 3000);
}

/* 💕 tim bay */
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
