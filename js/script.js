const formulaire = document.querySelector("#contact form");
const confirmation = document.querySelector("#confirmation");

formulaire.addEventListener("submit", function (event) {
    event.preventDefault();

    const champs = formulaire.elements;
    const sujet = "Contact portfolio : " + champs.prenom.value + " " + champs.nom.value;
    const corps = champs.message.value + "\n\n" + champs.prenom.value + " " + champs.nom.value + "\n" + champs.email.value;

    window.location.href = "mailto:christophe.malet@epitech.eu?subject=" + encodeURIComponent(sujet) + "&body=" + encodeURIComponent(corps);

    confirmation.hidden = false;
    formulaire.reset();
});
