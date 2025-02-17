let burger = document.querySelector(".burger-menu");
let nav = document.querySelector(".header__nav");

function open_burger() {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
};

burger.addEventListener("click", open_burger);


// this is for translating the website. Add the translations to translation.json later
const languageSelector = document.getElementById("language");

async function loadTranslations(lang) {
    const response = await fetch("translations.json");
    const translations = await response.json();

    document.querySelectorAll("[data-key]").forEach(element => {
        const key = element.getAttribute("data-key");
        element.innerHTML = translations[lang][key]; // Use innerHTML for inline HTML
    });

    localStorage.setItem("language", lang); // Save selection
}

// Load saved language or default to EN
const savedLanguage = localStorage.getItem("language") || "english";
languageSelector.value = savedLanguage;
loadTranslations(savedLanguage);

languageSelector.addEventListener("change", (event) => {
    loadTranslations(event.target.value);
});


$(document).ready(function(){
  // Function to check if the user is on a phone
  function isMobile() {
      return window.innerWidth <= 480; // Adjust based on your needs
  }

  // Initialize slick slider
  $('.projects__boxes').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    prevArrow: "<img src='images/interface/Arrow_left.svg' class='arrow arrow--left'>",
    nextArrow: "<img src='images/interface/Arrow_right.svg' class='arrow arrow--right'>",
    autoplay: isMobile(), // Enable autoplay only if mobile
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          autoplay: true  // Ensure autoplay is enabled for this breakpoint
        }
      }
    ]
  });

  // Update autoplay when resizing
  $(window).resize(function(){
    $('.projects__boxes').slick('slickSetOption', 'autoplay', isMobile(), true);
  });
});

