const Mocktail = require('../models/mocktail')

const createMocktail = async (req, res) => {
  try {
    const mocktail = await new Mocktail(req.body)
    await mocktail.save()
    return res.status(201).json({
      mocktail
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllMocktails = async (req, res) => {
  try {
    const mocktails = await Mocktail.find()
    return res.status(200).json({ mocktails })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getMocktailById = async (req, res) => {
  try {
    const { id } = req.params
    const mocktail = await Mocktail.findById(id)
    if (mocktail) {
      return res.status(200).json({ mocktail })
    }
    return res.status(404).send('Mocktail with the specified ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateMocktail = async (req, res) => {
  try {
    const mocktail = await Mocktail.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(mocktail)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteMocktail = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Mocktail.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Mocktail deleted')
    }
    throw new Error('Mocktail not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createMocktail,
  getAllMocktails,
  getMocktailById,
  updateMocktail,
  deleteMocktail
}
