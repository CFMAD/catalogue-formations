console.log("app.js chargé");
console.log(formations);



const container = document.getElementById("formationsContainer");

afficherFormations(formations);

function afficherFormations(liste) {

    container.innerHTML = "";

    liste.forEach(f => {

        const carte = document.createElement("div");

        carte.className = "card";

carte.innerHTML = `

    <img src="${f.image}" alt="${f.titre}">

    <div class="card-content">

        <div class="badge">${f.categorie}</div>

        <h2>${f.titre}</h2>

        <p>${f.presentation}</p>

        <button onclick="voirFormation(${f.id})">
            Voir la formation
        </button>

    </div>

`;

        container.appendChild(carte);

    });

}

function ouvrirFormation(id) {

    window.location.href = "formation.html?id=" + id;

}

function voirFormation(id){

    window.location.href = "formation.html?id=" + id;

}

const recherche = document.getElementById("searchInput");

recherche.addEventListener("keyup", rechercherFormations);

function rechercherFormations(){

    const texte = recherche.value.toLowerCase();

    const resultat = formations.filter(f =>

        f.titre.toLowerCase().includes(texte) ||

        f.categorie.toLowerCase().includes(texte) ||

        f.description.toLowerCase().includes(texte) ||

        f.public.toLowerCase().includes(texte)

    );

    afficherFormations(resultat);

}


const boutons = document.querySelectorAll(".filtres button");

boutons.forEach(bouton => {

    bouton.addEventListener("click", function () {

        // Enlève la classe "actif" sur tous les boutons
        boutons.forEach(b => b.classList.remove("actif"));

        // Ajoute la classe "actif" sur le bouton cliqué
        this.classList.add("actif");

        const categorie = this.dataset.filtre;

        if (categorie === "Toutes") {

            afficherFormations(formations);
            return;

        }

        const resultat = formations.filter(f => f.categorie === categorie);

        afficherFormations(resultat);

    });

});
