document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector('.comment-form')
    const successMessage = document.querySelector("#success_msg");
    const formError = document.querySelector("#error_msg");

     // Expressions régulières pour validation
     const nameRegex = /^[a-zA-Z\s]+$/; // Permet uniquement les lettres et les espaces
     const commentRegex = /^[a-zA-Z\s]+$/; // Permet uniquement les lettres et les espaces

    // Ajouter un événement de soumission au formulaire

    contactForm.addEventListener('submit', function(event) {
        // Eviter le rafraichissement de la page
        event.preventDefault();

        // Récupérer les valeurs des champs de formulaire
        const firstName = contactForm.querySelector('input[name="first-name"]').value.trim();
        const lastName = contactForm.querySelector('input[name="last-name"]').value.trim();
        const comment = contactForm.querySelector('textarea[name="comment"]').value.trim();

        // Vérifier que tous les champs sont remplis
      
        if (firstName === '' || lastName === '' || comment === '') {
            // Afficher le message d'erreur global
            formError.style.display = 'block';
            return;
        }
         // Réinitialiser les messages d'erreur 
         formError.style.display = 'none';

          // Vérifier le format des champs avec les regex
          if (!nameRegex.test(firstName)) {
            formError.textContent = 'Le prénom doit contenir uniquement des lettres.';
            formError.style.display = 'block';
            return;
        }

        if (!nameRegex.test(lastName)) {
            formError.textContent = 'Le nom doit contenir uniquement des lettres.';
            formError.style.display = 'block';
            return;
        }

        if (!commentRegex.test(comment)) {
            formError.textContent = 'Le commentaire doit contenir uniquement des lettres.';
            formError.style.display = 'block';
            return;
        }
    
        // Afficher les valeurs des champs dans la console (pour le débogage)
        console.log('Prénom:', firstName);
        console.log('Nom:', lastName);
        console.log('Commentaire:', comment);

        // Réinitialiser le formulaire après l'envoi
        contactForm.reset();

        // Afficher un message de succès
        successMessage.style.display = 'block';

        // Masquer le message après quelques secondes
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
        
    });
});