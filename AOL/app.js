
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
            name: "High-Calorie Smoothie",
            category: "weight-gain",
            time: "under-15",
            difficulty: "easy",
            ingredients: ["1 banana", "1 cup whole milk", "2 tablespoons peanut butter", "1 scoop protein powder", "1 tablespoon honey", "1/2 cup oats"],
            instructions: "Add all ingredients to a blender. Blend until smooth. Pour into a glass and enjoy."
        },
        {
            name: "Grilled Chicken Salad",
            category: "weight-loss",
            time: "under-30",
            difficulty: "easy",
            ingredients: ["1 chicken breast", "2 cups mixed greens", "1/2 cup cherry tomatoes", "1/4 cup sliced cucumbers", "1/4 cup shredded carrots", "1 tablespoon olive oil", "1 tablespoon balsamic vinegar", "Salt and pepper to taste"],
            instructions: "Grill the chicken breast until fully cooked. Slice the chicken into strips. In a bowl, combine the mixed greens, cherry tomatoes, cucumbers, and carrots. Top with grilled chicken. Drizzle with olive oil and balsamic vinegar. Season with salt and pepper. Toss to combine and serve."
        },
        {
            name: "Spaghetti Carbonara",
            category: "normal",
            time: "30-45",
            difficulty: "medium",
            ingredients: ["200g spaghetti", "100g pancetta", "2 large eggs", "50g grated Parmesan cheese", "1 clove garlic, peeled and crushed", "Salt and black pepper to taste", "2 tablespoons olive oil"],
            instructions: "Cook the spaghetti according to the package instructions. While the pasta is cooking, heat olive oil in a pan over medium heat. Add the pancetta and garlic, and cook until the pancetta is crispy. In a bowl, beat the eggs and mix in the grated Parmesan cheese. Drain the spaghetti and add it to the pan with the pancetta. Remove the pan from heat. Quickly pour in the egg and cheese mixture, stirring continuously to create a creamy sauce. Season with salt and black pepper. Serve immediately with extra Parmesan cheese on top."
        }
    ];

    // Function to display recipes
    function displayRecipes(recipes) {
        const recipeList = document.getElementById('recipe-list');
        if (!recipeList) {
            console.error("Recipe list element not found");
            return;
        }
        recipeList.innerHTML = ''; // Clear previous recipes
        recipes.forEach((recipe, index) => {
            const recipeCard = document.createElement('div');
            recipeCard.className = 'card';
            recipeCard.innerHTML = `
                <div class="card-image"></div>
                <div class="title">${recipe.name}</div>
                <div class="category">${recipe.category}</div>
                <div class="time"><i class="fas fa-clock"></i> ${recipe.time}</div>
            `;
            recipeCard.onclick = () => showRecipeDetails(index);
            recipeList.appendChild(recipeCard);
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
        recipeDetails.innerHTML = `
            <h2>${recipe.name}</h2>
            <p>Category: ${recipe.category}</p>
            <p>Time: ${recipe.time}</p>
            <p>Difficulty: ${recipe.difficulty}</p>
            <h3>Ingredients:</h3>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <h3>Instructions:</h3>
            <p>${recipe.instructions}</p>
            <button onclick="goBack()">Back to Recipes</button>
        `;
        document.getElementById('recipe-list').style.display = 'none';
        recipeDetails.style.display = 'block';
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
        const searchTerm = this.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchTerm));
        displayRecipes(filteredRecipes);
    });

    document.getElementById('category-filter').addEventListener('change', function() {
        const selectedCategory = this.value;
        const filteredRecipes = selectedCategory ? recipes.filter(recipe => recipe.category === selectedCategory) : recipes;
        displayRecipes(filteredRecipes);
    });

    document.getElementById('time-filter').addEventListener('change', function() {
        const selectedTime = this.value;
        const filteredRecipes = selectedTime ? recipes.filter(recipe => recipe.time === selectedTime) : recipes;
        displayRecipes(filteredRecipes);
    });
});

// Add more event listeners for other filters as needed
