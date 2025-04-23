window.addEventListener('DOMContentLoaded', () => {
    const ageInput = document.getElementById("age");
    const btnInscription = document.getElementById("btn-inscription");
    const message = document.getElementById("message");

btnInscription.addEventListener("click", () => {
    const age = parseInt(ageInput.value);
    
    if (isNaN(age)){
        message.textContent = "Veuillez entrer un âge valide";
        message.style.color = "orange";
    } else if (age < 50) {
        message.textContent = "Vous ne pouvez pas vous inscrire si vous avez moins de 50 ans";
        message.style.color = "red";
    } else {
        message.textContent = "Inscription réussie ! Bienvenue 😊";
        message.style.color = "green";
    }
});

});

window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector("form");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const message = document.getElementById("connexion-message");

  form.addEventListener("submit", (event) => {
      event.preventDefault(); // 🔒 Empêche le formulaire d'être envoyé vers un serveur

      if (username.value === "admin" && password.value === "1234") {
          localStorage.setItem("isConnected", "true"); // ✅ Simule la connexion
          message.textContent = "Connexion réussie, redirection...";
          message.style.color = "green";

          setTimeout(() => {
              window.location.href = "catalogue.html";
          }, 1000);
      } else {
          message.textContent = "Nom d'utilisateur ou mot de passe incorrect.";
          message.style.color = "red";
      }
  });
});
