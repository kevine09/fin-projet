
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

    const signInForm = document.querySelector(".sign-in-form");
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

    const signUpForm = document.querySelector(".sign-up-form");
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

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

    function validatePassword(password) {
        return password.length >= 6;
    }

    function displayMessage(message, type) {
        const messageBox = document.createElement("div");
        messageBox.classList.add("message-box", type);
        messageBox.textContent = message;

        document.body.appendChild(messageBox);

        setTimeout(() => {
            document.body.removeChild(messageBox);
        }, 3000);
    }

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