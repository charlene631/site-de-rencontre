const profils = [
  {
    nom: "Dupont",
    prenom: "Marie",
    age: 58,
    genre: "femme",
    ville: "Lyon",
    profession: "Architecte",
    centresInteret: ["Voyages", "Peinture", "Lecture"],
    image: "../image/couple.jpg",
    alt: "Photo de profil",
  },
  {
    nom: "Martin",
    prenom: "Pierre",
    age: 62,
    genre: "homme",
    ville: "Marseille",
    profession: "Retraité",
    centresInteret: ["Jardinage", "Échecs"],
    image: "../image/couple.jpg",
    alt: "Photo de profil",
  },
  {
    nom: "Bertrand",
    prenom: "Sophie",
    age: 55,
    genre: "femme",
    ville: "Toulouse",
    profession: "Infirmière",
    centresInteret: ["Yoga", "Cuisine végétarienne"],
    image: "../image/couple.jpg",
    alt: "Photo de profil",
  },
  {
    nom: "Leroy",
    prenom: "Jean",
    age: 67,
    genre: "homme",
    ville: "Paris",
    profession: "Consultant",
    centresInteret: ["Photographie", "Randonnée"],
    image: "../image/couple.jpg",
    alt: "Photo de profil",
  },
  {
    nom: "Moreau",
    prenom: "Isabelle",
    age: 53,
    genre: "femme",
    ville: "Bordeaux",
    profession: "Professeure",
    centresInteret: ["Théâtre", "Cuisine"],
    image: "../image/couple.jpg",
    alt: "Photo de profil",
  },
  {
    nom: "Bernard",
    prenom: "Alain",
    age: 60,
    genre: "homme",
    ville: "Lyon",
    profession: "Médecin",
    centresInteret: ["Musique", "Cyclisme"],
    image: "../image/couple.jpg",
    alt: "Photo de profil",
  },
  {
    nom: "Lafont",
    prenom: "Nathalie",
    age: 56,
    genre: "femme",
    ville: "Bayonne",
    profession: "Commerçante",
    centresInteret: ["Surf", "Pelote basque", "Cuisine"],
    image: "../image/couple.jpg",
    alt: "Photo de profil",
  },
  {
    nom: "Etcheverry",
    prenom: "Michel",
    age: 63,
    genre: "homme",
    ville: "Biarritz",
    profession: "Retraité",
    centresInteret: ["Golf", "Randonnée", "Vin"],
    image: "../image/couple.jpg",
    alt: "Photo de profil",
  },
  {
    nom: "Dumas",
    prenom: "Caroline",
    age: 51,
    genre: "femme",
    ville: "Anglet",
    profession: "Kinésithérapeute",
    centresInteret: ["Yoga", "Natation", "Lecture"],
    image: "../image/couple.jpg",
    alt: "Photo de profil",
  },
  {
    nom: "Larralde",
    prenom: "Patrick",
    age: 59,
    genre: "homme",
    ville: "Capbreton",
    profession: "Pêcheur",
    centresInteret: ["Surf", "Nature", "Photographie"],
    image: "../image/couple.jpg",
    alt: "Photo de profil",
  },
  {
    nom: "Rousseau",
    prenom: "Sylvie",
    age: 64,
    genre: "femme",
    ville: "Capbreton",
    profession: "Retraitée",
    centresInteret: ["Peinture", "Jardinage", "Voyages"],
    image: "../image/couple.jpg",
    alt: "Photo de profil",
  },
  {
    nom: "Cazaux",
    prenom: "Luc",
    age: 57,
    genre: "homme",
    ville: "Bayonne",
    profession: "Artisan",
    centresInteret: ["Rugby", "Randonnée", "Cuisine"],
    image: "../image/couple.jpg",
    alt: "Photo de profil",
  },
  {
    nom: "Perez",
    prenom: "Anne",
    age: 52,
    genre: "femme",
    ville: "Biarritz",
    profession: "Commerciale",
    centresInteret: ["Danse", "Voyages", "Théâtre"],
    image: "../image/couple.jpg",
    alt: "Photo de profil",
  },
  {
    nom: "Girard",
    prenom: "François",
    age: 68,
    genre: "homme",
    ville: "Toulouse",
    profession: "Retraité",
    centresInteret: ["Photographie", "Échecs", "Lecture"],
    image: "../image/couple.jpg",
    alt: "Photo de profil",
  },
  {
    nom: "Lambert",
    prenom: "Christine",
    age: 54,
    genre: "femme",
    ville: "Paris",
    profession: "Avocate",
    centresInteret: ["Opéra", "Gastronomie", "Voyages"],
    image: "../image/couple.jpg",
    alt: "Photo de profil",
  },
  {
    nom: "Faure",
    prenom: "Bruno",
    age: 61,
    genre: "homme",
    ville: "Bordeaux",
    profession: "Viticulteur",
    centresInteret: ["Vin", "Cyclisme", "Jazz"],
    image: "../image/couple.jpg",
    alt: "Photo de profil",
  },
  {
    nom: "Petit",
    prenom: "Martine",
    age: 66,
    genre: "femme",
    ville: "Marseille",
    profession: "Retraitée",
    centresInteret: ["Plongée", "Cuisine", "Pétanque"],
    image: "../image/couple.jpg",
    alt: "Photo de profil",
  },
  {
    nom: "Nguyen",
    prenom: "Éric",
    age: 50,
    genre: "homme",
    ville: "Anglet",
    profession: "Ingénieur",
    centresInteret: ["Surf", "Musique", "Randonnée"],
    image: "../image/couple.jpg",
    alt: "Photo de profil",
  },
];

function afficherProfils(liste) {
  const container = document.querySelector(".catalogue");
  container.innerHTML = "";

  if (liste.length === 0) {
    container.innerHTML = "<p>Aucun profil ne correspond à votre recherche.</p>";
    return;
  }

  liste.forEach((profil) => {
    const carte = document.createElement("div");
    carte.classList.add("carte");
    carte.innerHTML = `
  <img src="${profil.image}" alt="${profil.alt}" />
  <div class="carte-infos">
    <p class="carte-nom">${profil.prenom}, ${profil.age} ans</p>
    <p class="carte-meta">${profil.profession} · ${profil.ville}</p>
    <div class="carte-tags">
      ${profil.centresInteret.map(i => `<span class="carte-tag">${i}</span>`).join("")}
    </div>
  </div>
`;
    container.appendChild(carte);
  });
}

function filtrer() {
  const genreSelectionne = document.getElementById("filtre-genre").value;
  const villeSelectionnee = document.getElementById("filtre-ville").value;

  const resultat = profils.filter((profil) => {
    const correspondGenre = genreSelectionne === "tous" || profil.genre === genreSelectionne;
    const correspondVille = villeSelectionnee === "toutes" || profil.ville === villeSelectionnee;
    return correspondGenre && correspondVille;
  });

  afficherProfils(resultat);
}

document.getElementById("filtre-genre").addEventListener("change", filtrer);
document.getElementById("filtre-ville").addEventListener("change", filtrer);

afficherProfils(profils);