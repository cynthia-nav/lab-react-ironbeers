import React, {useEffect, useState} from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import {Link} from 'react-router-dom';

function AllBeers(props) {
    const [beers, setBeers] = useState([])
    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => {
            setBeers(response.data)
        })
    }, [])

    let newBeer = () => {
        return beers.map((beer) => {
            return (
                <Link to={`/beer/${beer._id}`}>
                <div className="beerDiv">
                    <img className="beerpic" src={beer.image_url}/>
                    {beer.name}<br></br>
                    {beer.tagline}
                   
                   </div> 
                </Link>
            )
        })
    }


    return (
        <div>
        <NavBar/>
        
            {newBeer()}
           
        </div>
    );
}

export default AllBeers;

