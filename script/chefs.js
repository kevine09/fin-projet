document.addEventListener("DOMContentLoaded", () => {
    // Évènement "Click" sur l'image des chefs
    document.querySelectorAll('.chef-info img').forEach(img => {
        img.addEventListener('click', () => {
            const specialty = img.getAttribute('data-specialty');
            const chefSpecialtyElement = img.parentElement.querySelector('.chef-specialty');
            
            // Obtenir une couleur aléatoire
            const randomColor = getRandomColor();
            
            chefSpecialtyElement.innerText = `${specialty}`;
            chefSpecialtyElement.style.display = 'block';
            chefSpecialtyElement.style.backgroundColor = randomColor;
            chefSpecialtyElement.style.color = adjustTextColor(randomColor);
            chefSpecialtyElement.style.padding = '10px'; 
            chefSpecialtyElement.style.borderRadius = '15px'; 

            // Changer le background color de la page
            document.body.style.backgroundColor = randomColor;

            // Masquer le message après 4s
            setTimeout(() => {
                chefSpecialtyElement.style.display = 'none';
            }, 4000);
        });
    });

    // Fonction pour une couleur aléatoire
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Fonction pour ajuster la couleur du texte en fonction de la couleur de fond
    function adjustTextColor(bgColor) {
        // Convertir la couleur hex en RGB
        let r = parseInt(bgColor.substr(1, 2), 16);
        let g = parseInt(bgColor.substr(3, 2), 16);
        let b = parseInt(bgColor.substr(5, 2), 16);

        // Calculer la luminance
        let luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

        // Retourner blanc ou noir selon la luminance
        return luminance > 128 ? '#000000' : '#FFFFFF';
    }

    // Évènement avec la souris sur les noms des chefs
    document.querySelectorAll('.chef-info h2').forEach(h2 => {
        h2.addEventListener('mouseover', () => {
            h2.style.color = 'red';
        });

        h2.addEventListener('mouseout', () => {
            h2.style.color = '';
        });
    });
});
