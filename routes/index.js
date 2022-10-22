const { Router } = require('express')
const fControllers = require('../controllers/foodIndex')
const mControllers = require('../controllers/mocktailIndex')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))
router.get('/foods', fControllers.getAllFoods)
router.get('/foods/:id', fControllers.getFoodById)
router.post('/foods', fControllers.createFood)
router.put('/foods/:id', fControllers.updateFood)
router.delete('/foods/:id', fControllers.deleteFood)
router.post('/mocktails', mControllers.createMocktail)
router.get('/mocktails', mControllers.getAllMocktails)
router.get('/mocktails/:id', mControllers.getMocktailById)
router.put('/mocktails/:id', mControllers.updateMocktail)
router.delete('/mocktails/:id', mControllers.deleteMocktail)

module.exports = router
