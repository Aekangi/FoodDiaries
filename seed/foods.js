const db = require('../db')
const food = require('../models/food')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
  const foods = [
    {
      name: 'Creamy Baked Mac and Cheese',
      difficulty_Level: 'Difficulty Level: Medium',
      time: '35 min',
      servings: '8 servings',
      ingredients:
        '1 lb. dried elbow pasta, 1/2 cup unsalted butter, 1/2 cup all purpose flour, 1 1/2 cups whole milk, 2 1/2 cups half and half, 4 cups shredded medium sharp cheddar cheese divided (measured after shredding), 2 cups shredded Gruyere cheese divided (measured after shredding), 1/2 Tbsp. salt, 1/2 tsp. black pepper, 1/4 tsp. paprika',
      directions:
        'Preheat oven to 325 degrees F and grease a 3 qt baking dish (9x13). Set aside. Bring a large pot of salted water to a boil. When boiling, add dried pasta and cook 1 minute less than the package directs for al dente. Drain and drizzle with a little bit of olive oil to keep from sticking. While water is coming up to a boil, shred cheeses and toss together to mix, then divide into three piles. Approximately 3 cups for the sauce, 1 1/2 cups for the inner layer, and 1 1/2 cups for the topping. Melt butter in a large saucepan over MED heat. Sprinkle in flour and whisk to combine. Mixture will look like very wet sand. Cook for approximately 1 minute, whisking often. Slowly pour in about 2 cups or so of the milk/half and half, while whisking constantly, until smooth. Slowly pour in the remaining milk/half and half, while whisking constantly, until combined and smooth. Continue to heat over MED heat, whisking very often, until thickened to a very thick consistency. It should almost be the consistency of a semi thinned out condensed soup. Remove from the heat and stir in spices and 1 1/2 cups of the cheeses, stirring to melt and combine. Stir in another 1 1/2 cups of cheese, and stir until completely melted and smooth. In a large mixing bowl, combine drained pasta with cheese sauce, stirring to combine fully. Pour half of the pasta mixture into the prepared baking dish. Top with 1 1/2 cups of shredded cheeses, then top that with the remaining pasta mixture. Sprinkle the top with the last 1 1/2 cups of cheese and bake for 15 minutes, until cheesy is bubbly and lightly golden brown.',
      image:
        'https://www.thechunkychef.com/wp-content/uploads/2018/02/Ultimate-Creamy-Baked-Mac-and-Cheese-feat-1-320x320.jpg'
    },
    {
      name: 'Steak Fajitas',
      difficulty_Level: 'Difficulty Level: Hard',
      time: '1 hour, plus 4 hours of marinating',
      servings: '4 servings',
      ingredients:
        '1 tablespoon cumin seeds, lightly toasted and ground, 1 teaspoon chipotle or ancho chile powder, 1 teaspoon salt, more to taste, 1 1/4pounds flank or skirt steak , Zest of 1 lime (2 teaspoons), 1/4 cup fresh lime juice, 1/4 cup plus 2 tablespoons extra-virgin olive oil, 1 tablespoon Worcestershire sauce, 4 large garlic cloves, minced, 1 large red or yellow onion, halved and sliced, 2 red bell peppers (or 1 red and 1 orange or yellow), seeded and sliced 1/4 inch thick, 1 green bell pepper, seeded and sliced 1/4 inch thick, 1 jalapeño or 2 serrano chiles, minced, 1/4 cup chopped cilantro, 4 large flour or 8 corn tortillas, 1 teaspoon grapeseed or canola oil, 1 romaine heart, cut crosswise into 1-inch wide pieces, Salsa fresca, for serving (see recipe), Queso fresco, for sprinkling',
      directions:
        "Combine 2 teaspoons ground cumin, the chile powder and 1 teaspoon salt. With a sharp knife, cut shallow crosshatched incisions across top and bottom surfaces of steak. Rub spice mix all over surface of steak. (It's best to wear gloves as the chile powder is hot.) Place steak in a resealable freezer bag. In a small bowl, whisk together lime juice and zest, ¼ cup olive oil, the Worcestershire sauce and half the garlic. Reserve 2 tablespoons of the marinade and pour the rest into the bag with steak. Seal and move steak around in bag to coat thoroughly. Place on a sheet pan and refrigerate for at least 4 hours and up to 24 hours. Massage bag periodically to redistribute marinade. Refrigerate reserved marinade if cooking the next day. Heat 2 tablespoons olive oil in a large, heavy skillet over medium-high heat. Add onions and cook, stirring, until they soften and begin to color, 4 to 5 minutes. Stir in bell peppers and chile. Cook, stirring, until peppers begin to soften, about 3 minutes.Lower heat to medium, add remaining garlic and cumin, and salt to taste. Cook, stirring often, until peppers are nicely seared, softened and beginning to caramelize, 5 to 8 minutes. Pour in reserved 2 tablespoons marinade and scrape bottom of pan with a wooden spoon to deglaze. Stir in half the cilantro. Taste and adjust seasoning. Remove from heat but keep warm. Wrap tortillas in foil and warm in a low oven, or wrap in a towel and warm in a steamer or in the microwave. Heat a large cast iron skillet over medium-high heat,  or prepare a medium-hot grill. Remove meat from marinade and discard marinade. Pat meat dry with paper towels. If using a skillet, heat remaining 1 tablespoon oil in skillet. (If your skillet is not large enough for the steak, cut it in half and cook in batches.) Cook for 3 to 4 minutes per side. Meat should be medium rare. Remove to a cutting board, cover with foil and let sit for 10 minutes. Cut across the grain into ½- to ¾-inch wide strips. Arrange lettuce on a platter, then place steak next to lettuce. Tip juices from cutting board over meat and sprinkle with remaining cilantro. Serve vegetables on the same platter or separately, along with warm tortillas, salsa and crumbled queso fresco.",
      image:
        'https://static01.nyt.com/images/2016/05/11/dining/11FAJITAS1/11FAJITAS1-master768.jpg?w=1280&q=75'
    },
    {
      name: 'Stuffed Shells',
      difficulty_Level: 'Difficulty Level: Easy',
      time: '1 hrs 5 mins',
      servings: '10 servings',
      ingredients:
        '1 (12 ounce) package jumbo pasta shells, 1 (32 ounce) container ricotta cheese, 1 pound shredded mozzarella cheese, divided, 8 ounces grated Parmesan cheese, divided, 2 large eggs, beaten, 1 tablespoon dried parsley, 1 teaspoon salt, or more to taste, 1 teaspoon ground black pepper, 1 (28 ounce) jar pasta sauce, 8 ounces sliced fresh mushrooms',
      directions:
        'Preheat the oven to 350 degrees F (175 degrees C). Bring a large pot of lightly salted water to a boil. Add pasta and cook until tender yet firm to the bite, 8 to 10 minutes. While the pasta is cooking, mix ricotta cheese, 1/2 of the mozzarella cheese, 1/2 of the Parmesan cheese, eggs, parsley, salt, and pepper in a large bowl until well combined. Combine pasta sauce and mushrooms in a medium bowl. Add remaining mozzarella and Parmesan cheeses; stir until well combined. Drain shells. Stuff shells with ricotta mixture and place in a 9x13-inch baking dish. Pour pasta sauce mixture over the shells. Bake in the preheated oven until edges are bubbly and the shells are slightly set, 35 to 60 minutes.',
      image:
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8285661.jpg&q=60&c=sc&orient=true&poi=auto&h=512'
    },
    {
      name: 'Fried Rice',
      difficulty_Level: 'Difficulty Level: Easy',
      time: '20 min',
      servings: '8 servings',
      ingredients:
        '2/3cup chopped baby carrots, 1/2 cup frozen green peas, 2 tablespoons vegetable oil, 1 clove garlic, minced, or to taste (Optional), 2 large eggs, 3 cups leftover cooked white rice 1 tablespoon soy sauce, or more to taste, 2 teaspoons sesame oil, or to taste',
      directions:
        'Place carrots in a small saucepan and cover with water. Bring to a low boil and cook for 3 to 5 minutes. Stir in peas, then immediately drain in a colander. Heat a wok over high heat. Pour in vegetable oil, then stir in carrots, peas, and garlic; cook for about 30 seconds. Add eggs; stir quickly to scramble eggs with vegetables. Stir in cooked rice. Add soy sauce and toss rice to coat. Drizzle with sesame oil and toss again.',
      image:
        'https://www.allrecipes.com/thmb/BiWSuzV8rgP7ShH67xvohdgje3o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/79543-fried-rice-restaurant-style-mfs-51-155e83b4e4444e2292707287a56ddd93.jpg'
    },
    {
      name: 'Indian Chicken Curry (Murgh Kari)',
      difficulty_Level: 'Difficulty Level: Hard',
      time: '1 hr',
      servings: '6 servings',
      ingredients:
        '2 pounds skinless, boneless chicken breast halves, 2 teaspoons salt, ½ cup cooking oil, 1 ½ cups chopped onion, 1 tablespoon minced garlic, 1 ½ teaspoons minced fresh ginger root, 1 tablespoon curry powder, 1 teaspoon ground cumin, 1 teaspoon ground turmeric, 1 teaspoon ground coriander, 1 teaspoon cayenne pepper, 1 tablespoon water, 1 (15 ounce) can crushed tomatoes, 1 cup plain yogurt, 1 tablespoon chopped fresh cilantro, 1 teaspoon salt, ½ cup water, 1 teaspoon garam masala, 1 tablespoon chopped fresh cilantro, 1 tablespoon fresh lemon juice',
      directions:
        'Sprinkle the chicken breasts with 2 teaspoons salt. Heat oil in a large skillet over high heat; partially cook the chicken in the hot oil in batches until completely browned on all sides. Transfer browned chicken breasts to a plate and set aside. Reduce the heat to medium and add onion, garlic, and ginger to the oil remaining in the skillet. Cook and stir until onion turns soft and translucent, 5 to 8 minutes. Stir curry powder, cumin, turmeric, coriander, cayenne, and 1 tablespoon of water into the onion mixture; allow to heat together for about 1 minute while stirring. Add tomatoes, yogurt, 1 tablespoon chopped cilantro, and 1 teaspoon salt to the mixture; stir to combine. Return chicken breast to the skillet along with any juices on the plate. Pour in 1/2 cup water and bring to a boil, turning the chicken to coat with the sauce. Sprinkle garam masala and 1 tablespoon cilantro over the chicken. Cover the skillet and simmer until chicken breasts are no longer pink in the center and the juices run clear, about 20 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C). Drizzle with lemon juice to serve.',
      image:
        'https://www.allrecipes.com/thmb/wHaENcWU-V4KMkkjXo3Er6YuPi8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/212721-Indian-Chicken-Curry-Murgh-Kari-mfs_005-8570fd9bcab845519550c6ff5c71e213.jpg'
    },
    {
      name: 'Creamy Chicken Chimichanga',
      difficulty_Level: 'Difficulty Level: Medium',
      time: '45 min',
      servings: '6 servings',
      ingredients:
        '1 onion, diced, 2 cloves garlic, minced, 1 bell pepper, diced, 1 jalapeño, diced, 1 teaspoon salt, ½ teaspoon pepper, 4 cups rotisserie chicken, shredded, 1 cup corn, 1 teaspoon cumin, 1 teaspoon paprika, 8 oz cream cheese, 6 flour tortillas, 2 cups cheese blend, oil, for frying, sour cream, for serving, pico de gallo, for serving',
      directions:
        'Add onion, garlic, bell pepper, and jalapeño to a lightly oiled sauté pan. Season with salt and pepper, then cook until onions are translucent. Once veggies are fully cooked add in chicken, corn, cumin, and paprika. Mix together until fully combined. Remove chicken from the heat and place in a large mixing bowl. Add in cream cheese and mix until chicken becomes creamy. Using a medium-sized ice cream scooper. Scoop out 2 portions of creamy chicken and place on flour tortilla. Top with cheese blend then roll tightly into a burrito. Preheat oil to 325ºF (170ºC). Place burrito into shallow oil, flap side down to create a seal and cook for 2-3 minutes on both sides or until golden brown. Top with sour cream and pico de gallo. Enjoy!',
      image:
        'https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/tips/919a490097e64632b2c65f8dfcc76c33.jpeg?downsize=800:*&output-format=auto&output-quality=auto'
    },
    {
      name: 'Pizza Margherita',
      difficulty_Level: 'Difficulty Level: Medium',
      time: '15 minutes, plus 1 hour to heat oven',
      servings: '2 servings',
      ingredients:
        '112-inch round of pizza dough, stretched (see recipe), 3 tablespoons tomato sauce, Extra-virgin olive oil, 2¾ounces fresh mozzarella, 4 to 5 basil leaves, roughly torn',
      directions:
        'Place a pizza stone or tiles on the middle rack of your oven and turn heat to its highest setting. Let it heat for at least an hour. Put the sauce in the center of the stretched dough and use the back of a spoon to spread it evenly across the surface, stopping approximately ½ inch from the edges. Drizzle a little olive oil over the pie. Break the cheese into large pieces and place these gently on the sauce. Scatter basil leaves over the top. Using a pizza peel, pick up the pie and slide it onto the heated stone or tiles in the oven. Bake until the crust is golden brown and the cheese is bubbling, approximately 4 to 8 minutes.',
      image:
        'https://static01.nyt.com/images/2014/04/09/dining/09JPPIZZA2/09JPPIZZA2-articleLarge-v3.jpg?w=1280&q=75'
    },
    {
      name: 'Veggie Lo Mein',
      difficulty_Level: 'Difficulty Level: Easy',
      time: '25 mins',
      servings: '8 servings',
      ingredients:
        '1/4 cup vegetable broth, 3 tbsp soy sauce, 2 tbsp brown sugar, 1 tbsp sesame oil',
      directions:
        '8 oz lo mein noodles (cooked according to package instructions), 1 large carrot julienne, 1 cup broccoli chopped, 1 large red bell pepper sliced, 1 medium onion sliced, 4 garlic cloves, 1 tbsp oil for frying',
      image:
        'https://cdn.momsdish.com/wp-content/uploads/2020/04/Veggie-Lo-Mein-Under-30-Minutes-07-1200x800.jpg'
    },
    {
      name: 'Seafood and Chicken Paella with Chorizo',
      difficulty_Level: 'Difficulty Level: Hard',
      time: '45 mins',
      servings: '6 servings',
      ingredients:
        '4 ounces fresh chorizo, casings removed, 1 small onion, thinly sliced, 1 garlic clove, thinly sliced, 1/2 cup canned diced tomatoes, 1 cup arborio rice, Pinch of saffron threads dissolved in 2 tablespoons of water, 1 1/2 cups water, Salt and freshly ground black pepper, 1/4 cup plus 1 tablespoon extra-virgin olive oil, 1 pound large shrimp, shelled and deveined, 1/4 cup dry white wine, 1 tablespoon fresh lemon juice, 1/2 pound mussels, scrubbed and debearded, 1/2 pound cockles, scrubbed and rinsed, 1 1/2 cups sliced cooked chicken, preferably dark meat (8 ounces), 2 tablespoons chopped flat-leaf parsley, 1 scallion, thinly sliced',
      directions:
        'Preheat the oven to 350°F. In a 10-inch paella pan or ovenproof skillet, cook the chorizo over moderate heat, breaking it up with a spoon, until some of the fat is rendered and the chorizo is browned, 4 minutes. Add the onion and garlic and cook over low heat, stirring, until softened and just beginning to brown, 8 minutes. Stir in the tomatoes, rice, saffron with its liquid, and the 1 1/2 cups of water. Season with salt and pepper; raise the heat and bring to a boil. Cover and simmer over low heat, without stirring, until the rice is al dente and the liquid is absorbed, 15 minutes. In a large skillet, heat the 1/4 cup of olive oil until shimmering. Season the shrimp with salt and pepper, add them to the skillet, and cook over high heat, turning once, until pink and cooked through, about 3 minutes. Using a slotted spoon, transfer the shrimp to the rice. Discard the oil. Wipe out the skillet. Pour in the wine and lemon juice. Add the mussels and cockles, cover, and cook, shaking the skillet, until the mussels open, about 3 minutes. Pour the mussels and cockles and their cooking liquid over the rice. Stir the cooked chicken into the rice. Cover and cook in the oven for about 5 minutes, until the paella is just heated through. Garnish with the parsley and scallion, drizzle with the remaining 1 tablespoon of olive oil, and serve.',
      image:
        'https://www.foodandwine.com/recipes/seafood-and-chicken-paella-chorizo'
    }
  ]
  await food.insertMany(foods)
  console.log('Created some food entries!')
}
const run = async () => {
  await main()
  db.close()
}
run()
