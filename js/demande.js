const WEBAPP =
"https://script.google.com/macros/s/AKfycbzFmL2_KG2vLQSjvpkeeLVCmqgS5GtkP65XO1PtBInMoiTbZdyeIY2rL8SK_7ck5HNzJQ/exec";

const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const formation = formations.find(f => f.id === id);

if (formation) {

    document.getElementById("formation").value = formation.titre;

}

document.getElementById("demandeForm").addEventListener("submit", async function(e){

    e.preventDefault();

    const bouton = this.querySelector("button");

    bouton.disabled = true;

    bouton.textContent = "Envoi en cours...";

    const data = {

        formation: document.getElementById("formation").value,

        nom: document.getElementById("nom").value,

        prenom: document.getElementById("prenom").value,

        organisme: document.getElementById("organisme").value,

        email: document.getElementById("email").value,

        telephone: document.getElementById("telephone").value,

        periode: document.getElementById("dates").value,

        message: document.getElementById("message").value

    };

try {

    const formData = new URLSearchParams();

    formData.append("formation", data.formation);
    formData.append("nom", data.nom);
    formData.append("prenom", data.prenom);
    formData.append("organisme", data.organisme);
    formData.append("email", data.email);
    formData.append("telephone", data.telephone);
    formData.append("periode", data.periode);
    formData.append("message", data.message);

    const reponse = await fetch(WEBAPP, {
        method: "POST",
        body: formData
    });

    if (!reponse.ok) {
        throw new Error("Erreur serveur");
    }

alert(
"✅ Votre demande a bien été enregistrée.\n\n" +
"Nous reprendrons contact avec vous dans les meilleurs délais."
);

window.location.href = "formation.html?id=" + formation.id;

}
catch (erreur) {

    console.error(erreur);

    alert("Une erreur est survenue lors de l'envoi.");

}
finally {

    bouton.disabled = false;

    bouton.textContent = "📩 Envoyer la demande";

}

});
