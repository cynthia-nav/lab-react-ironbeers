import React, {useState} from 'react';
import Navbar from './NavBar';
import axios from 'axios';


function NewBeer(props) {
    const [newBeer, setNewBeer] = useState({})
    

    function handleChange(e) {
        e.persist()
        console.log(e)
        newBeer[e.target.name] = e.target.value
        setNewBeer(newBeer)
        console.log(newBeer)
    }
    

    function handleSubmit(e) {
        e.preventDefault()
        axios
        .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
    }

    return (
        <div>
        <Navbar/>
        <div className="newbeer">
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" onChange={handleChange}/>
            <label>Tagline:</label>
            <input type="text" name="tagline" onChange={handleChange}/>
            <label>Description:</label>
            <input type="text" name="description" onChange={handleChange}/>
            <label>First Brewed:</label>
            <input type="text" name="firstBrewed" onChange={handleChange}/>
            <label>Contributed By:</label>
            <input type="text" name="contributor" onChange={handleChange}/>
            <button type="submit" value="Submit">Add New</button>
        </form>
        </div>
        <div>
    
        </div>
        </div>
    )
}
  

export default NewBeer;