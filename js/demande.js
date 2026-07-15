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

    try{

        await fetch(WEBAPP,{

            method:"POST",

            body:JSON.stringify(data)

        });

        alert("✅ Votre demande a bien été envoyée.\n\nLe CFMAD prendra rapidement contact avec vous.");

        this.reset();

        if(formation){

            document.getElementById("formation").value = formation.titre;

        }

    }

    catch(error){

        alert("Une erreur est survenue.");

    }

    bouton.disabled=false;

    bouton.textContent="📩 Envoyer la demande";

});
