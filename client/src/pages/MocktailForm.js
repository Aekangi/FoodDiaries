import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const MocktailForm = () => {
  let navigate = useNavigate()
  const initialForm = {
    name: '',
    image: '',
    difficulty_Level: '',
    time: '',
    servings: '',
    ingredients: '',
    directions: ''
  }
}
export default MocktailForm
