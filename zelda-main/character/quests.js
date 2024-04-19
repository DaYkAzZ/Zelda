document.addEventListener("DOMContentLoaded", function() {
    // Objet représentant le dialogue avec le PNJ
    let dialoguePNJ = {
        questions: [
            "Bonjour, voyageur ! Que puis-je faire pour vous ?",
            "Vous avez entendu parler de la rumeur concernant le trésor perdu ?"
        ],
        reponses: [
            "Je cherche des informations sur la quête principale.",
            "Oui, j'en ai entendu parler. C'est une vieille histoire."
        ],
        etapeActuelle: 0,
        
        // Fonction pour afficher la prochaine étape de question du dialogue
        afficherEtapeQuestionSuivante: function() {
            var dialogueElement = document.getElementById("dialogue-pnj");
            if (this.etapeActuelle < this.questions.length) {
                dialogueElement.textContent = this.questions[this.etapeActuelle];
            } else {
                // Réinitialise le dialogue une fois toutes les étapes terminées
                this.etapeActuelle = 0;
                dialogueElement.style.display = "none"; // Masque la bulle de dialogue
            }
            // Affiche la bulle de dialogue en passant de display: none à display: block
            dialogueElement.style.display = "block";
        },
        
        // Fonction pour afficher la réponse correspondante à la question actuelle
        afficherReponse: function() {
            var dialogueElement = document.getElementById("dialogue-pnj");
            if (this.etapeActuelle < this.reponses.length) {
                dialogueElement.textContent = this.reponses[this.etapeActuelle];
                this.etapeActuelle++; // Passe à la prochaine réponse
            } else {
                this.etapeActuelle = 0;
                dialogueElement.style.display = "none"; // Masque la bulle de dialogue
            }
            // Affiche la bulle de dialogue en passant de display: none à display: block
            dialogueElement.style.display = "block";
        }
    };

    // Fonction pour augmenter la quête principale lorsque le joueur parle au PNJ
    function augmenterQuetePrincipale() {
        let quetePrincipaleElement = document.querySelector('.quests li:nth-of-type(2)'); // Sélectionne le deuxième élément de la liste des quêtes principales (parler aux villageois)
        if (quetePrincipaleElement) { // Vérifie si l'élément a été trouvé
            let villageoisParles = parseInt(quetePrincipaleElement.textContent.match(/\d+/)[0]); // Récupère le nombre de villageois parlés actuel
            if (villageoisParles < 2) { // Vérifie si le joueur n'a pas encore parlé à 2 villageois
                villageoisParles++; // Augmente le nombre de villageois parlés
                quetePrincipaleElement.textContent = "Parler aux villageois (" + villageoisParles + "/2)"; // Met à jour le texte de la quête principale
            }
        }
    }

    // Événement de clic sur le bouton d'interaction avec le PNJ
    document.getElementById("interaction-pnj").addEventListener("click", function() {
        // Si nous sommes à une étape de question, affiche la question suivante
        if (dialoguePNJ.etapeQuestion % 2 === 0) {
            dialoguePNJ.afficherEtapeQuestionSuivante();
        } else { // Sinon, affiche la réponse correspondante à la question
            dialoguePNJ.afficherReponse();
            // Augmente la quête principale en parlant au PNJ
            augmenterQuetePrincipale();
        }
    });
});
