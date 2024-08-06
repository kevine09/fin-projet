document.addEventListener('DOMContentLoaded', function() {
    const signUpButton = document.querySelector('.toggle-left .btn');
    const signInButton = document.querySelector('.toggle-right .btn');
    // Sélectionner le conteneur principal qui contient les formulaires
    const container = document.querySelector('.container');

    // Ajouter un événement de clic au bouton d'inscription
    signUpButton.addEventListener('click', () => {
        // Ajouter la classe 'active' au conteneur pour afficher le formulaire d'inscription
        container.classList.add('active');
    });

    // Ajouter un événement de clic au bouton de connexion
    signInButton.addEventListener('click', () => {
        // Supprimer la classe 'active' du conteneur pour afficher le formulaire de connexion
        container.classList.remove('active');
    });

    // Sélectionner les formulaires d'inscription et de connexion
    const signUpForm = document.querySelector('.sign-up form');
    const signInForm = document.querySelector('.sign-in form');

    // Ajouter un événement de soumission au formulaire d'inscription
    signUpForm.addEventListener('submit', function(event) {
        // Empêcher l'envoi du formulaire
        event.preventDefault();

        // Obtenir les valeurs des champs du formulaire d'inscription
        const name = signUpForm.querySelector('input[type="text"]').value.trim();
        const email = signUpForm.querySelector('input[type="email"]').value.trim();
        const password = signUpForm.querySelector('input[type="password"]').value.trim();

        // Vérifier si tous les champs sont remplis
        if (name === '' || email === '' || password === '') {
            // Afficher une alerte si des champs sont vides
            alert('Veuillez remplir tous les champs.');
            return;
        }

        // Afficher les valeurs dans la console pour le débogage
        console.log('Nom:', name);
        console.log('Email:', email);
        console.log('Mot de passe:', password);

        // Réinitialiser le formulaire après soumission
        signUpForm.reset();
    });

    // Ajouter un événement de soumission au formulaire de connexion
    signInForm.addEventListener('submit', function(event) {
        // Empêcher l'envoi du formulaire
        event.preventDefault();

        // Obtenir les valeurs des champs du formulaire de connexion
        const email = signInForm.querySelector('input[type="email"]').value.trim();
        const password = signInForm.querySelector('input[type="password"]').value.trim();

        // Vérifier si tous les champs sont remplis
        if (email === '' || password === '') {
            // Afficher une alerte si des champs sont vides
            alert('Veuillez remplir tous les champs.');
            return;
        }

        // Afficher les valeurs dans la console pour le débogage
        console.log('Email:', email);
        console.log('Mot de passe:', password);

        // Réinitialiser le formulaire après soumission
        signInForm.reset();
    });
});


