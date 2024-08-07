document.addEventListener("DOMContentLoaded", () => {
    console.log("Contact script loaded");

    // Ajout d'un événement de soumission au formulaire de contact
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = contactForm.querySelector('input[type="text"]').value.trim();
            const email = contactForm.querySelector('input[type="email"]').value.trim();
            const message = contactForm.querySelector('textarea').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Veuillez remplir tous les champs.');
                return;
            }

            console.log('Nom:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            contactForm.reset();
            alert('Votre message a été envoyé avec succès!');
        });
    }

    // Ajout d'un événement de clic à chaque lien social
    const socialLinks = document.querySelectorAll('.social-icons a');
    socialLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            alert('Fonctionnalité de connexion sociale en cours de développement.');
        });
    });

    // Gestion de l'animation des boutons de connexion et d'inscription
    const container = document.querySelector(".container");
    const signInButton = document.querySelector(".toggle-left .btn.hidden");
    const signUpButton = document.querySelector(".toggle-right .btn");

    if (signInButton) {
        signInButton.addEventListener("click", () => {
            container.classList.remove("active");
        });
    }

    if (signUpButton) {
        signUpButton.addEventListener("click", () => {
            container.classList.add("active");
        });
    }

    // Gestion du formulaire de connexion
    const signInForm = document.querySelector(".sign-in-form");
    if (signInForm) {
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
    }

    // Gestion du formulaire d'inscription
    const signUpForm = document.querySelector(".sign-up-form");
    if (signUpForm) {
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
    }

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
            const response = await fetch(`https://example.com/api/${action}`, {
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
});
