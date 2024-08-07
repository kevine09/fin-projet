// Sélectionner les éléments du DOM
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav ul li a');
const searchInput = document.querySelector('.search-section input');
const accountButton = document.querySelector('.compte-button');
const dropdownContent = document.querySelector('.dropdown-content');
const recipeTitle = document.querySelector('.recette-title');
const prepTime = document.querySelector('.temps-preparation');
const instructionsList = document.querySelector('.instructions-list');

// Ajouter un événement de click sur le bouton de compte
accountButton.addEventListener('click', () => {
  // Afficher ou cacher le contenu du dropdown
  dropdownContent.classList.toggle('show');
});

// Ajouter un événement de keyup sur l'input de recherche
searchInput.addEventListener('keyup', (e) => {
  // Rechercher les recettes correspondantes à la saisie utilisateur
  const searchTerm = e.target.value.toLowerCase();
  const recipes = document.querySelectorAll('.recette-wrapper');
  recipes.forEach((recipe) => {
    const title = recipe.querySelector('.recette-title').textContent.toLowerCase();
    if (title.includes(searchTerm)) {
      recipe.style.display = 'block';
    } else {
      recipe.style.display = 'none';
    }
  });
});

// Ajouter un événement de click sur les liens de navigation
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // Empêcher le comportement par défaut du lien
    e.preventDefault();
    // Ajouter une classe active au lien cliqué
    link.classList.add('active');
    // Retirer la classe active des autres liens
    navLinks.forEach((otherLink) => {
      if (otherLink !== link) {
        otherLink.classList.remove('active');
      }
    });
  });
});

// Ajouter un événement de hover sur le titre de la recette
recipeTitle.addEventListener('mouseover', () => {
  // Ajouter une classe hover au titre de la recette
  recipeTitle.classList.add('hover');
});

recipeTitle.addEventListener('mouseout', () => {
  // Retirer la classe hover au titre de la recette
  recipeTitle.classList.remove('hover');
});

// Ajouter un événement de click sur le temps de préparation
prepTime.addEventListener('click', () => {
  // Afficher ou cacher les instructions de préparation
  instructionsList.classList.toggle('show');
});