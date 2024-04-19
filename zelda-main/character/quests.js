document.addEventListener("DOMContentLoaded", function() {
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
        bulleVisible: false, // Ajout de la letiable pour suivre l'état de la bulle de dialogue
        
        afficherQuestionAleatoire: function() {
            let dialogueElement = document.getElementById("dialogue-pnj");
            let index = Math.floor(Math.random() * this.questions.length);
            dialogueElement.textContent = this.questions[index];
            dialogueElement.style.display = "block"; // Affiche la bulle de dialogue
            this.bulleVisible = true; // Met à jour l'état de la bulle de dialogue
        },
        
        afficherReponseAleatoire: function() {
            let dialogueElement = document.getElementById("dialogue-pnj");
            let index = Math.floor(Math.random() * this.reponses.length);
            dialogueElement.textContent = this.reponses[index];
            dialogueElement.style.display = "block"; // Affiche la bulle de dialogue
            this.bulleVisible = true; // Met à jour l'état de la bulle de dialogue
        }
    };

    function augmenterQuetePrincipale() {
        let quetePrincipaleElement = document.querySelector('.quests li:nth-of-type(2)');
        if (quetePrincipaleElement) {
            let villageoisParles = parseInt(quetePrincipaleElement.textContent.match(/\d+/)[0]);
            if (villageoisParles < 2) {
                villageoisParles++;
                quetePrincipaleElement.textContent = "Parler aux villageois (" + villageoisParles + "/2)";
            }
        }
    }

    document.getElementById("interaction-pnj").addEventListener("click", function() {
        if (!dialoguePNJ.bulleVisible) { // Vérifie si la bulle de dialogue est cachée
            if (dialoguePNJ.etapeActuelle % 2 === 0) {
                dialoguePNJ.afficherQuestionAleatoire();
            } else {
                dialoguePNJ.afficherReponseAleatoire();
            }
            dialoguePNJ.etapeActuelle++;
        } else {
            document.getElementById("dialogue-pnj").style.display = "none"; // Masque la bulle de dialogue
            dialoguePNJ.bulleVisible = false; // Met à jour l'état de la bulle de dialogue
            augmenterQuetePrincipale();
        }
    });
});