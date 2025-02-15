function toggleMenu() {
    const modal = document.getElementById('modal-menu');
    modal.style.display = 'block';
}

function closeMenu() {
    const modal = document.getElementById('modal-menu');
    modal.style.display = 'none';
}

// Fermeture du menu si on clique en dehors de la fenêtre modale
window.onclick = function(event) {
    const modal = document.getElementById('modal-menu');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
// Assurez-vous d'ajouter ce script dans votre fichier `script.js`
document.addEventListener("DOMContentLoaded", function() {
    // Récupérer le lien de navigation de la page actuelle
    var currentLocation = window.location.href;
    var menuItems = document.querySelectorAll("nav ul li a");

    menuItems.forEach(function(item) {
        // Ajouter la classe 'active' au lien qui correspond à l'URL actuelle
        if (currentLocation.includes(item.href)) {
            item.classList.add("active");
        }
    });
});
// Fonction pour afficher et masquer les formulaires
function toggleForm(formType) {
    // Masquer les deux formulaires au départ
    document.getElementById('accompagnement-form').style.display = 'none';
    document.getElementById('formation-form').style.display = 'none';

    // Afficher le formulaire correspondant à l'option choisie
    if (formType === 'accompagnement') {
        document.getElementById('accompagnement-form').style.display = 'block';
    } else if (formType === 'formation') {
        document.getElementById('formation-form').style.display = 'block';
    }
}

// Assurez-vous que la fonction toggleForm est définie après que le DOM est entièrement chargé
window.onload = function() {
    // Initialement, cacher les deux formulaires
    document.getElementById('accompagnement-form').style.display = 'none';
    document.getElementById('formation-form').style.display = 'none';
};
    // Sélectionner toutes les images du diaporama
    const images = document.querySelectorAll('#diaporama-images img');
    let currentIndex = -1;

    // Fonction pour afficher l'image suivante
    function showNextImage() {
        if (currentIndex >= 0) {
            images[currentIndex].classList.remove('active');
        }

        // Passer à l'image suivante (cycle à travers les indices)
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    // Afficher la première image immédiatement
    showNextImage();

    // Passer à l'image suivante toutes les 3 secondes
    setInterval(showNextImage, 3000); 