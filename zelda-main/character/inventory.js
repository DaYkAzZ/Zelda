document.addEventListener("DOMContentLoaded", function() {
    var inventoryButton = document.getElementById("inventoryButton");
    var inventoryDiv = document.getElementById("inventoryfull");
    var overlay = document.getElementById("overlay");

    // Ajoutez un écouteur d'événements pour détecter les pressions de touche
    document.addEventListener("keydown", function(event) {
        // Vérifiez si la touche "Tab" a été pressée
        if (event.key === "Tab") {
            // Empêche le comportement par défaut de la touche "Tab" (navigation par défaut)
            event.preventDefault();
            toggleInventory();
        }
    });

    // Ajoutez un écouteur d'événements pour détecter le clic sur le bouton
    inventoryButton.addEventListener("click", function(event) {
        event.stopPropagation(); // Empêche la propagation de l'événement pour éviter que le clic ne soit pris en compte par le document
        toggleInventory();
    });

    // Ajoutez un écouteur d'événements pour détecter les clics sur l'ensemble du document
    document.addEventListener("click", function(event) {
        var target = event.target; // L'élément sur lequel le clic a été effectué

        // Vérifiez si l'inventaire est affiché et si l'élément cliqué n'est ni l'inventaire ni son bouton de contrôle
        if (inventoryDiv.style.display !== "none" && target !== inventoryDiv && target !== inventoryButton) {
            toggleInventory(); // Fermez l'inventaire
        }
    });

    // Fonction pour afficher ou masquer l'inventaire et l'overlay
    function toggleInventory() {
        if (inventoryDiv.style.display === "none") {
            inventoryDiv.style.display = "block";
            overlay.style.display = "block";
        } else {
            inventoryDiv.style.display = "none";
            overlay.style.display = "none";
        }
    }
});