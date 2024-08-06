document.getElementById('searchBar').addEventListener('keyup', function() {
    const searchTerm = this.value.toLowerCase();
    const recipes = document.querySelectorAll('#recipeList .recipe');
  
    recipes.forEach(function(recipe) {
      const text = recipe.textContent.toLowerCase();
      if (text.includes(searchTerm)) {
        recipe.style.display = '';
      } else {
        recipe.style.display = 'none';
      }
    });
  });
  