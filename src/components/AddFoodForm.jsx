import React, {useState} from 'react'
import { Input } from 'antd';

export default function AddFoodForm({onCreate}) {


    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [calories, setCalories] = useState('')
    const [servings, setServings] = useState('')
    

    const handleForm = (e) => {
        e.preventDefault();
        const food = {
            name,
            image,
            calories: parseInt(calories),
            servings: parseInt(servings)
        }
    onCreate(food)
    setName('')
    setImage('')
    setCalories('')
    setServings('')
    }


  return (
    <div>
    <h1>Add Food Entry</h1>
    <form onSubmit={handleForm}>
        <label>Name:</label>
        <Input type='text' onChange={(e) => {setName(e.target.value)}} placeholder='name' value={name}/>
        <label>Image:</label>
        <Input type='text' onChange={e => {setImage(e.target.value)}} placeholder='image' value={image}/>
        <label>Calories:</label>
        <Input type='number' onChange={e => {setCalories(e.target.value)}} placeholder='calories' value={calories}/>
        <label>Servings:</label>
        <Input type='number'onChange={e => {setServings(e.target.value)}} placeholder='servings' value={servings}/> 
        <br/>
        <button type='submit'>Create Dish</button>
    </form>
        
    </div>
  )
}
