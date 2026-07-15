const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const formation = formations.find(f => f.id === id);

if (!formation) {

    alert("Formation introuvable");

    window.location.href = "formations.html";

}

document.getElementById("formation").value = formation.titre;
