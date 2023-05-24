import {useState, useEffect} from 'react';
import './App.css';


function App() {
  


  const apiKey = 'd38b20925679d2d417fddef4f8cb381a'
  //const APIcall = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`


  const [weather, setWeather] = useState({})

    useEffect(() => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=dallas&units=imperial&appid=${apiKey}`)
      .then(resp => resp.json())
      .then(data => {
            console.log(data)
      })
      }, [])
  
  
  

  return (
    <div className="App">
    <h1>Meme Weather</h1>
    <div className='search'>
      <input type='text'></input>
    </div>
    <div className='city'>
      <h2>City</h2>
    </div>
    <div className='Temp'>
      <h1>60F</h1>
    </div>
    <div className='feels-like'>
      <p>Feels like</p>
    </div>
    </div>
  );
}

export default App;
