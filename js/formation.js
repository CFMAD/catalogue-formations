const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const formation = formations.find(f => f.id === id);

document.getElementById("titre").textContent = formation.titre;

document.getElementById("categorie").textContent = formation.categorie;

document.getElementById("description").textContent = formation.description;

document.getElementById("objectifs").innerHTML = formation.objectifs.replace(/\n/g,"<br>");

document.getElementById("duree").textContent = formation.duree;

document.getElementById("public").textContent = formation.public;
