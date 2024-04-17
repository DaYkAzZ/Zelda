// Ajoutez un écouteur d'événements pour le mouvement de la souris
document.addEventListener('mousemove', function(event) {
    // Récupérez les coordonnées de la souris par rapport à la fenêtre du navigateur
    var x = event.clientX;
    var y = event.clientY;

    // Affichez les coordonnées de la souris dans la console du navigateur
    console.log('Coordonnées de la souris - X : ' + x + ', Y : ' + y);
});
