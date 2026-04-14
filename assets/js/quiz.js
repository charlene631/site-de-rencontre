const questions = [
  {
    texte: "Ce que vous recherchez",
    reponses: [
      { texte: "Une relation stable et durable", points: 2 },
      { texte: "De la compagnie et des sorties", points: 1 },
      { texte: "J'explore sans attentes précises", points: 0 },
    ],
  },
  {
    texte: "Votre rapport à l'engagement",
    reponses: [
      { texte: "Je suis prêt à m'engager pleinement", points: 2 },
      { texte: "Je m'engage si la relation évolue bien", points: 1 },
      { texte: "Je préfère rester libre pour l'instant", points: 0 },
    ],
  },
  {
    texte: "La famille dans votre vie",
    reponses: [
      { texte: "Elle compte mais je préserve mon espace", points: 1 },
      { texte: "Elle est centrale et je veux la partager", points: 2 },
      { texte: "Je préfère garder les sphères séparées", points: 0 },
    ],
  },
  {
    texte: "Votre façon de construire la confiance",
    reponses: [
      { texte: "Je reste sur mes gardes, ça vient avec le temps", points: 0 },
      { texte: "Je prends le temps, la confiance est essentielle", points: 2 },
      { texte: "Je fais confiance assez naturellement", points: 1 },
    ],
  },
  {
    texte: "Ce qui compte le plus dans une relation",
    reponses: [
      { texte: "Les valeurs et la sincérité", points: 2 },
      { texte: "Le partage d'activités et de passions", points: 1 },
      { texte: "La complicité et la légèreté", points: 0 },
    ],
  },
  {
    texte: "Votre rapport à la communication",
    reponses: [
      { texte: "Je communique quand c'est nécessaire", points: 1 },
      {
        texte: "Je crois au dialogue ouvert même sur les sujets difficiles",
        points: 2,
      },
      { texte: "Je préfère éviter les confrontations", points: 0 },
    ],
  },
  {
    texte: "La place de l'autre dans votre quotidien",
    reponses: [
      { texte: "J'aime avoir mon espace mais partager des moments", points: 1 },
      { texte: "Je veux quelqu'un avec qui partager le quotidien", points: 2 },

      { texte: "Je tiens à mon indépendance avant tout", points: 0 },
    ],
  },
  {
    texte: "Votre vision de l'avenir",
    reponses: [
      { texte: "J'envisage une vie commune à terme", points: 2 },
      { texte: "Je vis au présent, l'avenir se construit", points: 1 },
      { texte: "Je ne me projette pas encore", points: 0 },
    ],
  },
  {
    texte: "Votre expérience des relations passées",
    reponses: [
      { texte: "Je suis encore en train de faire le point", points: 1 },
      { texte: "J'en ai tiré des leçons et je suis prêt à avancer", points: 2 },
      { texte: "Je préfère ne pas y penser pour l'instant", points: 0 },
    ],
  },
  {
    texte: "Le respect et les limites",
    reponses: [
      { texte: "Je m'adapte selon les situations", points: 0 },
      {
        texte: "Les limites de l'autre sont aussi importantes que les miennes",
        points: 2,
      },
      {
        texte: "Je respecte les limites mais j'aime tester les choses",
        points: 1,
      },
    ],
  },
  {
    texte: "Votre disponibilité émotionnelle",
    reponses: [
      {
        texte: "Je suis pleinement disponible pour une nouvelle relation",
        points: 2,
      },
      { texte: "Je le suis, avec quelques réserves", points: 1 },
      { texte: "Je ne suis pas sûr d'être prêt", points: 0 },
    ],
  },
  {
    texte: "Ce que vous attendez de ce site",
    reponses: [
      {
        texte: "Trouver une personne avec qui construire quelque chose de vrai",
        points: 2,
      },
      {
        texte: "Rencontrer des gens intéressants et voir ce qui se passe",
        points: 1,
      },
      { texte: "Découvrir ce que ça peut apporter sans attentes", points: 0 },
    ],
  },
];

let questionActuelle = 0;
let score = 0;

const container = document.getElementById("test-container");
const btnStart = document.getElementById("btn-start");

function afficherQuestion(index) {
  const q = questions[index];
  container.innerHTML = `
    <p class="quiz-progression">Question ${index + 1} sur ${questions.length}</p>
    <div class="quiz-barre-container">
      <div class="quiz-barre" style="width: ${(index / questions.length) * 100}%"></div>
    </div>
    <h3 class="quiz-question">${q.texte}</h3>
    <div class="quiz-reponses">
      ${q.reponses
        .map(
          (r, i) => `
        <button class="quiz-btn" data-points="${r.points}">
          ${r.texte}
        </button>
      `,
        )
        .join("")}
    </div>
  `;

  document.querySelectorAll(".quiz-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      score += parseInt(btn.dataset.points);
      questionActuelle++;
      if (questionActuelle < questions.length) {
        afficherQuestion(questionActuelle);
      } else {
        afficherResultat();
      }
    });
  });
}

function afficherResultat() {
  const pourcentage = Math.round((score / 24) * 100);
  let titre, message, couleur;

  if (pourcentage >= 75) {
    titre = "Profil sérieux";
    message = `Avec ${pourcentage}% de compatibilité avec nos valeurs, votre profil correspond à quelqu'un qui cherche une relation vraie et durable. Vous pouvez accéder au catalogue des profils sérieux.`;
    couleur = "#3e4a1b";
  } else if (pourcentage >= 50) {
    titre = "Profil ouvert";
    message = `Avec ${pourcentage}%, vous êtes ouvert à une relation sans vous imposer de cadre strict. Le catalogue complet vous est accessible.`;
    couleur = "#5b711d";
  } else {
    titre = "Profil découverte";
    message = `Avec ${pourcentage}%, il semble que vous soyez encore en train de définir ce que vous souhaitez. Prenez le temps d'y réfléchir, et revenez quand vous vous sentez prêt.`;
    couleur = "#888";
  }

  container.innerHTML = `
    <div class="quiz-resultat">
      <h3 style="color: ${couleur};">${titre}</h3>
      <p class="quiz-pourcentage" style="color: ${couleur};">${pourcentage}%</p>
      <p>${message}</p>
      ${
        pourcentage >= 50
          ? `<a href="connexion.html" class="btn-inscription">Se connecter</a>`
          : ""
      }
      <button id="btn-recommencer" class="quiz-btn-recommencer">Recommencer le test</button>
    </div>
  `;

  document.getElementById("btn-recommencer").addEventListener("click", () => {
    questionActuelle = 0;
    score = 0;
    container.innerHTML = `<h2>Test de personnalité</h2><button id="btn-start">Lancer le test</button>`;
    document.getElementById("btn-start").addEventListener("click", () => {
      afficherQuestion(0);
    });
  });
}

btnStart.addEventListener("click", () => {
  afficherQuestion(0);
});
