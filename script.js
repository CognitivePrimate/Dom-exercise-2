const toggleButton = document.querySelector(".toggleButton");
const nav = document.querySelector("nav");
const numbers = document.querySelector(".numbers");
const letters = document.querySelector(".letters");

toggleButton.addEventListener("click", (event) => {
    event.preventDefault();
    nav.classList.toggle("hidden");
});

nav.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.id === "menuLetters"){
    letters.style.display = "block";
    numbers.style.display = "none";
    nav.classList.toggle("hidden");
    } else if (event.target.id == "menuNumbers"){
    numbers.style.display = "block";
    letters.style.display="none";
    nav.classList.toggle("hidden");
    }
});