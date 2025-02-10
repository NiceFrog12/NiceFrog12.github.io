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
const savedLanguage = localStorage.getItem("language") || "EN";
languageSelector.value = savedLanguage;
loadTranslations(savedLanguage);

languageSelector.addEventListener("change", (event) => {
    loadTranslations(event.target.value);
});

