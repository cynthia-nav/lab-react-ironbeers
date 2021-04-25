import React, {useEffect, useState} from 'react';
import NavBar from "./NavBar";
import axios from 'axios';

function RandomBeer(props) {

    const [beers, setBeers] = useState([])
    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then(response => {
            setBeers(response.data)
        })
    }, [])

    return (
        <div>
        <NavBar/>
            <div>
            <img className="beerpic" src={beers.image_url}/>
            <div><b>Name:</b>{beers.name}</div><br></br>
            <div><b>Tagline:</b>{beers.tagline}</div><br></br>
            <div><b>First Brewed:</b>{beers.first_brewed}</div><br></br>
            <div><b>Description:</b>{beers.description}</div>
            
            </div>
        </div>
    );
}

export default RandomBeer;