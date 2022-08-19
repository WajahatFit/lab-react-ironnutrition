import React from 'react'
import { Card, Col, Button } from 'antd';

function FoodBox({food, handleDelete}) {

   
    const totalCalories = food.calories * food.servings
    
    
    
    return (
        <div className='card'>
         <Col>
          <Card
            title={food.name}
            style={{ width: 230, height: 300, margin: 10 }}
          >
            <img src={food.image} height={60} alt={food.name} />
            <p>Calories: {food.calories}</p>
            <p>Servings: {food.servings}</p>
            <p>
              <b>Total Calories: {totalCalories} </b> kcal
            </p>
            <Button type="primary" onClick={() => handleDelete(food.name)}> Delete </Button>
            
          </Card>
        </Col>
    
     
        </div>      
    )
  }
  
  export default FoodBox;
  