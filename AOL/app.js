function redirectToRecipe(recipeURL) {
    window.location.href = recipeURL;
}

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