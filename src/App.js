import React from 'react';
import './App.css';
import Home from './Home';
import { Route, Switch} from 'react-router-dom'
import AllBeers from './AllBeers';
import BeerDetails from './BeerDetails';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';

function App() {
  return (
    <div className="App">
    
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route exact path="/allbeers" component={AllBeers}/>
        <Route exact path="/beer/:beerid" component={BeerDetails}/>
        <Route exact path="/randombeer" component={RandomBeer}/>
        <Route exact path="/newbeer" component={NewBeer}/>
      </Switch>
    </div>
  );
}

export default App;
