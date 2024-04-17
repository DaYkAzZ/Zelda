document.addEventListener("DOMContentLoaded", function() {
    let inventoryButton = document.getElementById("inventoryButton");
    let inventoryDiv = document.getElementById("inventoryfull");
    let overlay = document.getElementById("overlay");

    document.addEventListener("keydown", function(event) {
        if (event.key === "Tab") {
            event.preventDefault();
            toggleInventory();
        }
    });

    inventoryButton.addEventListener("click", function(event) {
        event.stopPropagation(); // Empêche la propagation pour éviter que le clic soit pris en compte
        toggleInventory();
    });

    
    document.addEventListener("click", function(event) {
        let target = event.target; // L'élément sur lequel le clic a été effectué

        
        if (inventoryDiv.style.display !== "none" && target !== inventoryDiv && target !== inventoryButton) {
            toggleInventory(); // Fermez l'inventaire
        }
    });

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