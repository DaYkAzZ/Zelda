document.addEventListener("DOMContentLoaded", function() {
    // Sélection des boutons
    const startGameBtn = document.getElementById("startGameBtn");
    const settingsBtn = document.getElementById("settingsBtn");
    const quitBtn = document.getElementById("quitBtn");

    // Ajout des écouteurs d'événements
    startGameBtn.addEventListener("click", startGame);
    settingsBtn.addEventListener("click", goToSettings);
    quitBtn.addEventListener("click", quitGame);

    // Fonction pour démarrer le jeu
    function startGame() {
        // Rediriger vers la page de jeu
        window.location.href = "index.html";
    }

    // Fonction pour aller aux paramètres
    function goToSettings() {
        // Rediriger vers la page des paramètres
        window.location.href = "settings.html";
    }

    // Fonction pour quitter le jeu
    function quitGame() {
        // Fermer la fenêtre du navigateur
        window.close();
    }
});
