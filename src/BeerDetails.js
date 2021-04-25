import React, {useState, useEffect} from 'react';
import NavBar from './NavBar';
import axios from 'axios';

function BeerDetails(props) {

    const [beers, setBeers] = useState([])
    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${props.match.params.beerid}`)
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

export default BeerDetails;