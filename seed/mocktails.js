const db = require('../db')
const Mocktail = require('../models/mocktail')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  Mocktail.collection.drop()
  const mocktails = [
    {
      name: 'Piña Colada',
      difficulty_Level: 'Diificulty level: Easy',
      time: '5 mins',
      servings: '2 to 3 servings',
      ingredients:
        '1 1/2 cups unsweetened frozen pineapple chunks, 1/4 cup ice, 3/4 cup unsweetened pineapple juice, 3/4 cup unsweetened coconut milk, 1 to 3 tablespoons brown sugar, optional, Fresh pineapple wedges, garnish, Maraschino cherries, garnish',
      directions:
        'Gather the ingredients. Place frozen pineapple chunks and ice in blender. Pour pineapple juice and coconut milk over top. Add brown sugar, if using. Puree until smooth. Taste to test the sweetness and add more sugar, if needed. Pour into glasses and garnish with fresh pineapple wedges or a maraschino cherry. ',
      image:
        'https://www.thespruceeats.com/thmb/qLirH3w3AKy2pn0KRbFJz01d42A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/virgin-pina-colada-recipe-2097115-carrie-parente-20201-86e8703343a5438593bb1a55078315b7.jpg'
    },
    {
      name: 'Strawberry Daiquiri',
      difficulty_Level: 'Diificulty level: Easy',
      time: '5 minutes',
      servings: '2 servings',
      ingredients:
        '2 cups frozen strawberries, ½ cup fresh strawberries, ½ cup lime juice, ½ cup maple syrup or your sweetener of choice, 60 mill non-alcoholic rum or a couple of drops of bitters optional',
      directions:
        "Blend all ingredients together in a high speed blender. Test the consistency. If it's too thick, add ¼ cup water. Blend then test again. Add a little more if required until it reaches the desired consistency. Test the flavor. Add a little extra sweetener or lime to taste. Blend again and serve garnished with fresh strawberries and lime.",
      image:
        'https://mindfulmocktail.com/wp-content/uploads/2020/08/virgin-strawberry-daiquiri-recipe-1638x2048.jpg'
    },
    {
      name: 'Mai Tai Mocktail Party Punch ',
      difficulty_Level: 'Diificulty level: Medium',
      time: '5 minutes',
      servings: '3 LITERS',
      ingredients:
        '1 liter orange juice, 1 liter pineapple juice, 1/2 cup lime juice, 1/2 cup almond syrup, 1/2 cup grenadine, 1 liter sparkling/seltzer water, Ice, oranges, limes, cherries for garnish',
      directions:
        'In a pitcher, mix together orange juice, pineapple juice, lime juice and almond syrup. You can keep this punch base in the fridge until party time. Once ready to serve you can serve in individual glasses by adding ice to a cup, filling the cup 1/2 full of juice, adding a splash of grenadine and then topping it off with seltzer water and garnishing with fruit. To serve in a big punch bowl, mix grenadine and seltzer water to juice and stir together, then add ice and fruit.',
      image: 'https://lizoncall.com/wp-content/uploads/2016/04/Mai-Tai-3.jpg'
    },
    {
      name: 'Margarita',
      difficulty_Level: 'Diificulty level: Medium',
      time: '5 mins',
      servings: '3 servings',
      ingredients:
        '6 ounces simple syrup (1 part sugar and 1 part water), 3 ounces lime juice, 3 ounces lemon juice, 3 ounces orange juice, ice to taste, 3 taste lime wedges, for garnish',
      directions:
        'Combine the ingredients in a cocktail shaker filled with ice and shake vigorously. Pour into a glass. Note: If serving frozen, combine the ingredients in a blender with 3/4 cup ice and blend until smooth. Pour into a glass. Garnish with a lime wedge.',
      image:
        'https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_73,ar_16:9,w_1024/v1/img/recipes/43/35/47/zxlLnEukTKGjBtHv5jib_IMG_8362.jpg'
    },
    {
      name: 'Moscow Mule',
      difficulty_Level: 'Diificulty level: Hard',
      time: '5 mins',
      servings: '2 servings',
      ingredients:
        "1 1/2 cups crushed ice, 1 cup Reed's ginger beer, juice of 2 medium limes (about 4 tablespoons), 1/3 cup club soda or sparkling water, fresh mint, for garnish, 2 lime wedges, for garnish",
      directions:
        'Fill two copper mule mugs 2/3 full with ice. Top with ginger beer, lime juice, and club soda. Stir to combine. Garnish with mint and lime wedges and enjoy immediately.',
      image:
        'https://i2.wp.com/www.yummymummykitchen.com/wp-content/uploads/2019/12/moscow-mule-ginger-beer-mocktail-3.jpg'
    },
    {
      name: 'Sangria',
      difficulty_Level: 'Diificulty level: Hard',
      time: '1 hour 10 minutes',
      servings: '4 servings',
      ingredients:
        '1 orange sliced into rings, 1 lemon sliced into rings, 35 mls maple syrup or sweetener of choice, 1 green apple sliced into wedges, 150 mls orange juice, 750 mls bottle of alcohol-free red wine or juice alternative, 500 mls sparkling beverage of your choice.',
      directions:
        "Place orange, lemon and sweetener of choice in a large glass pitcher. Muddle gently until some of the juice are released from the fruit. If you don't have a muddler, use the back end of a wooden spoon or similar. Add the apple wedges, orange juice and non alcoholic wine or alternative. Stir gently to combine all ingredients. Place in the fridge for at least an hour. I recommend 3-4 hours. Taste and add more sweetener if needed. Just before serving, add your sparkling beverage of choice (if making the sparkling version). Stir gently. Serve and enjoy.",
      image:
        'https://mindfulmocktail.com/wp-content/uploads/2021/04/non-alcoholic-sangria-mocktail-recipe-edited.jpg'
    },
    {
      name: 'BLUE LAGOON',
      difficulty_Level: 'Diificulty level: Hard',
      time: '5 minutes',
      servings: '2 drinks',
      ingredients:
        '½ cup Blue Curacao syrup, 4 tablespoons freshly squeezed lemon juice, 24 fl oz lemon-lime soda, such as Sprite, Lemon slice, for garnish, Ice, optional',
      directions:
        'Squeeze the juice from a fresh lemon using a citrus reamer. Fill a 15-ounce highball glass with two or three ice cubes, if desired. Pour the blue Curaçao syrup and lemon juice into the glass, then slowly fill the rest of the glass with the Sprite.  Stir gently to combine. Garnish the drink with a lemon slice and a paper straw.  Enjoy immediately.',
      image:
        'https://savortheflavour.com/wp-content/uploads/2020/07/Blue-Lagoon-Mocktail.jpg'
    },
    {
      name: 'Appletini',
      difficulty_Level: 'Diificulty level: Medium',
      time: '5 minutes',
      servings: '4 servings',
      ingredients:
        'Apple Juice-60 ml, Lemon Juice-30 ml, Green Apple Syrup-30 ml, Ice cubes-a few',
      directions:
        'Add the apple juice, lemon juice, green apple juice and ice cubes into a cocktail shaker. Shake it well. Pour it into a cocktail glass and serve. You can garnish with a few green apple slices.',
      image:
        'https://foodtokwithsherin.com/wp-content/uploads/2022/08/DSC_1902-2-850x560.jpg'
    },
    {
      name: 'Peach Bellini',
      difficulty_Level: 'Diificulty level: Easy',
      time: '10 minutes',
      servings: '4 servings',
      ingredients:
        '2 peaches, peeled, pitted and sliced, 2 cups peach juice, 2 cups sparkling apple cider, ½ cup fresh raspberries, Ice, Mint for garnish',
      directions:
        'Place the fresh peach slices and peach juice in a blender and puree until very smooth. Add the sparkling apple cider to the blender and pulse once or twice to just combine the juice and cider. You don’t want to over mix or the cider will loose its effervescence. Pour the peach bellini into glasses filled with ice. Garnish with a raspberry and mint leaf. Enjoy cold!',
      image:
        'https://mocktail.net/wp-content/uploads/2021/05/Non-Alcoholic-Bellini_IG.jpg'
    }
  ]
  await Mocktail.insertMany(mocktails)
  console.log('Created some mocktails!')
}
const run = async () => {
  await main()
  db.close()
}

run()
