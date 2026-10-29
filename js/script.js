const formulaire = document.querySelector("#contact form");
const confirmation = document.querySelector("#confirmation");
const bouton = formulaire.querySelector("button");

formulaire.addEventListener("submit", function (event) {
    // On empêche le rechargement de la page : on envoie nous-mêmes le message
    event.preventDefault();
    bouton.disabled = true;
    bouton.textContent = "Envoi en cours...";

    // Envoi des champs du formulaire au service Formspree
    fetch(formulaire.action, {
        method: "POST",
        body: new FormData(formulaire),
        headers: { Accept: "application/json" }
    })
        .then(function (reponse) {
            if (reponse.ok) {
                confirmation.textContent = "Merci ! Votre message a bien été envoyé.";
                formulaire.reset();
            } else {
                confirmation.textContent = "L'envoi a échoué. Écrivez-moi directement à christophe.malet@epitech.eu.";
            }
        })
        .catch(function () {
            confirmation.textContent = "Pas de connexion. Réessayez, ou écrivez-moi à christophe.malet@epitech.eu.";
        })
        .finally(function () {
            confirmation.hidden = false;
            bouton.disabled = false;
            bouton.textContent = "Envoyer";
        });
});
