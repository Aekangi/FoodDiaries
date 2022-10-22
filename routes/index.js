const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))
router.get('/foods', controllers.getAllFoods)
router.get('/foods/:id', controllers.getFoodById)
router.post('/foods', controllers.createFood)
router.put('/foods/:id', controllers.updateFood)
router.delete('/foods/:id', controllers.deleteFood)
module.exports = router
