const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const formation = formations.find(f => f.id === id);

if (!formation) {

    document.body.innerHTML = "<h1>Formation introuvable</h1>";

    throw new Error("Formation introuvable");

}

document.getElementById("titre").textContent = formation.titre;

document.getElementById("categorie").textContent = formation.categorie;

document.getElementById("imageFormation").src = formation.image;
document.getElementById("imageFormation").alt = formation.titre;

document.getElementById("presentation").textContent = formation.presentation;

document.getElementById("objectifs").innerHTML =
    formation.objectifs.replace(/\n/g,"<br>");

document.getElementById("formateur").textContent =
    formation.formateur;

document.getElementById("public").textContent =
    formation.public;

document.getElementById("participants").textContent =
    formation.participants;

document.getElementById("tarif").textContent =
    formation.tarif;
document.getElementById("date").textContent =
    formation.date;

document.getElementById("btnDemande").onclick = function () {

    window.location.href = "demande.html?id=" + formation.id;

};
