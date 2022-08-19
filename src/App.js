import React, {useState} from 'react';
import foods from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [dish, setDish] = useState(foods)
  const [show, setShow] = useState(false);

  const handleNewFood = (food) => {
    const copy = [...dish, food];
    setDish(copy)
  } 

  const handleDelete = (foodName) => {
    const filtered = dish.filter(item => item.name !== foodName)
    setDish(filtered)
   }

   const handleSearch = (e) =>  {
    if(e.target.value === ''){
      setDish(foods)
    } else {
      const filtered = dish.filter(item => item.name.toLowerCase().includes((e.target.value).toLowerCase()))
      setDish(filtered)
    }
   
}
//Iteration 7 | Bonus | Hide the Add Food Form
  const showForm = () => {
    const value = !show
    console.log(value)
    setShow(value)
  }

  const allItems = dish.map(item => {
    return (
      <FoodBox  key={item.name} food={item} handleDelete={handleDelete}/>
    )
    
  })
 
 
  return (
    <div className="App">
   
    <Search handleSearch={handleSearch}/>
    <button onClick={() => showForm()}>{show ? 'Hide' : 'Show' } Form</button> <br/>
    {show && <AddFoodForm onCreate={handleNewFood}/>}
    
    {allItems}
    </div>
  );
}

export default App;
