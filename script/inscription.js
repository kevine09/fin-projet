document.addEventListener("DOMContentLoaded", function() {
    console.log("Inscription script loaded");
    // Sélectionner le formulaire
    const form = document.querySelector("form");
    
    // Sélectionner les champs de formulaire par leur ID
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const phoneInput = document.getElementById("phone");

    // Ajouter un événement de soumission au formulaire
    form.addEventListener("submit", function(event) {
        // Initialiser la validité du formulaire à true
        let valid = true;
        // Créer un tableau pour stocker les messages d'erreur
        let messages = [];

        // Validation du champ Nom
        if (nameInput.value.trim() === "") {
            // Si le champ Nom est vide, marquer le formulaire comme invalide
            valid = false;
            // Ajouter un message d'erreur
            messages.push("Le nom est requis.");
        }

        // Validation de l'Email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        // Utiliser une expression régulière pour vérifier le format de l'email
        if (!emailPattern.test(emailInput.value.trim())) {
            // Si le format de l'email est incorrect, marquer le formulaire comme invalide
            valid = false;
            // Ajouter un message d'erreur
            messages.push("L'email n'est pas valide.");
        }

        
        // Validation du Mot de passe
        // Vérifier que le mot de passe a au moins 6 caractères
        if (passwordInput.value.length < 6) {
            // Si le mot de passe est trop court, marquer le formulaire comme invalide
            valid = false;
            // Ajouter un message d'erreur
            messages.push("Le mot de passe doit comporter au moins 6 caractères.");
        }

        // Validation du Téléphone (optionnel)
        // Vérifier que le champ Téléphone n'est pas vide
        if (phoneInput.value.trim() !== "") {
            const phonePattern = /^\+?\d{7,15}$/;
            // Utiliser une expression régulière pour vérifier le format du numéro de téléphone
            if (!phonePattern.test(phoneInput.value.trim())) {
                // Si le format du téléphone est incorrect, marquer le formulaire comme invalide
                valid = false;
                // Ajouter un message d'erreur
                messages.push("Le numéro de téléphone n'est pas valide.");
            }
        }

        // Si le formulaire n'est pas valide, empêcher la soumission et afficher les messages d'erreur
        if (!valid) {
            // Empêcher l'envoi par défaut du formulaire
            event.preventDefault();
            // Afficher les messages d'erreur dans une alerte
            alert(messages.join("\n"));
        }
    });
});
