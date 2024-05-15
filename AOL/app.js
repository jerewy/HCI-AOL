
// Nav Link bottom active page
document.addEventListener('DOMContentLoaded', function() {
    const currentPagePath = window.location.pathname;
    const currentPageFilename = currentPagePath.split('/').pop();
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        // Extract the filename from the link's href
        const linkPath = link.href.split('/').pop();

        // Check if the link's href matches the current page filename
        if (linkPath === currentPageFilename) {
            // Add your desired class to the link
            link.classList.add('active');
        }
    });
});
// End of nav link bottom active page

// Home link 6 recipes
function redirectToRecipe(recipeURL) {
    window.location.href = recipeURL;
}

// Logo Navigation
function redirectToHome(){
    window.location.href = "home.html";
}


// BMI Calculator
$(function() {
    let paddingToggle = false; // Variable to track padding state

    $("#toggleThis").click(function(){ 
        $("#content").slideToggle("slow");

        // Toggle padding state
        paddingToggle = !paddingToggle;
        
        // Set padding-bottom based on state
        if (paddingToggle) {
            $("#toggleHeader").html("Why is BMI important to know? &#x25B4;"); // Change arrow to upward-pointing triangle
        } else {
            $("#toggleHeader").html("Why is BMI important to know? &#x25BE;"); // Change arrow to downward-pointing triangle
        }
    });
});

$(function() {
    let paddingToggle = false; // Variable to track padding state

    $("#toggleThis2").click(function(){ 
        $("#content2").slideToggle("slow");

        // Toggle padding state
        paddingToggle = !paddingToggle;
        
        // Set padding-bottom based on state
        if (paddingToggle) {
            $("#toggleThis2").css("padding-bottom", "0px"); // Set padding-bottom to 0px
            $("#toggleHeader2").html("What are the limits of BMI? &#x25B4;"); // Change arrow to upward-pointing triangle
        } else {
            $("#toggleThis2").css("padding-bottom", "50px"); // Set padding-bottom to its original value
            $("#toggleHeader2").html("What are the limits of BMI? &#x25BE;"); // Change arrow to downward-pointing triangle
        }
    });
});

window.onload = () => {
    const button = document.querySelector('#bmi-button');
    button.addEventListener('click', calculateBmi);
}

function calculateBmi() {
    const heightInput = document.querySelector('#Height');
    const weightInput = document.querySelector('#weight');
    const result = document.querySelector('#result');

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (isNaN(height) || height <= 0) {
        result.innerText = "Please provide a valid height (greater than 0).";
        return;
    }

    if (isNaN(weight) || weight <= 0) {
        result.innerText = "Please provide a valid weight (greater than 0).";
        return;
    }

    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

    let bmiCategory;
    if (bmi < 18.5) {
        bmiCategory = "Underweight";
    } else if (bmi < 24.9) {
        bmiCategory = "Normal Weight";
    } else if (bmi < 29.9) {
        bmiCategory = "Overweight";
    } else if (bmi < 34.9) {
        bmiCategory = "Obesity (Class I)";
    } else if (bmi < 39.9) {
        bmiCategory = "Obesity (Class II)";
    } else {
        bmiCategory = "Extreme Obesity";
    }

    result.innerText = `Your BMI: ${bmi}\n ${bmiCategory}`;
}
// End of javascript for bmi calculator page


// Js animation
// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function handleScroll() {
    const contentSections = document.querySelectorAll('.slide-up');
    contentSections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('slide-up-visible');
        }
    });
}

// Event listener for scroll event
window.addEventListener('scroll', handleScroll);

// Initial check on page load
handleScroll();

// Animation
// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function handleScroll() {
    const contentSections = document.querySelectorAll('.slide-up');
    contentSections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('slide-up-visible');
        }
    });
}

// Event listener for scroll event
window.addEventListener('scroll', handleScroll);

// Initial check on page load
handleScroll();

// Recipe Page JS
document.addEventListener('DOMContentLoaded', function() {
    // Sample recipe data
    const recipes = [
        {
            name: "Cheesy Egg Quesadilla with Spinach",
            description: "A quick and delicious quesadilla with spinach and a cheesy egg topping.",
            category: "normal",
            time: "15-30",
            difficulty: "easy",
            image: "Assets/Cheesy Egg Quesadilla with Spinach.jpg",
            ingredients: [
                "2 teaspoons extra-virgin olive oil, divided",
                "2 cups spinach",
                "2 corn tortillas",
                "4 tablespoons shredded Cheddar cheese, divided",
                "1 large egg",
                "¼ avocado, sliced",
                "Hot sauce (optional)"
            ],
            instructions: "Heat 1 teaspoon oil in a small nonstick skillet over medium-high heat. Add spinach and cook, stirring, until wilted, about 1 minute. Top 1 tortilla with 2 tablespoons cheese, the spinach and the remaining 2 tablespoons cheese. Cover with the other tortilla. Heat the remaining 1 teaspoon oil in the pan over medium-high heat. Add the quesadilla and cook, flipping once, until crispy, about 4 minutes. Transfer to a plate. Crack egg into the pan and cook until the white is set, about 4 minutes. Top the quesadilla with the egg and avocado. Serve with hot sauce, if desired.",
            nutrition: {
                servingsPerRecipe: 1,
                servingSize: "1 quesadilla",
                calories: 481,
                totalCarbohydrate: "31g",
                dietaryFiber: "9g",
                totalSugars: "1g",
                protein: "19g",
                totalFat: "32g",
                saturatedFat: "9g",
                cholesterol: "214mg",
                sodium: "367mg",
                potassium: "423mg"
            }
        }
        // Add more recipes here as needed
    ];

    // Function to display recipes
    function displayRecipes(recipes) {
        const recipeList = document.getElementById('recipe-list');
        if (!recipeList) {
            console.error("Recipe list element not found");
            return;
        }
        recipeList.innerHTML = ''; // Clear previous recipes
        if (recipes.length === 0) {
            recipeList.innerHTML = '<p class="no-recipes">No recipes found.</p>';
            return;
        }
        recipes.forEach((recipe, index) => {
            const recipeCardWrapper = document.createElement('div');
            recipeCardWrapper.className = 'card-wrapper';
            const recipeCard = document.createElement('div');
            recipeCard.className = 'card';
            recipeCard.innerHTML = `
                <div class="card-image" style="background-image: url('${recipe.image}')"></div>
                <div class="title">${recipe.name}</div>
                <div class="category">${recipe.category}</div>
                <div class="time"><i class="fas fa-clock"></i> ${recipe.time}</div>
            `;
            recipeCard.onclick = () => showRecipeDetails(index);
            recipeCardWrapper.appendChild(recipeCard);
            recipeList.appendChild(recipeCardWrapper);
        });
    }

    // Function to show recipe details
    function showRecipeDetails(index) {
        const recipe = recipes[index];
        const recipeDetails = document.getElementById('recipe-details');
        if (!recipeDetails) {
            console.error("Recipe details element not found");
            return;
        }
    
        const nutritionInfo = `
            <div class="nutritions">
                <h3>Nutrition Facts</h3>
                <ul>
                    <li>Servings Per Recipe: ${recipe.nutrition.servingsPerRecipe}</li>
                    <li>Serving Size: ${recipe.nutrition.servingSize}</li>
                    <li>Calories: ${recipe.nutrition.calories}</li>
                    <li>Total Carbohydrate: ${recipe.nutrition.totalCarbohydrate}</li>
                    <li>Dietary Fiber: ${recipe.nutrition.dietaryFiber}</li>
                    <li>Total Sugars: ${recipe.nutrition.totalSugars}</li>
                    <li>Protein: ${recipe.nutrition.protein}</li>
                    <li>Total Fat: ${recipe.nutrition.totalFat}</li>
                    <li>Saturated Fat: ${recipe.nutrition.saturatedFat}</li>
                    <li>Cholesterol: ${recipe.nutrition.cholesterol}</li>
                    <li>Sodium: ${recipe.nutrition.sodium}</li>
                    <li>Potassium: ${recipe.nutrition.potassium}</li>
                </ul>
            </div>
        `;
    
        recipeDetails.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
            <p>${recipe.description}</p>
            <h2>${recipe.name}</h2>
            <p>Category: ${recipe.category}</p>
            <p>Time: ${recipe.time}</p>
            <p>Difficulty: ${recipe.difficulty}</p>
            <h3>Ingredients:</h3>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <h3>Directions:</h3>
            <p>${recipe.instructions}</p>
            ${nutritionInfo}
            <button onclick="goBack()">Back to Recipes</button>
        `;
        document.getElementById('recipe-list').style.display = 'none';
        recipeDetails.style.display = 'flex';
    }    

    // Function to go back to the recipe list
    window.goBack = function() {
        document.getElementById('recipe-list').style.display = 'flex';
        document.getElementById('recipe-details').style.display = 'none';
    };

    // Initial display of recipes
    displayRecipes(recipes);

    // Filter and search functionality
    document.getElementById('search-bar').addEventListener('input', function() {
        applyFilters();
    });

    document.getElementById('category-filter').addEventListener('change', function() {
        applyFilters();
    });

    document.getElementById('time-filter').addEventListener('change', function() {
        applyFilters();
    });

    function applyFilters() {
        const searchTerm = document.getElementById('search-bar').value.toLowerCase();
        const selectedCategory = document.getElementById('category-filter').value;
        const selectedTime = document.getElementById('time-filter').value;

        const filteredRecipes = recipes.filter(recipe => {
            const matchesSearch = recipe.name.toLowerCase().includes(searchTerm);
            const matchesCategory = selectedCategory ? recipe.category === selectedCategory : true;
            const matchesTime = selectedTime ? recipe.time === selectedTime : true;

            return matchesSearch && matchesCategory && matchesTime;
        });

        displayRecipes(filteredRecipes);
    }
});

// Add more event listeners for other filters as needed
