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

        <p><strong>Durée :</strong> ${f.duree}</p>

        <p><strong>Public :</strong> ${f.public}</p>

        <p>${f.description}</p>

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


const boutons = document.querySelectorAll(".filtres button");

boutons.forEach(btn=>{

btn.addEventListener("click",()=>{

const categorie = btn.dataset.cat;

if(categorie==="Toutes"){

afficherFormations(formations);

return;

}

const resultat = formations.filter(f=>f.categorie===categorie);

afficherFormations(resultat);

});

});


const boutons = document.querySelectorAll(".filtres button");

boutons.forEach(bouton => {

    bouton.addEventListener("click", function(){

        const categorie = this.dataset.filtre;

        if(categorie==="Toutes"){

            afficherFormations(formations);

            return;

        }

        const resultat = formations.filter(f=>f.categorie===categorie);

        afficherFormations(resultat);

    });

});
