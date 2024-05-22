document.addEventListener('DOMContentLoaded', function() {
    const currentPagePath = window.location.pathname;
    const currentPageFilename = currentPagePath.split('/').pop();
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        const linkPath = link.href.split('/').pop();
        if (linkPath === currentPageFilename) {
            link.classList.add('active');
        }
    });
});

function redirectToRecipe(recipeURL) {
    window.location.href = recipeURL;
}

function redirectToHome() {
    window.location.href = "home.html";
}

// Function to handle slide toggle with animation
function slideToggle(element, duration = 300) {
    const content = element;
    const isHidden = !content.classList.contains('expanded');

    if (isHidden) {
        content.style.display = 'block';
        const height = content.scrollHeight;
        content.style.maxHeight = '0';
        content.offsetHeight; // Trigger reflow to apply the maxHeight of 0
        content.style.transition = `max-height ${duration}ms ease-in-out, padding-bottom ${duration}ms ease-in-out, margin-bottom ${duration}ms ease-in-out`;
        content.style.maxHeight = `${height}px`;
    } else {
        content.style.maxHeight = `${content.scrollHeight}px`;
        content.offsetHeight; // Trigger reflow to ensure the current maxHeight is applied
        content.style.transition = `max-height ${duration}ms ease-in-out, padding-bottom ${duration}ms ease-in-out, margin-bottom ${duration}ms ease-in-out`;
        content.style.maxHeight = '0';
    }

    setTimeout(() => {
        if (!isHidden) {
            content.style.display = 'none';
        }
        content.style.transition = null;
        content.classList.toggle('expanded');
    }, duration);
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("toggleThis").addEventListener('click', function() {
        const content = document.getElementById("content");
        slideToggle(content, 300);
        const header = document.getElementById("toggleHeader");
        setTimeout(() => {
            if (content.classList.contains('expanded')) {
                header.innerHTML = "Why is BMI important to know? &#x25B4;";
            } else {
                header.innerHTML = "Why is BMI important to know? &#x25BE;";
            }
        }, 300); // Match the duration with the slideToggle function
    });

    document.getElementById("toggleThis2").addEventListener('click', function() {
        const content2 = document.getElementById("content2");
        slideToggle(content2, 300);
        const header2 = document.getElementById("toggleHeader2");
        const toggleThis2 = document.getElementById("toggleThis2");
        setTimeout(() => {
            if (content2.classList.contains('expanded')) {
                header2.innerHTML = "What are the limits of BMI? &#x25B4;";
                toggleThis2.style.paddingBottom = '0px';
                toggleThis2.style.marginBottom = '0px';
                content2.style.paddingBottom = '50px';
            } else {
                header2.innerHTML = "What are the limits of BMI? &#x25BE;";
                toggleThis2.style.paddingBottom = '50px';
                toggleThis2.style.marginBottom = '50px';
            }
        }, 300); // Match the duration with the slideToggle function
    });

    const button = document.getElementById('bmi-button');
    if (button) {
        button.addEventListener('click', calculateBmi);
    }
});

function calculateBmi() {
    const heightInput = document.getElementById('Height');
    const weightInput = document.getElementById('weight');
    const result = document.getElementById('result');

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

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    const contentSections = document.querySelectorAll('.slide-up');
    contentSections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('slide-up-visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleScroll);

document.addEventListener('DOMContentLoaded', function() {
    // Sample recipe data
    const recipes = [
        {
            name: "Cheesy Egg Quesadilla with Spinach",
            description: "A quick and delicious quesadilla with spinach and a cheesy egg topping.",
            category: "weight-loss",
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
        },
        {
            name: "Strawberry Banana Green Smoothie",
            description: "This green smoothie recipe is sweetened only with fruit and gets an extra dose of healthy omega-3s from flaxseeds.",
            category: "weight-loss",
            time: "under-15",
            difficulty: "easy",
            image: "assets/Strawberry-Banana Green Smoothie.jpg",
            ingredients: [
                "1 medium banana",
                "1 cup baby spinach",
                "½ cup low-fat plain Greek yogurt",
                "½ cup nonfat milk",
                "1 large egg",
                "6 frozen strawberries",
                "1 tablespoon flaxseeds"
            ],
            instructions: "Puree banana, spinach, yogurt, milk, strawberries and flaxseeds in a blender until smooth.",
            nutrition: {
                servingsPerRecipe: 1,
                servingSize: "1 Smoothie",
                calories: 318,
                totalCarbohydrate: "48g",
                dietaryFiber: "8g",
                totalSugars: "28g",
                protein: "20g",
                totalFat: "7g",
                saturatedFat: "2g",
                cholesterol: "9mg",
                sodium: "126mg",
                potassium: "1118mg"
            }
        },
        {
            name: "Raspberry Yogurt Cereal Bowl",
            description: "For breakfast, snack or a healthy dessert, try using yogurt instead of milk for your cereal. If making this as a to-go snack, keep the cereal separate and top just before eating.",
            category: "weight-loss",
            time: "under-15",
            difficulty: "easy",
            image: "assets/Raspberry Yogurt Cereal Bowl.jpg",
            ingredients: [
                "1 cup nonfat plain yogurt",
                "½ cup mini shredded-wheat cereal",
                "¼ cup fresh raspberries",
                "2 teaspoons mini chocolate chips",
                "1 teaspoon pumpkin seeds",
                "¼ teaspoon ground cinnamon",
            ],
            instructions: "Place yogurt in a bowl and top with shredded wheat, raspberries, chocolate chips, pumpkin seeds and cinnamon.",
            nutrition: {
                servingsPerRecipe: 1,
                servingSize: "about 1 3/4 cups each",
                calories: 290,
                totalCarbohydrate: "48g",
                dietaryFiber: "6g",
                totalSugars: "24g",
                protein: "18g",
                totalFat: "5g",
                saturatedFat: "2g",
                cholesterol: "5mg",
                sodium: "191mg",
                potassium: "817mg"
            }
        },
        {
            name: "Strawberry Oat Muffin",
            description: "These wholesome strawberry muffins are fluffy and full of fresh strawberry flavor! Plus, they’re made with whole grains.",
            category: "weight-loss",
            time: "30-45",
            difficulty: "medium",
            image: "Assets/Strawberry Oat Muffin.jpg",
            ingredients: [
                "1 ¾ cups white whole wheat flour or regular whole wheat flour",
                "⅓ cup old-fashioned oats, plus 2 tablespoons for sprinkling on top",
                "1 teaspoon baking powder",
                "½ teaspoon baking soda",
                "½ teaspoon fine sea salt",
                "⅓ cup extra-virgin olive oil",
                "⅓ cup maple syrup",
                "2 eggs, preferably at room temperature",
                "1 cup plain Greek yogurt",
                "2 teaspoons vanilla extract",
                "2 cups hulled and diced ripe strawberries",
                "1 teaspoon turbinado sugar (also called raw sugar), for sprinkling on top (optional)",
            ],
            instructions: "Preheat the oven to 400 degrees Fahrenheit. If necessary, grease all 12 cups on your muffin tin with butter or cooking spray (my pan is non-stick and doesn’t require any grease).\n\
            In a large mixing bowl, combine the flour, ⅓ cup oats, baking powder, baking soda and salt. Stir with a whisk to blend.\n\
            In a medium mixing bowl, combine the oil, maple syrup and eggs. Beat together with a whisk. Add the yogurt and vanilla, and mix well.\n\
            Pour the wet ingredients into the dry and mix with a big spoon, just until combined (a few lumps are ok). Gently fold the strawberries into the batter. The mixture will be thick, but don’t worry.\n\
            Divide the batter evenly between the 12 muffin cups (I used an ice cream scoop with a wire level, which worked perfectly). They will be quite full!\n\
            Sprinkle the tops of the muffins with the remaining 2 tablespoons of oats, followed by the turbinado sugar. Bake the muffins for 19 to 22 minutes, or until the muffins are golden on top and a toothpick inserted into a muffin comes out clean.\n\
            Place the muffin tin on a cooling rack to cool. You might need to run a butter knife along the outer edge of the muffins to loosen them from the pan.",
            nutrition: {
                servingsPerRecipe: 12 ,
                servingSize: "1",
                calories: 187,
                totalCarbohydrate: "24.3g",
                dietaryFiber: "2.8g",
                totalSugars: "7.5g",
                protein: "5.9g",
                totalFat: "7.9g",
                saturatedFat: "1.5g",
                cholesterol: "32.9mg",
                sodium: "161.6mg",
                potassium: "282mg"
            }
        },
        {
            name: "Salad with Spinach & Egg",
            description: "A high-protein, low-calorie salad featuring fresh spinach, a hard-boiled egg, and a crunchy tortilla topping.",
            category: "weight-loss",
            time: "15-30",
            difficulty: "easy",
            image: "Assets/Salad with Spinach & Egg.jpg",
            ingredients: [
                "1 corn tortilla",
                "3 cups spinach",
                "1 tablespoon vinaigrette",
                "2 tablespoons shredded Cheddar cheese",
                "1 hard-boiled egg, sliced",
                "¼ avocado, diced"
            ],
            instructions: `Preheat oven to 400°F. Place tortilla on a small baking sheet and bake, flipping once, until crunchy, about 8 minutes.
            Meanwhile, toss spinach with vinaigrette. Top with cheese, egg and avocado. Crumble the tortilla and sprinkle it on top of the salad.`,
            nutrition: {
                servingsPerRecipe: 1,
                servingSize: "1 salad",
                calories: 379,
                totalCarbohydrate: "22g",
                dietaryFiber: "9g",
                totalSugars: "2g",
                protein: "16g",
                totalFat: "26g",
                saturatedFat: "7g",
                cholesterol: "200mg",
                sodium: "299mg",
                potassium: "363mg"
            }
        },
        {
            name: "Veggie Black Bean Enchiladas",
            description: "These vegetarian enchiladas are a hearty and satisfying dinner. Make them on a weeknight and you’ll enjoy leftovers for lunch the next day. Or make it on the weekend and invite friends over to make a party out of it! You could make a double batch and freeze the extras.",
            category: "normal",
            time: "45-60",
            difficulty: "medium",
            image: "Assets/Veggie Black Bean Enchiladas.jpg",
            ingredients: [
                "2 cups homemade enchilada sauce",
                "2 tablespoons olive oil",
                "1 cup chopped red onion (about 1 small red onion)",
                "1 red bell pepper, chopped",
                "1 bunch of broccoli or 1 small head of cauliflower (about 1 pound), florets removed and sliced into small, bite-sized pieces",
                "1 teaspoon ground cumin",
                "¼ teaspoon ground cinnamon",
                "5 to 6 ounces baby spinach (about 5 cups, packed)",
                "1 can (15 ounces) black beans, drained and rinsed, or 1 ½ cups cooked black beans",
                "1 cup shredded Monterey Jack cheese, divided",
                "½ teaspoon fine salt, to taste",
                "Freshly ground black pepper, to taste",
                "8 whole wheat tortillas (about 8 inches in diameter)",
                "Handful of chopped cilantro, for garnishing"
            ],
            instructions: `Preheat oven to 400 degrees Fahrenheit with one rack in the middle of the oven and one in the upper third. Lightly grease a 9 by 13-inch pan with olive oil or cooking spray.
            In a large skillet over medium heat, warm the olive oil until simmering. Add the onions and a pinch of salt. Cook, stirring often, until the onions are tender and translucent, about 5 to 7 minutes. Add the broccoli and bell pepper, stir, and reduce heat to medium-low. Cover the skillet and cook, stirring occasionally, for about 8 to 9 minutes, or until the broccoli is brighter green and just starting to turn golden on the edges.
            Add the cumin and cinnamon to the skillet and cook until fragrant, about 30 seconds. Add the spinach, a few handfuls at a time, stirring until it has reduced in size. Repeat with the remaining spinach and cook until all of the spinach has wilted.
            Transfer the contents of the pan to a medium mixing bowl. Add the drained beans, ¼ cup cheese and a drizzle of enchilada sauce (about 2 tablespoons). Season with ½ teaspoon salt and some freshly ground black pepper, to taste.
            Assemble the enchiladas: Pour ¼ cup enchilada sauce into your prepared pan and tilt it from side to side until the bottom of the pan is evenly coated. To assemble your first enchilada, spread ½ cup filling mixture down the middle of a tortilla, then snugly wrap the left side over and then the right, to make a wrap. Place it seam-side down against the edge of your pan. Repeat with remaining tortillas and filling.
            Drizzle the remaining enchilada sauce evenly over the enchiladas, leaving the tips of the enchiladas bare. Sprinkle the remaining shredded cheese evenly over the enchiladas.
            Bake, uncovered, on the middle rack for 20 minutes. If the cheese on top isn’t golden enough for your liking, carefully transfer the enchiladas to the upper rack of the oven and bake for an additional 3 to 6 minutes, until sufficiently golden and bubbly.
            Remove from oven and let the enchiladas rest for 10 minutes (they’re super hot!). Before serving, sprinkle chopped cilantro down the center of the enchiladas. Serve immediately. Leftovers will keep well for up to 4 days in the refrigerator, covered.`,
            nutrition: {
                servingsPerRecipe: 4,
                servingSize: "2 enchiladas",
                calories: 687,
                totalCarbohydrate: "73.3g",
                dietaryFiber: "20.3g",
                totalSugars: "9.6g",
                protein: "26.3g",
                totalFat: "36.2g",
                saturatedFat: "6.8g",
                cholesterol: "30mg",
                sodium: "1450.2mg",
                potassium: "733mg"
            }
        },
        {
            name: "Perfect Baked Sweet Potato",
            description: "These baked sweet potatoes are silky-smooth all the way through. They’re sweet, creamy, and delicious. Baked sweet potatoes are always a nice side dish and also make a great weeknight meal if you top them well.",
            category: "normal",
            time: "45-60",
            difficulty: "easy",
            image: "assets/Perfect Baked Sweet Potato.jpg",
            ingredients: [
                "1 to 4 medium sweet potatoes (about 8 to 12 ounces each)"
            ],
            instructions: `Preheat the oven to 450 degrees Fahrenheit with a rack in the middle and another rack directly below it. Line the interior of a large, rimmed baking sheet with parchment paper to catch any sweet potato drippings.
            To prepare the sweet potatoes, scrub them clean with a vegetable brush under running water. Using a fork, prick the sweet potatoes about 6 to 8 times each, about ¼ inch deep.
            Place the sweet potatoes directly on the middle rack, and place the prepared baking sheet on the rack below to catch any drippings.
            Bake for 45 to 65 minutes, until the sweet potatoes yield to a gentle squeeze (if the potatoes are starting to drip from their pierced holes, that’s a good sign to start checking them for doneness). Serve as desired.`,
            nutrition: {
                servingsPerRecipe: 1,
                servingSize: "1 sweet potato",
                calories: 195,
                totalCarbohydrate: "45.7g",
                dietaryFiber: "6.8g",
                totalSugars: "9.5g",
                protein: "3.6g",
                totalFat: "0.1g",
                saturatedFat: "0g",
                cholesterol: "0mg",
                sodium: "124.9mg",
                potassium: "16%"
            }
        },
        {
            name: "Colorful Veggie Sesame Noodles",
            description: "These sesame noodles are colorful and completely irresistible! Featuring tender noodles, crisp raw veggies, and a bold but simple seasoning, this dish is perfect for gatherings or solo meals.",
            category: "normal",
            time: "30-45",
            difficulty: "easy",
            image: "Assets/Colorful Veggie Sesame Noodles.jpg",
            ingredients: [
                "8 ounces soba noodles or spaghetti noodles of choice",
                "¼ cup raw sesame seeds",
                "⅓ cup reduced sodium tamari (or soy sauce, just be sure it’s reduced sodium or it will taste too salty)",
                "¼ cup toasted sesame oil",
                "2 tablespoons lime juice (about 1 medium lime)",
                "1 teaspoon grated fresh ginger",
                "2 cloves garlic, pressed or minced",
                "½ teaspoon red pepper flakes, to taste",
                "2 ½ cups thinly sliced red cabbage (about 10 ounces or ¼th medium cabbage)",
                "3 whole carrots, peeled and then sliced into ribbons with vegetable peeler (about 1 ½ cups)",
                "1 red bell pepper, sliced into very thin strips",
                "1 bunch green onions, chopped",
                "½ cup chopped cilantro",
                "Optional: 2 cups shelled edamame, steamed"
            ],
            instructions: `Cook the soba noodles according to the package directions. Once they’re done cooking, drain them in a colander and rinse them well under cool water. Transfer the drained noodles to a large serving bowl and set aside.
            Meanwhile, toast the sesame seeds in a small skillet over medium heat, stirring often (keep an eye on them, as they can burn quickly). Once they’re fragrant and turning golden, transfer them to a small bowl so they don’t burn. Set aside.
            In another bowl, combine the tamari, sesame oil, lime juice, ginger, garlic and red pepper flakes. Whisk until blended. Set aside.
            To assemble, add the cabbage, carrots, bell pepper, green onions, cilantro and optional edamame to your bowl with the noodles. Drizzle in the dressing. Add all of the sesame seeds, and use tongs to toss until the mixture is fully combined. Serve immediately, or refrigerate for later. This salad is best consumed within a couple of days, but it will keep for up to 5 days.`,
            nutrition: {
                servingsPerRecipe: 6,
                servingSize: "1 side serving",
                calories: 293,
                totalCarbohydrate: "39.1g",
                dietaryFiber: "3.1g",
                totalSugars: "4.3g",
                protein: "9.6g",
                totalFat: "12.6g",
                saturatedFat: "1.8g",
                cholesterol: "0mg",
                sodium: "958.4mg",
                potassium: "8%"
            }
        },
        {
            name: "Mushroom & Tofu Stir-Fry",
            description: "This tofu veggie stir-fry is quick and easy, making it a great go-to weeknight meal. Baked tofu has a firm, toothsome texture that crisps well in a hot pan. You can find it in flavors like teriyaki and sesame, both of which are delicious here. Or opt for a smoked version, which has the same texture with a more robust flavor. Serve over brown rice.",
            category: "normal",
            time: "15-30",
            difficulty: "easy",
            image: "Assets/Mushroom & Tofu Stir-Fry.jpg",
            ingredients: [
                "4 tablespoons peanut oil or canola oil, divided",
                "1 pound mixed mushrooms, sliced",
                "1 medium red bell pepper, diced",
                "1 bunch scallions, trimmed and cut into 2-inch pieces",
                "1 tablespoon grated fresh ginger",
                "1 large clove garlic, grated",
                "1 (8 ounce) container baked tofu or smoked tofu, diced",
                "3 tablespoons oyster sauce or vegetarian oyster sauce"
            ],
            instructions: `Heat 2 tablespoons oil in a large flat-bottom wok or cast-iron skillet over high heat. Add mushrooms and bell pepper; cook, stirring occasionally, until soft, about 4 minutes. Stir in scallions, ginger and garlic; cook for 30 seconds more. Transfer the vegetables to a bowl.
            Add the remaining 2 tablespoons oil and tofu to the pan. Cook, turning once, until browned, 3 to 4 minutes. Stir in the vegetables and oyster sauce. Cook, stirring, until hot, about 1 minute.`,
            nutrition: {
                servingsPerRecipe: 5,
                servingSize: "1 1/4 cups",
                calories: 171,
                totalCarbohydrate: "9g",
                dietaryFiber: "2g",
                totalSugars: "4g",
                protein: "8g",
                totalFat: "13g",
                saturatedFat: "2g",
                vitaminA: "925IU",
                vitaminC: "36mg",
                folate: "48mcg",
                sodium: "309mg",
                calcium: "113mg",
                iron: "2mg",
                magnesium: "33mg",
                potassium: "469mg"
            }
        },
        {
            name: "One-Pot Creamy Chicken & Mushroom Pasta",
            description: "This creamy chicken and mushroom pasta recipe makes for an easy weeknight dinner. Using store-bought rotisserie chicken saves time when cooking, and leftover chicken would work just as well.",
            category: "normal",
            time: "15-30",
            difficulty: "easy",
            image: "Assets/One-Pot Creamy Chicken & Mushroom Pasta.jpg",
            ingredients: [
                "2 tablespoons extra-virgin olive oil",
                "2 (8 ounce) packages sliced shiitake or cremini mushrooms",
                "½ teaspoon ground pepper",
                "¼ teaspoon salt",
                "2 tablespoons sherry vinegar",
                "2 ¼ cups unsalted chicken broth",
                "8 ounces whole-wheat penne",
                "1 cup coarsely shredded rotisserie chicken",
                "¼ cup crème fraîche or sour cream",
                "¼ cup grated Parmesan cheese",
                "Chopped fresh flat-leaf parsley for garnish"
            ],
            instructions: `Heat oil in a large Dutch oven over medium-high heat. Add mushrooms, pepper and salt; cook, stirring occasionally, until tender and golden brown, about 8 minutes. Add vinegar; cook, stirring to scrape up any browned bits from the bottom of the pan, for about 30 seconds. Stir in broth; bring to a boil over medium-high heat. Add penne and chicken; cover and cook, stirring occasionally, until the pasta is al dente, 10 to 12 minutes. Remove from heat.
            Stir in crème fraîche (or sour cream) and Parmesan. Divide the pasta evenly among 4 bowls; garnish with parsley, if desired.`,
            nutrition: {
                servingsPerRecipe: 4,
                servingSize: "about 1 1/4 cups",
                calories: 426,
                totalCarbohydrate: "48g",
                dietaryFiber: "6g",
                totalSugars: "5g",
                protein: "25g",
                totalFat: "17g",
                saturatedFat: "6g",
                cholesterol: "56mg",
                vitaminA: "432IU",
                sodium: "441mg",
                potassium: "880mg"
            }
        },
        {
            name: "Menemen (Turkish Scrambled Eggs with Tomatoes)",
            description: "This hearty Turkish breakfast features a fragrant, tender tomato sauce with peppers and onions. The eggs add a silkiness to the dish, and a boost of protein. Serve with crusty whole-wheat bread to soak up all the sauce.",
            category: "normal",
            time: "15-30",
            difficulty: "easy",
            image: "Assets/Menemen (Turkish Scrambled Eggs with Tomatoes).jpg",
            ingredients: [
                "¼ cup extra-virgin olive oil",
                "1 cup finely chopped yellow onion",
                "1 cup finely chopped green bell pepper",
                "1 tablespoon paprika",
                "1 teaspoon crushed red pepper, plus more for garnish",
                "¾ teaspoon salt",
                "½ teaspoon ground cumin",
                "½ teaspoon dried oregano",
                "2 ½ cups finely chopped tomato (about 1 extra-large)",
                "2 tablespoons tomato paste",
                "4 large eggs, beaten",
                "2 tablespoons finely chopped fresh flat-leaf parsley",
                "4 slices crusty bread, preferably whole-wheat, warmed"
            ],
            instructions: `Heat oil in a medium skillet over medium heat. Add onion, bell pepper, paprika, crushed red pepper, salt, cumin and oregano; cook, stirring occasionally, until fragrant, about 5 minutes. Add tomato and tomato paste; cook, stirring occasionally, until reduced slightly and thickened, about 5 minutes. Reduce heat to medium-low and add eggs; cook, stirring, until the eggs are fully cooked but still soft and saucy, 3 to 4 minutes. Sprinkle with parsley. Garnish with crushed red pepper, if desired. Serve with warm bread.`,
            nutrition: {
                servingsPerRecipe: 4,
                servingSize: "3/4 cup menemen & 1 slice bread",
                calories: 327,
                totalCarbohydrate: "27g",
                dietaryFiber: "5g",
                totalSugars: "7g",
                protein: "11g",
                totalFat: "20g",
                saturatedFat: "4g",
                cholesterol: "186mg",
                vitaminA: "2379IU",
                vitaminC: "28mg",
                vitaminD: "41IU",
                vitaminE: "3mg",
                folate: "90mcg",
                vitaminK: "42mcg",
                sodium: "697mg",
                calcium: "93mg",
                iron: "3mg",
                magnesium: "43mg",
                potassium: "613mg",
                zinc: "1mg",
                vitaminB12: "1mcg"
            }
        },
        {
            name: "Creamy Chicken Pasta with Brussels Sprouts & Artichokes",
            description: "The creamy white wine-garlic sauce helps blend artichokes and shaved Brussels sprouts together with nutty whole-wheat pasta in this quick dinner. Use a mandoline or a very sharp knife to shave the Brussels sprouts. If you opt for pre-packaged shaved sprouts, note that they might be on the thicker side, requiring a few extra minutes of cooking time. You can swap in canned artichokes, but they tend to have more sodium than frozen, so give them a good rinse before adding.",
            category: "weight-gain",
            time: "15-30",
            difficulty: "easy",
            image: "Assets/Creamy Chicken Pasta with Brussels Sprouts & Artichokes.jpg",
            ingredients: [
                "8 ounces whole-wheat fettuccine",
                "1/2 cup unsalted chicken broth",
                "4 ounces cream cheese",
                "1 teaspoon grated garlic",
                "3/4 teaspoon salt",
                "1 1/2 tablespoons extra-virgin olive oil",
                "10 ounces Brussels sprouts, trimmed and shaved (about 4 cups)",
                "1 medium shallot, thinly sliced",
                "1/2 teaspoon crushed red pepper",
                "1/4 cup dry white wine (such as sauvignon blanc)",
                "3 cups chopped or shredded cooked chicken breast",
                "1 cup frozen artichoke hearts, thawed and quartered",
                "2 tablespoons lemon juice",
                "1/4 cup torn fresh basil leaves plus 2 tablespoons, divided"
            ],
            instructions: `Bring a large pot of water to a boil. Cook fettuccine according to package directions. Drain, reserving 1 cup cooking water.
            Meanwhile, whisk broth, cream cheese, garlic and salt together in a medium bowl until the cream cheese is in pea-sized chunks.
            Heat oil in a large skillet over medium-high heat. Add Brussels sprouts, shallot and crushed red pepper; cook, stirring often, until the Brussels sprouts are bright green and slightly softened, 2 to 3 minutes. Add wine; cook, stirring often, until mostly evaporated, about 1 minute. Add the broth mixture, stirring constantly to melt the cream cheese; bring to a light simmer over medium-high heat. Reduce heat to medium; cook, stirring occasionally, until thickened, about 1 minute.
            Stir in chicken, artichokes, the fettuccine and 1/2 cup of the reserved cooking water. Cook, tossing constantly and adding the remaining 1/2 cup cooking water, a splash at a time, until the fettuccine is coated in sauce, about 2 minutes. Remove from heat. Add lemon juice and 1/4 cup basil; toss to incorporate. Top with the remaining 2 tablespoons basil.`,
            nutrition: {
                servingsPerRecipe: 4,
                servingSize: "about 1 3/4 cups",
                calories: 561,
                totalFat: "20g",
                saturatedFat: "8g",
                cholesterol: "101mg",
                totalCarbohydrate: "57g",
                totalSugars: "6g",
                addedSugars: "0g",
                protein: "40g",
                dietaryFiber: "11g",
                sodium: "648mg",
                potassium: "825mg"
            }
        },
        {
            name: "Roasted Chicken Tenders with Peppers & Onions",
            description: "Call this one an update of that favorite combo, sausage and peppers. Our healthy version can be served over rice or on a roll with a little shredded cheese for a new take on a Philly cheese steak sandwich.",
            category: "weight-gain",
            time: "30-45",
            difficulty: "easy",
            image: "Assets/Roasted Chicken Tenders with Peppers & Onions.jpg",
            ingredients: [
                "½ teaspoon freshly grated lemon zest",
                "3 tablespoons lemon juice",
                "2 tablespoons finely chopped garlic",
                "2 tablespoons finely chopped fresh oregano, or 1 teaspoon dried",
                "2 tablespoons finely chopped pickled jalapeno peppers",
                "2 tablespoons extra-virgin olive oil",
                "½ teaspoon salt",
                "1 pound chicken tenderloins",
                "1 red, yellow or orange bell pepper, seeded and thinly sliced",
                "½ medium onion, thinly sliced"
            ],
            instructions: `Preheat oven to 425 degrees F. Whisk lemon zest, lemon juice, garlic, oregano, jalapenos, oil and salt in a 9-by-13-inch glass baking dish. Add tenders, bell pepper and onion; toss to coat. Spread the mixture out evenly; cover with foil. Bake until the chicken is cooked through and no longer pink in the middle, 25 to 30 minutes.`,
            nutrition: {
                servingsPerRecipe: 4,
                calories: 211,
                totalFat: "10g",
                saturatedFat: "2g",
                cholesterol: "63mg",
                totalCarbohydrate: "6g",
                totalSugars: "2g",
                protein: "24g",
                dietaryFiber: "1g",
                sodium: "360mg",
                potassium: "311mg",
                vitaminA: "1039IU",
                vitaminC: "47mg",
                folate: "22mcg",
                calcium: "35mg",
                iron: "1mg",
                magnesium: "30mg"
            }
        },
        {
            name: "Gluten-Free Teriyaki Chicken with Broccoli",
            description: "Everyone loves teriyaki chicken—and this one is better for you with much less added sugar. It's also gluten-free so long as you use tamari (aka gluten-free soy sauce). Feel free to swap out the broccoli for any veggie—carrots, snow peas, green beans—that you have on hand.",
            category: "weight-gain",
            time: "15-30",
            difficulty: "easy",
            image: "Assets/Gluten-Free Teriyaki Chicken with Broccoli.jpg",
            ingredients: [
                "1 tablespoon grapeseed oil",
                "1 pound boneless, skinless chicken breasts, cut into 1-inch pieces",
                "3 cups fresh broccoli florets (8 oz.)",
                "¼ cup lower-sodium tamari",
                "2 tablespoons pineapple juice",
                "1 ½ tablespoons honey",
                "1 tablespoon rice vinegar",
                "2 teaspoons grated garlic",
                "2 teaspoons cornstarch",
                "1 teaspoon grated fresh ginger",
                "2 (8.8 ounce) pouches precooked microwaveable brown rice, prepared according to package directions",
                "¼ cup thinly sliced scallions",
                "1 teaspoon toasted sesame seeds"
            ],
            instructions: `Heat oil in a large skillet over high heat. Add chicken; cook, stirring often, until browned and mostly cooked, about 6 minutes. Add broccoli; cook, stirring often, until bright green and tender, about 5 minutes.
            Meanwhile, stir together tamari, pineapple juice, honey, vinegar, garlic, cornstarch and ginger in a small bowl.
            Add the tamari mixture to the chicken mixture in the pan. Cook over high heat, stirring constantly, until the liquid is thickened and the mixture is glazed, about 20 seconds. Remove from heat. Serve the chicken mixture over rice; sprinkle evenly with scallions and sesame seeds.`,
            nutrition: {
                servingsPerRecipe: 4,
                calories: 426,
                totalFat: "8g",
                saturatedFat: "1g",
                cholesterol: "",
                totalCarbohydrate: "53g",
                totalSugars: "9g",
                addedSugars: "6g",
                protein: "35g",
                dietaryFiber: "4g",
                sodium: "774mg",
                potassium: "733mg",
                calcium: "66mg",
                iron: "",
                magnesium: ""
            }
        },
        {
            name: "Shrimp Pad Thai",
            description: "This iconic Thai recipe features rice noodles stir-fried in a wok with a sauce that strikes the perfect balance of tangy, salty, and sweet. Along with the noodles, pad thai typically includes a mix of ingredients such as shrimp, tofu, scrambled eggs, bean sprouts, and a handful of aromatics like garlic, shallot, and scallions.",
            category: "weight-gain",
            time: "30-45",
            difficulty: "medium",
            image: "Assets/Shrimp Pad Thai.jpg",
            ingredients: [
                "8 ounces dried medium rice noodles",
                "7 tablespoons canola or grapeseed oil, divided",
                "3 tablespoons palm sugar or granulated sugar",
                "1 tablespoon water",
                "3 tablespoons fish sauce",
                "2 tablespoons tamarind paste",
                "1 teaspoon paprika",
                "6 ounces raw shrimp (21-25 count), peeled and deveined",
                "7 ounces water-packed firm tofu, drained and cubed (1/2-inch)",
                "1 medium shallot, thinly sliced",
                "4 cloves garlic, minced",
                "3 scallions, white and light green parts thinly sliced, dark green parts cut into 2-inch lengths, divided, plus more thinly sliced for serving",
                "2 large eggs, lightly beaten",
                "1 cup bean sprouts",
                "2 tablespoons sweet preserved daikon radish, minced (optional; see Tip)",
                "1/4 cup crushed roasted peanuts",
                "Crushed red pepper to taste (optional)",
                "Lime wedges for serving (optional)"
            ],
            instructions: `Soak rice noodles in a large bowl of warm water for 30 minutes. (Alternatively, prepare noodles according to package directions.) Drain well; drizzle with 1 tablespoon oil and toss well so they don’t stick.
        
            Meanwhile, combine sugar and water in a small saucepan. Cook over low heat, stirring constantly, until the sugar is dissolved and the mixture begins to caramelize, about 2 minutes. Remove from heat. Stir in fish sauce, tamarind paste and paprika. Set aside.
        
            Heat 2 tablespoons oil in a flat-bottom wok or large deep nonstick skillet over medium-high heat until just smoking. Add shrimp in an even layer and cook, without stirring, until the edges turn pink, about 20 seconds. Flip and cook until the shrimp are pink and fully cooked, about 30 seconds more. Remove the pan from the heat and transfer the shrimp to a clean plate.
        
            Return the pan to medium-high heat; add 2 tablespoons oil and tofu. Cook, stirring, until the tofu is golden, 2 to 3 minutes. Remove the pan from the heat and transfer the tofu to the plate with the shrimp.
        
            Wipe the pan clean and add 2 tablespoons oil. Heat over medium-high heat until just smoking; add shallot, garlic and scallion whites. Cook, stirring, until fragrant, about 30 seconds. Add the noodles; cook, stirring for 30 seconds. Add the sauce and gently fold to coat the noodles. (Taste a noodle—if it's undercooked, add 1/4 cup water to the pan and cook, covered, over medium heat, until the water has evaporated.)
        
            Push the noodles to one side of the pan. Add the remaining 1 tablespoon oil to the empty space and add eggs. Cook, stirring, until just set, about 2 minutes, then toss into the noodles.
        
            Add the shrimp and tofu, bean sprouts, preserved radish (if using) and scallion greens to the noodle mixture; gently mix until combined. Top with peanuts. Garnish with crushed red pepper and more scallion greens and serve with lime wedges, if desired.`,
            nutrition: {
                servingsPerRecipe: 4,
                calories: 651,
                totalFat: "34g",
                saturatedFat: "4g",
                cholesterol: "161mg",
                totalCarbohydrate: "65g",
                totalSugars: "13g",
                addedSugars: "9g",
                protein: "24g",
                dietaryFiber: "4g",
                sodium: "1195mg",
                potassium: "504mg"
            }
        },
        {
            name: "Honey-Garlic Chicken Casserole",
            description: "This honey-garlic chicken casserole is the perfect option for when you want a stir-fry with less mess to clean up. To keep prep to a minimum, we use precooked brown rice. Look for it in pouches at the store or whip up this one-pot meal when you have leftovers to spare.",
            category: "weight-gain",
            time: "45",
            difficulty: "medium",
            image: "Assets/Honey-Garlic Chicken Casserole.jpg",
            ingredients: [
                "1 1/2 tablespoons honey",
                "1 1/2 teaspoons grated garlic",
                "4 (6-ounce) bone-in, skin-on chicken thighs",
                "1/2 teaspoon salt, divided",
                "1 tablespoon canola oil",
                "2 tablespoons all-purpose flour",
                "2 cups precooked microwaveable brown rice",
                "4 cups fresh broccoli florets, cut into 1-inch pieces",
                "1 cup lower-sodium chicken broth",
                "1 cup chopped red bell pepper",
                "1 medium carrot, peeled and sliced",
                "2 medium scallions, chopped",
                "2 tablespoons lower-sodium soy sauce",
                "1 tablespoon rice vinegar",
                "1/4 teaspoon ground pepper"
            ],
            instructions: `Preheat oven to 400°F. Stir honey and garlic together in a small bowl until well combined. Set aside 1 teaspoon of the honey mixture in a separate small bowl.
        
            Pat chicken dry with paper towels. Sprinkle with 1/4 teaspoon salt. Heat oil in a large oven-safe skillet over medium-high heat until shimmering. Place the chicken skin-side down in the skillet and reduce heat to medium. Cook, undisturbed, until the skin is light brown and releases easily from the pan, 5 to 8 minutes.
        
            Turn the chicken over. Brush the tops with the reserved 1 teaspoon honey mixture. Immediately flip the chicken honey-side down; cook until the skin turns golden brown, about 1 minute. Transfer to a plate.
        
            Add flour to the oil in the pan; cook, stirring constantly, until the mixture smells nutty, about 30 seconds. Stir in rice, broccoli, broth, bell pepper, carrot, scallions, soy sauce, vinegar, pepper and the remaining 1/4 teaspoon salt. Nestle the chicken into the mixture, skin-side up. Bake, uncovered, until an instant-read thermometer inserted into the thickest portion of chicken registers 165°F and most of the liquid is absorbed, 16 to 18 minutes. Brush the chicken with the remaining honey mixture and let rest for 5 minutes before serving.`,
            nutrition: {
                servingsPerRecipe: 4,
                servingSize: "1 chicken thigh & 1 cup vegetable-rice mixture",
                calories: 438,
                totalFat: "20g",
                saturatedFat: "4g",
                cholesterol: "130mg",
                totalCarbohydrate: "38g",
                totalSugars: "10g",
                addedSugars: "7g",
                protein: "29g",
                dietaryFiber: "5g",
                sodium: "750mg",
                potassium: "690mg"
            }
        }
        // Add more recipes here as needed
    ];

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
                <div class="time"><span class="material-icons">access_time</span> ${recipe.time}</div>
            `;
            recipeCard.onclick = () => showRecipeDetails(index);
            recipeCardWrapper.appendChild(recipeCard);
            recipeList.appendChild(recipeCardWrapper);
        });
    }

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
            <button class="clickable" onclick="goBack()">Back to Recipes</button>
        `;
        document.getElementById('recipe-list').style.display = 'none';
        recipeDetails.style.display = 'flex';
    }

    window.goBack = function() {
        document.getElementById('recipe-list').style.display = 'flex';
        document.getElementById('recipe-details').style.display = 'none';
    };

    displayRecipes(recipes);

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

document.addEventListener('DOMContentLoaded', function() {
    const recipes = [
        { name: "Cheesy Egg Quesadilla with Spinach", image: "Assets/Cheesy Egg Quesadilla with Spinach.jpg" },
        { name: "Strawberry Banana Green Smoothie", image: "assets/Strawberry-Banana Green Smoothie.jpg" },
        { name: "Raspberry Yogurt Cereal Bowl", image: "assets/Raspberry Yogurt Cereal Bowl.jpg" },
        { name: "Strawberry Oat Muffin", image: "Assets/Strawberry Oat Muffin.jpg" },
        { name: "Salad with Spinach & Egg", image: "Assets/Salad with Spinach & Egg.jpg" },
        { name: "Veggie Black Bean Enchiladas", image: "Assets/Veggie Black Bean Enchiladas.jpg" },
        { name: "Perfect Baked Sweet Potato", image: "assets/Perfect Baked Sweet Potato.jpg" },
        { name: "Colorful Veggie Sesame Noodles", image: "Assets/Colorful Veggie Sesame Noodles.jpg" },
        { name: "Mushroom & Tofu Stir-Fry", image: "Assets/Mushroom & Tofu Stir-Fry.jpg" },
        { name: "One-Pot Creamy Chicken & Mushroom Pasta", image: "Assets/One-Pot Creamy Chicken & Mushroom Pasta.jpg" },
        { name: "Menemen (Turkish Scrambled Eggs with Tomatoes)", image: "Assets/Menemen (Turkish Scrambled Eggs with Tomatoes).jpg" },
        { name: "Creamy Chicken Pasta with Brussels Sprouts & Artichokes", image: "Assets/Creamy Chicken Pasta with Brussels Sprouts & Artichokes.jpg" },
        { name: "Roasted Chicken Tenders with Peppers & Onions", image: "Assets/Roasted Chicken Tenders with Peppers & Onions.jpg" },
        { name: "Gluten-Free Teriyaki Chicken with Broccoli", image: "Assets/Gluten-Free Teriyaki Chicken with Broccoli.jpg" },
        { name: "Shrimp Pad Thai", image: "Assets/Shrimp Pad Thai.jpg" },
        { name: "Honey-Garlic Chicken Casserole", image: "Assets/Honey-Garlic Chicken Casserole.jpg" }
    ];

    function loadCarousel() {
        const carouselInner = document.getElementById('carousel-inner');
        recipes.forEach((recipe) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.style.backgroundImage = `url('${recipe.image}')`;
            card.innerHTML = `<div class="title"></div>`; // No name in the div card
            card.onclick = function() {
                window.location.href = 'recipe.html';
            };
            carouselInner.appendChild(card);
        });
    }

    let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.card');
        if (index >= slides.length - 5) { // Adjust to prevent blank cards
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 6; // Adjust to show the last 6 cards
        } else {
            currentSlide = index;
        }
        const offset = -currentSlide * (100 / 6); // Move the carousel by one card width
        document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
    }

    window.nextSlide = function() {
        showSlide(currentSlide + 1);
    };

    window.prevSlide = function() {
        showSlide(currentSlide - 1);
    };

    // Auto slide every 2 seconds
    setInterval(nextSlide, 2000);

    // Initial load
    loadCarousel();
    showSlide(currentSlide);
});

