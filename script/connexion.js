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


document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const signInButton = document.querySelector(".toggle-left .btn.hidden");
    const signUpButton = document.querySelector(".toggle-right .btn");

    signInButton.addEventListener("click", () => {
        container.classList.remove("active");
    });

    signUpButton.addEventListener("click", () => {
        container.classList.add("active");
    });

    // Validation du formulaire de connexion
    const signInForm = document.querySelector(".sign-in form");
    signInForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = signInForm.querySelector("input[type='email']").value;
        const password = signInForm.querySelector("input[type='password']").value;

        if (validateEmail(email) && validatePassword(password)) {
            sendFormData('login', { email, password })
                .then(response => displayMessage(response.message, "success"))
                .catch(error => displayMessage(error.message, "error"));
        } else {
            displayMessage("Email ou mot de passe invalide", "error");
        }
    });

    // Validation du formulaire d'inscription
    const signUpForm = document.querySelector(".sign-up form");
    signUpForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = signUpForm.querySelector("input[type='text']").value;
        const email = signUpForm.querySelector("input[type='email']").value;
        const password = signUpForm.querySelector("input[type='password']").value;

        if (name && validateEmail(email) && validatePassword(password)) {
            sendFormData('register', { name, email, password })
                .then(response => displayMessage(response.message, "success"))
                .catch(error => displayMessage(error.message, "error"));
        } else {
            displayMessage("Veuillez remplir tous les champs correctement", "error");
        }
    });

    // Fonction de validation d'email
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

    // Fonction de validation de mot de passe
    function validatePassword(password) {
        return password.length >= 6;
    }

    // Fonction d'affichage de message
    function displayMessage(message, type) {
        const messageBox = document.createElement("div");
        messageBox.classList.add("message-box", type);
        messageBox.textContent = message;

        document.body.appendChild(messageBox);

        setTimeout(() => {
            document.body.removeChild(messageBox);
        }, 3000);
    }

    // Fonction d'envoi des données du formulaire au serveur
    async function sendFormData(action, data) {
        try {
            const response = await fetch('https,//example.com/api/${action}',
                {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Une erreur s\'est produite lors de la communication avec le serveur.');
            }

            return await response.json();
        } catch (error) {
            throw new Error(error.message || 'Une erreur inconnue s\'est produite.');
        }
    }
})