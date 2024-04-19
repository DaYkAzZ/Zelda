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
        etapeQuestion: 0, // Compteur d'étapes pour les questions
        etapeReponse: 0, // Compteur d'étapes pour les réponses
        
        // Fonction pour afficher la prochaine étape de question du dialogue
        afficherEtapeQuestionSuivante: function() {
            var dialogueElement = document.getElementById("dialogue-pnj");
            if (this.etapeQuestion < this.questions.length) {
                dialogueElement.textContent = this.questions[this.etapeQuestion];
                this.etapeQuestion++;
            } else {
                // Réinitialise le compteur d'étapes de question une fois toutes les étapes terminées
                this.etapeQuestion = 0;
                dialogueElement.style.display = "none"; // Masque la bulle de dialogue
            }
            // Affiche la bulle de dialogue en passant de display: none à display: block
            dialogueElement.style.display = "block";
        },
        
        // Fonction pour afficher la réponse correspondante à la question actuelle
        afficherReponse: function() {
            var dialogueElement = document.getElementById("dialogue-pnj");
            if (this.etapeReponse < this.reponses.length) {
                dialogueElement.textContent = this.reponses[this.etapeReponse];
                this.etapeReponse++; // Passe à la prochaine réponse
            } else {
                this.etapeReponse = 0;
                dialogueElement.style.display = "none"; // Masque la bulle de dialogue
            }
            // Affiche la bulle de dialogue en passant de display: none à display: block
            dialogueElement.style.display = "block";
        }
    };

    // Événement de clic sur le bouton d'interaction avec le PNJ
    document.getElementById("interaction-pnj").addEventListener("click", function() {
        // Si nous sommes à une étape de question, affiche la question suivante
        if (dialoguePNJ.etapeQuestion % 2 === 0) {
            dialoguePNJ.afficherEtapeQuestionSuivante();
        } else { // Sinon, affiche la réponse correspondante à la question
            dialoguePNJ.afficherReponse();
        }
    });
});
