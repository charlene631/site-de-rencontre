document.getElementById("btn-start").addEventListener("click", () => {
  let score = 0;

  // Question 1
  let q1 = prompt("Préférez-vous :\n1. Lire un livre\n2. Sortir entre amis");
  switch (q1) {
      case "1":
          score += 1;
          break;
      case "2":
          score += 2;
          break;
      default:
          console.log("Réponse invalide pour la question 1");
  }

  // Question 2
  let q2 = prompt("Votre lieu idéal ?\n1. Une bibliothèque\n2. Une plage animée");
  switch (q2) {
      case "1":
          score += 1;
          break;
      case "2":
          score += 2;
          break;
      default:
          console.log("Réponse invalide pour la question 2");
  }

  // Question 3
  let q3 = prompt("Choisissez un animal :\n1. Hibou\n2. Dauphin");
  switch (q3) {
      case "1":
          score += 1;
          break;
      case "2":
          score += 2;
          break;
      default:
          console.log("Réponse invalide pour la question 3");
  }

  // Résultat dans la console
  console.log("Score final :", score);
  switch (true) {
      case (score <= 3):
          console.log("Tu es plutôt calme, réfléchi·e et introspectif·ve 🧘‍♀️");
          break;
      case (score <= 5):
          console.log("Tu es un·e équilibré·e, entre social et solitude 🤝📚");
          break;
      case (score > 5):
          console.log("Tu es extraverti·e, sociable et dynamique 🎉🌊");
          break;
  }
});
