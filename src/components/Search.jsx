import React from 'react'

export default function Search({handleSearch}) {

    
  return (
    <div>
        <label id='search' >Search</label> 
        <br/>
        <input htmlFor='search' type='text' placeholder='Enter search query' onChange={handleSearch}/>
    </div>
  )
}
