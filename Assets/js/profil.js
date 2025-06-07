//Nous allons cibler les contenus du catalogue
const container = document.querySelector(".catalogue");

//Boucle pour injecter les profils dans le container 

// tableau d’objets profils
const profils = [
   {
    nom: "Marie",
    prenom: "Dupont",
    age: 58,
    genre: "femme",
    ville: "Lyon",
    profession: "Architecte",
    centresInteret: ["Voyages", "Peinture", "Lecture"],
    image: "assets/image/couple.jpg",
    alt:"Couple",
   }, 
   {
    nom: "Pierre",
    prenom: "Martin",
    age: 62,
    genre: "homme",
    ville: "Marseille",
    profession: "Retraité",
    centresInteret: ["Jardinage", "Échecs"],
    image: "assets/image/couple.jpg",
    alt:"Couple",
  },
   {
    nom: "Sophie",
    prenom: "Bertrand",
    age: 55,
    genre: "femme",
    ville: "Toulouse",
    profession: "Infirmière",
    centresInteret: ["Yoga", "Cuisine végétarienne"],
    image: "assets/image/couple.jpg",
    alt:"Couple",
  },
  {
    nom: "Jean",
    prenom: "Leroy",
    age: 67,
    genre: "homme",
    ville: "Paris",
    profession: "Consultant",
    centresInteret: ["Photographie", "Randonnée"],
    image: "assets/image/couple.jpg",
    alt:"Couple",
  },
  {
    nom: "Jean",
    prenom: "Leroy",
    age: 67,
    genre: "homme",
    ville: "Paris",
    profession: "Consultant",
    centresInteret: ["Photographie", "Randonnée"],
    image: "assets/image/couple.jpg",
    alt:"Couple",
  },
  {
    nom: "Jean",
    prenom: "Leroy",
    age: 67,
    genre: "homme",
    ville: "Paris",
    profession: "Consultant",
    centresInteret: ["Photographie", "Randonnée"],
    image: "assets/image/couple.jpg",
    alt:"Couple",
  }

];
profils.forEach(profil=> {
    const carte = document.createElement("div");
    carte.classList.add("carte");
    carte.innerHTML = `
    <img src="${profil.image}" alt="${profil.alt}" />
    <h4>${profil.prenom} ${profil.nom}</h4>
    <p><strong>Âge :</strong> ${profil.age} ans</p>
    <p><strong>Ville :</strong> ${profil.ville}</p>
    <p><strong>Profession :</strong> ${profil.profession}</p>
    <p><strong>Centres d’intérêt :</strong> ${profil.centresInteret.join(", ")}</p>
  `;
      container.appendChild(carte);
  });

  // Filtrer le tableau pour garder uniquement les +50 ans
const profilsPlus50 = profils.filter(profil => profil.age > 50);

// Filtrer le genre 
const femmesPlus50 = profils.filter(profil => 
    profil.genre === "femme" && profil.age > 50
  );
  