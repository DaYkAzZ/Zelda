document.addEventListener("DOMContentLoaded", function() {
    // Événement de clic sur l'élément déclencheur
    document.getElementById("statue").addEventListener("click", function() {
        let dialogue = document.getElementById("dialogue");
        
        // Si la bulle de dialogue est visible, la masque, sinon l'affiche
        if (dialogue.style.display === "block") {
            dialogue.style.display = "none";
        } else {
            dialogue.style.display = "block";
        }
    });
});