const formulaire = document.querySelector("#contact form");
const confirmation = document.querySelector("#confirmation");

formulaire.addEventListener("submit", function (event) {
    event.preventDefault();
    confirmation.hidden = false;
    formulaire.reset();
});