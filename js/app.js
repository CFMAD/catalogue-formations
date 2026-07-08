const container = document.getElementById("formationsContainer");

fetch("data/formations.json")
    .then(response => response.json())
    .then(formations => {

        afficherFormations(formations);

        document
            .getElementById("searchInput")
            .addEventListener("keyup", function () {

                const texte = this.value.toLowerCase();

                const resultat = formations.filter(f =>

                    f.titre.toLowerCase().includes(texte) ||
                    f.categorie.toLowerCase().includes(texte) ||
                    f.description.toLowerCase().includes(texte)

                );

                afficherFormations(resultat);

            });

    });

function afficherFormations(formations) {

    container.innerHTML = "";

    formations.forEach(f => {

        const carte = document.createElement("div");

        carte.className = "card";

        carte.innerHTML = `

            <img src="${f.image}" alt="${f.titre}">

            <div class="card-content">

                <h3>${f.titre}</h3>

                <p><strong>Domaine :</strong> ${f.categorie}</p>

                <p><strong>Durée :</strong> ${f.duree}</p>

                <p>${f.description}</p>

                <button onclick="ouvrirFormation(${f.id})">

                    Voir la formation

                </button>

            </div>

        `;

        container.appendChild(carte);

    });

}

function ouvrirFormation(id){

    alert("Version 1.0\n\nLa fiche détaillée de la formation " + id + " sera disponible dans la prochaine version.");

}
