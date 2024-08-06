document.addEventListener("DOMContentLoaded", function() {
    console.log("Contact script loaded");
    
    // Ajouter un événement de soumission au formulaire
    contactForm.addEventListener('submit', function(event) {
        // Empêcher l'envoi par défaut du formulaire
        event.preventDefault();

        // Récupérer les valeurs des champs de formulaire
        const name = contactForm.querySelector('input[type="text"]').value.trim();
        const email = contactForm.querySelector('input[type="email"]').value.trim();
        const message = contactForm.querySelector('textarea').value.trim();

        
        // Vérifier que tous les champs sont remplis
        if (name === '' || email === '' || message === '') {
            // Afficher une alerte si un ou plusieurs champs sont vides
            alert('Veuillez remplir tous les champs.');
            return;
        }

        // Afficher les valeurs des champs dans la console (pour le débogage)
        console.log('Nom:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // Réinitialiser le formulaire après l'envoi
        contactForm.reset();
        // Afficher un message de succès
        alert('Votre message a été envoyé avec succès!');
    });

    // Sélectionner tous les liens sociaux
    const socialLinks = document.querySelectorAll('.social-icons a');

    // Ajouter un événement de clic à chaque lien social
    socialLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Empêcher l'action par défaut du lien
            event.preventDefault();
            // Afficher un message d'alerte pour indiquer que la fonctionnalité est en cours de développement
            alert('Fonctionnalité de connexion sociale en cours de développement.');
       });
    });
});
