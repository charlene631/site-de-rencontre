globalThis.addEventListener("DOMContentLoaded", () => {
  // Partie inscription
  const formInscription = document.getElementById("form-inscription");
  const ageInput = document.getElementById("age");
  const inscriptionMessage = document.getElementById("message");

  if (formInscription && ageInput && inscriptionMessage) {
    formInscription.addEventListener("submit", (event) => {
      event.preventDefault();
      const age = Number.parseInt(ageInput.value);

      if (Number.isNaN(age) || ageInput.value.trim() === "") {
        inscriptionMessage.textContent = "Veuillez entrer un âge valide";
        inscriptionMessage.style.color = "orange";
      } else if (age < 50) {
        inscriptionMessage.textContent =
          "Vous devez avoir au moins 50 ans pour vous inscrire.";
        inscriptionMessage.style.color = "red";
      } else if (username.value === "" || password.value === "") {
        inscriptionMessage.textContent = "Veuillez remplir tous les champs.";
        inscriptionMessage.style.color = "orange";
      } else {
        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);
        inscriptionMessage.textContent = "Inscription réussie ! Bienvenue 😊";
        inscriptionMessage.style.color = "green";
        setTimeout(() => {
          globalThis.location.href = "testdepersonnalite.html";
        }, 1000);
      }
    });
  }

  // Partie connexion
  const formConnexion = document.querySelector("form");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const connexionMessage = document.getElementById("connexion-message");

  if (formConnexion && username && password && connexionMessage) {
    formConnexion.addEventListener("submit", (event) => {
      event.preventDefault(); // Empêche le formulaire d'être envoyé vers un serveur

      const usernameInput = username.value.trim();
      const passwordInput = password.value.trim();
      const usernameStocke = localStorage.getItem("username");
      const passwordStocke = localStorage.getItem("password");

      if (usernameInput === usernameStocke && passwordInput === passwordStocke) {
        localStorage.setItem("isConnected", "true"); // Simule la connexion
        connexionMessage.textContent = "Connexion réussie, redirection...";
        connexionMessage.style.color = "green";

        setTimeout(() => {
          globalThis.location.href = "catalogue.html";
        }, 1000);
      } else {
        connexionMessage.textContent =
          "Nom d'utilisateur ou mot de passe incorrect.";
        connexionMessage.style.color = "red";
      }
    });
  }
});
