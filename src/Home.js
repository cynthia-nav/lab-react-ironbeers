import React from 'react';
import {Link} from 'react-router-dom';
import beerspic from './beers.png';
import randompic from './random-beer.png';
import newbeerpic from './new-beer.png';

function Home(props) {
    return (
        <div className="homepage">
            <div>
            <img src={beerspic}/>
            <Link to="/allbeers"><h2>All Beers</h2></Link>
            <p>
            I'm baby cliche coloring book selvage adaptogen. Cray lomo keytar intelligentsia sustainable, hell of echo park lyft chicharrones dreamcatcher cliche prism drinking vinegar thundercats. 
            </p>
            </div>
            <div>
            <img src={randompic}/>
            <Link to="/randombeer"><h2>Random Beer</h2></Link>
            <p>
            I'm baby cliche coloring book selvage adaptogen. Cray lomo keytar intelligentsia sustainable, hell of echo park lyft chicharrones dreamcatcher cliche prism drinking vinegar thundercats.
            </p>
            </div> 
            <div>
            <img src={newbeerpic}/>
            <Link to="/newbeer"><h2>New Beer</h2></Link>
            <p>
            I'm baby cliche coloring book selvage adaptogen. Cray lomo keytar intelligentsia sustainable, hell of echo park lyft chicharrones dreamcatcher cliche prism drinking vinegar thundercats.
            </p>
            </div> 
            
        </div>
    );
}

export default Home;