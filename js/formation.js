const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const formation = formations.find(f => f.id === id);

document.getElementById("titre").textContent = formation.titre;
  document.getElementById("titre2").textContent = formation.titre;
  document.getElementById("categorie2").textContent = formation.categorie;

document.getElementById("categorie").textContent = formation.categorie;

document.getElementById("presentation").textContent = formation.presentation;

document.getElementById("objectifs").innerHTML =
formation.objectifs.replace(/\n/g,"<br>");

document.getElementById("formateur").textContent =
formation.formateur;

document.getElementById("duree").textContent =
formation.duree;

document.getElementById("public").textContent =
formation.public;

document.getElementById("participants").textContent =
formation.participants;

document.getElementById("tarif").textContent =
formation.tarif;




document.getElementById("objectifs").innerHTML = formation.objectifs.replace(/\n/g,"<br>");

document.getElementById("duree").textContent = formation.duree;

document.getElementById("public").textContent = formation.public;

document.getElementById("contenu").innerHTML =
formation.contenu ? formation.contenu.replace(/\n/g,"<br>") : "";

document.getElementById("methode").textContent =
formation.methode || "";

document.getElementById("participants").textContent =
formation.participants || "";

document.getElementById("lieu").textContent =
formation.lieu || "";

document.getElementById("prix").textContent =
formation.prix || "";
