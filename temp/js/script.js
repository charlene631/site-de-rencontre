window.addEventListener('DOMContentLoaded', () => {
  // Partie inscription
  const ageInput = document.getElementById("age");
  const btnInscription = document.getElementById("btn-inscription");
  const inscriptionMessage = document.getElementById("message");

  if (btnInscription && ageInput && inscriptionMessage) {
    btnInscription.addEventListener("click", () => {
      const age = parseInt(ageInput.value);

      if (isNaN(age)) {
        inscriptionMessage.textContent = "Veuillez entrer un âge valide";
        inscriptionMessage.style.color = "orange";
      } else if (age < 50) {
        inscriptionMessage.textContent = "Vous ne pouvez pas vous inscrire si vous avez moins de 50 ans";
        inscriptionMessage.style.color = "red";
      } else {
        inscriptionMessage.textContent = "Inscription réussie ! Bienvenue 😊";
        inscriptionMessage.style.color = "green";
      }
    });
  }

  // Partie connexion
  const form = document.querySelector("form");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const connexionMessage = document.getElementById("connexion-message");

  if (form && username && password && connexionMessage) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // 🔒 Empêche le formulaire d'être envoyé vers un serveur

      if (username.value === "admin" && password.value === "1234") {
        localStorage.setItem("isConnected", "true"); // ✅ Simule la connexion
        connexionMessage.textContent = "Connexion réussie, redirection...";
        connexionMessage.style.color = "green";

        setTimeout(() => {
          window.location.href = "assets/pages/catalogue.html";
        }, 1000);
      } else {
        connexionMessage.textContent = "Nom d'utilisateur ou mot de passe incorrect.";
        connexionMessage.style.color = "red";
      }
    });
  }
});
