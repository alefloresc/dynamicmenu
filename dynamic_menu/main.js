// Seleccionar y mostrar el menú correspondiente basado en la hora actual
let today = new Date();
let hourNow = today.getHours();

if (hourNow >= 18) {
    displayDinner();
} else if (hourNow >= 12) {
    displayLunch();
} else if (hourNow >= 5) {
    displayBreakfast();
}

function displayBreakfast() {
    const container = document.getElementById('menu-container');
    container.innerHTML = `
    <h2>Breakfast Menu</h2><br>

    <h3>Classic American Breakfast</h3>
    <p> Eggs, bacon/sausage, hash browns, choice of toast or pancakes.</p><br>
    
    <h3>Avocado Toast with Poached Eggs</h3>
    <p> Eggs, bacon/sausage, hash browns, choice of toast or pancakes.</p><br>
    
    <h3>French Toast Platter</h3>
    <p>Brioche French toast, powdered sugar, syrup, berries, and whipped cream.</p><br>

    <h3>Mediterranean Breakfast Bowl</h3>
    <p>Quinoa/couscous base, hummus, veggies, feta and tahini.</p><br>
  
    <h3>Vegetarian Breakfast Burrito</h3>
    <p>Tortilla with scrambled eggs, veggies, beans, cheese, and salsa.</p><br>
    
    `;
    updateImages('breakfast');
}

function displayLunch() {
    const container = document.getElementById('menu-container');
    container.innerHTML = `
    <h2>Lunch Menu</h2><br>

    <h3>Grilled Chicken Caesar Salad</h3>
    <p>Romaine, grilled chicken, Caesar dressing, Parmesan, and croutons.</p><br>

    <h3>Gourmet Turkey Club Sandwich</h3>
    <p>Turkey, bacon, avocado, lettuce, tomato, mayo, and whole grain bread.</p><br>
   
    <h3>Caprese Panini</h3>
    <p>Tomato, mozzarella, basil, balsamic glaze, and ciabatta bread.</p><br>
   
    <h3>Asian-inspired Buddha Bowl</h3>
    <p>Rice, tofu, veggies, edamame, and sesame dressing.</p><br>
   
    <h3>Southwest Chicken Wrap</h3>
    <p>Grilled chicken, beans, corn salsa, lettuce, tomato, avocado, and tortilla.</p><br>
    `;
    updateImages('lunch');
}

function displayDinner() {
    const container = document.getElementById('menu-container');
    container.innerHTML = `
    <h2>Dinner Menu</h2><br>

    <h3>Filet Mignon with Red Wine Reduction</h3>
    <p>Grilled filet mignon, red wine reduction, and mashed potatoes/roasted veggies.</p><br>

    <h3>Seafood Linguine in Garlic Cream Sauce</h3>
    <p>Linguine, shrimp, scallops, crab, garlic cream sauce, and Parmesan.</p><br>
    
    <h3>Grilled Salmon with Lemon-Dill Butter</h3>
    <p>Grilled salmon, lemon-dill butter sauce, and quinoa/asparagus.</p><br>
    
    <h3>Vegetarian Eggplant Parmesan</h3>
    <p> Breaded eggplant, marinara, mozzarella, Parmesan, and spaghetti/garlic bread.</p><br>
    
    <h3>Barbecue Pork Ribs with Southern Coleslaw</h3>
    <p>BBQ pork ribs,and coleslaw, and fries/cornbread.</p><br>
    `;
    updateImages('dinner');
}


//W3Schools Switch Statement

function changeMenu(menuType) {
    switch (menuType) {
        case 'breakfast':
            displayBreakfast();
            break;
        case 'lunch':
            displayLunch();
            break;
        case 'dinner':
            displayDinner();
            break;
    }
}


// W3Schools string interpolation

function updateImages(menuType) {
    const images = document.querySelectorAll('.dishes img');
    images.forEach((image, index) => {
        let imageName = `img${index + 1}`;
        image.src = `img/${menuType}${index + 1}.jpeg`;
    });
}


