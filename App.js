import logo from './logo.svg';
import './App.css';
//import './styles.css';
import {useState, useEffect} from 'react';
import beerGif from './images/drinking-beer.gif';

function App() {

const baseURI = "https://random-data-api.com/api/";

const [beers, setBeers] = useState([]);

useEffect( () => {

  const fetchBeerData = async () => {
    
    const res = await fetch(baseURI+'beer/random_beer?size=12');
    
    const beerData = await res.json();
    console.log(beerData)
    setBeers(beerData);
  };
  fetchBeerData();
}, []);

const beerInfo = beers.map((beer)=>{
    return <div >
       <table class="table">
  <tr>
    <th>Name</th>
    <th>Alchol</th>
    <th>Style</th>
  </tr>
  <tr>
    <td>{beer.name}</td>
    <td>{beer.alcohol}</td>
    <td>{beer.style}</td>
  </tr>
</table> 


    </div>
})


  return (
    <div className="App">
      <header className="App-header">
        <h1> 12 Random Beers</h1>
        <p>Useful for those moments when you can't<br/> decide what beer you want to drink.</p> 
        <h4 id="display-header">Displaying: Name, alchohol % and style.</h4>

        <img id="gif" src={beerGif} alt="logo" />
        <div class="container">
             {beers && beerInfo}
        </div>
      </header>

    </div>
  );
}

export default App;
