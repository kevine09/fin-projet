document.addEventListener("DOMContentLoaded", function () {

    window.addEventListener("load", function() {
        const loader = document.getElementById('loader');
        const content = document.getElementById('content');
        loader.style.display = 'none';
        content.style.display = 'block';
    });

const elements = document.querySelectorAll('.fade-in');
  elements.forEach((element) => {
    element.classList.add('loaded');
  });
    // Toggle navigation on small screens
    const navToggle = document.querySelector(".nav-toggle");
    const navWrapper = document.querySelector(".wrapper");

    if (navToggle && navWrapper) {
        navToggle.addEventListener("click", () => {
            navWrapper.classList.toggle("active");
        });
    }

    // Add mouseover effect on food items
    const foodItems = document.querySelectorAll(".food-items img");
    if (foodItems) {
        foodItems.forEach(item => {
            item.addEventListener("mouseover", () => {
                item.style.transform = "scale(1.1)";
                item.style.transition = "transform 0.3s ease-in-out";
            });

            item.addEventListener("mouseout", () => {
                item.style.transform = "scale(1)";
            });
        });
    }

    const scrollToTopButton = document.getElementById('scrollToTop');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });


    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add click event to change content dynamically
    const searchBar = document.getElementById("searchBar");
    if (searchBar) {
        searchBar.addEventListener("input", () => {
            const query = searchBar.value.toLowerCase();
            const foodItems = document.querySelectorAll(".food-items");

            foodItems.forEach(item => {
                const title = item.querySelector("h5").innerText.toLowerCase();
                if (title.includes(query)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    }

    // Add content dynamically
    const newDishButton = document.createElement("button");
    newDishButton.innerText = "Add New Dish";
    newDishButton.classList.add("btn");
    document.querySelector(".menu").appendChild(newDishButton);

    newDishButton.addEventListener("click", () => {
        const newDish = document.createElement("div");
        newDish.classList.add("food-items");

        newDish.innerHTML = `
            <img src="../images/newdish.png" alt="new dish">
            <div class="details">
                <div class="details-sub">
                    <h5>New Dish</h5>
                </div>
                <p>Here is a description of a new dish added dynamically.</p>
                <a href="#" class="btn">Voir la recette</a>
            </div>
        `;

        document.querySelector(".menu").appendChild(newDish);
    });
});