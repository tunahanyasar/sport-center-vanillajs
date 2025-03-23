// ============================== OUR CLASSES - BUTTON - DOM ==========================
// Değerlendirme 11 : Our Classes alanında bulunan butonlar aktif çalışıyor mu?

let btn = document.querySelector(".our-courses-buttons"); // Butonları seç
let content = document.querySelector("#class-content"); // İçerik alanını seç

// Kurs bilgilerini obje şeklinde tut
const classData = {
  yoga: {
    title: "Why are your Yoga?",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste corporis quam accusantium necessitatibus! Autem laudantium commodi recusandae molestiae voluptatum quidem assumenda, ratione in ullam minima et iure earum quod fugiat.",
    title2: "Schedule:",
    program: [
      "Saturday-Sunday: 8:00am - 10:00am",
      "Monday-Tuesday: 10:00am - 12:00pm",
      "Wednesday-Friday: 3:00pm - 6:00pm",
    ],
    img: "img/yoga.jpg",
  },
  group: {
    title: "Why are your Group?",
    desc: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
    title2: "Schedule:",
    program: [
      "Saturday-Sunday: 9:00am - 11:00am",
      "Monday-Tuesday: 12:00pm - 14:00pm",
      "Wednesday-Friday: 5:00pm - 7:00pm",
    ],
    img: "img/group.webp",
  },
  solo: {
    title: "Why are your Solo?",
    desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
    title2: "Schedule:",
    program: [
      "Saturday-Sunday: 8:00am - 10:00am",
      "Monday-Tuesday: 9:00am - 11:00pm",
      "Wednesday-Friday: 2:00pm - 4:00pm",
    ],
    img: "img/solo.jpg",
  },
  stretch: {
    title: "Why are your Stretch?",
    desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    title2: "Schedule:",
    program: [
      "Saturday-Sunday: 11:00am - 14:00pm",
      "Monday-Tuesday: 10:00am - 12:00pm",
      "Wednesday-Friday: 5:00pm - 7:00pm",
    ],
    img: "img/stret.webp",
  },
};

// Butonlara tıklanınca içeriği değiştiren olay dinleyicisi
btn.addEventListener("click", (e) => {
  content.classList.remove("class-content"); // Animasyon için sınıfı kaldır
  void content.offsetWidth;
  content.classList.add("class-content"); // Animasyonlu şekilde tekrar ekle

  const data = classData[e.target.id]; // Seçilen kursun verisini al
  let contents = document.querySelectorAll(
    "#class-content h6, #class-content p"
  ); // Başlık ve paragrafları seç

  contents[0].innerHTML = data.title; // Başlığı güncelle
  contents[1].innerHTML = data.desc; // Açıklamayı güncelle
  contents[2].innerHTML = data.title2; // Açıklamayı güncelle
  contents[3].innerHTML = data.program[0]; // İlk zaman bilgisini güncelle
  contents[4].innerHTML = data.program[1]; // İkinci zaman bilgisini güncelle
  contents[5].innerHTML = data.program[2]; // Üçüncü zaman bilgisini güncelle

  document.querySelector("#class-content img").src = data.img; // Resmi güncelle
});

// ============================== BMI CALCULATE - TRIANGLE POSITION ==========================
// Değerlendirme 8 : BMI Calculator doğru çalışıyor mu? 

// Değerleri al
const triangle = document.querySelector(".material-triangle");
const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");

// Kullanıcı ağırlık veya boy girişini tamamladığında BMI hesaplama işlemi başlar
const calculateBMI = () => {
  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  // Kullanıcı tam değer girmeden işlem yapma
  if (!heightInput.value || !weightInput.value) return;

  const heightInMeters = height / 100; // cm cinsinden alınan değeri metreye çevir
  const bmi = weight / (heightInMeters * heightInMeters); // BMI hesaplama formülü
  let percentage;

  // BMI'ye göre üçgenin yüzdelik konumunu belirleme
  if (bmi < 18.5) {
    percentage = 7 + (bmi - 13.5) * (16 / 5);
  } else if (bmi < 25) {
    percentage = 23 + (bmi - 18.5) * (16 / 7);
  } else {
    percentage = 40 + (bmi - 24.5) * (16 / 5);
  }

  // Yüzdelik değeri belirli sınırlar içinde tut
  if (percentage >= 6 && percentage <= 88) {
    triangle.style.left = `${percentage}%`;
  } else if (percentage < 6) {
    triangle.style.left = "6%"; // En düşük değer
  } else if (percentage > 88) {
    triangle.style.left = "88%"; // En yüksek değer
  }
};

// Kullanıcı girişlerini izleme ve BMI hesaplama
heightInput.addEventListener("input", calculateBMI);
weightInput.addEventListener("input", calculateBMI);

// ================================================================
// Değerlendirme 9 : Navigation Bar safya hareketlerine istenen reaksiyonu veriyor mu? 

// Navbar Scroll yapınca bg değişmesi
function headerScrolled() {
  let navbar = document.querySelector(".navbar-container");
  let scrollValue = window.scrollY;
  if(scrollValue < 700 ) {
      navbar.classList.remove('bgClass');
  } else {
      navbar.classList.add('bgClass');
  }
}
window.addEventListener('scroll', headerScrolled);
window.addEventListener('load', headerScrolled)

// ========================================================
// Değerlendirme 10 : Navigation Bar linklemeleri doğru çalışıyor mu?

// Sayfa Kaydırma ile Aktif Bağlantı Gösterimi
var links = document.getElementsByClassName('scrollto')
var focusSectionLink = function (event) {
  for (const link of links) {
      var id = link.hash.slice(1);
      var section = document.getElementById(id);
      var position = window.scrollY + (window.innerHeight / 2);
  }
}

// Yumuşak Kaydırma Etkileşimi
var focusSection = function (event) {
  event.preventDefault();
  var id = event.target.hash.slice(1);
  var section = document.getElementById(id)

  if (section) {
      window.scrollTo({
          top: section.offsetTop - 50,
          behavior: 'smooth',
      })
  }
}

window.addEventListener('scroll',focusSectionLink)

for (const link of links) {
  link.addEventListener('click',focusSection)
}