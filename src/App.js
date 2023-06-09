import {useState, useEffect} from 'react';
import './App.css';


function App() {
  


  const apiKey = 'd38b20925679d2d417fddef4f8cb381a'
  //const APIcall = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`


  const [info, setInfo] = useState({})
  const [location, setLocation] = useState("")

    
  function searchLocation() {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`)
        .then(resp => resp.json())
        .then(data => {
              //console.log(data.main.temp)
              setInfo(data)
        })
        .catch(error => console.log(error))
                console.log(info)
 }
 
  

  return (
    <div className="App">
      <h1>Meme Weather</h1>
      <div className='search'>
        <input type='text'
               value={location}
               onChange={e => setLocation(e.target.value)}
               onKeyDown={searchLocation}
               >
               
        </input>
      </div>
      
      <div className='city'>
        <h2>{info.name}</h2>
      </div>
      
      <div className='Temp'>
        {info.main ? <h1>{info.main.temp.toFixed()}F</h1> : null}
      </div>

      <div className='Desc'>
        {info.weather ? <h2>{info.weather[0].main}</h2> : null}
      </div>
      
      <div className='feels-like'>
        <p>Feels like</p>
        {info.main ? <p>{info.main.feels_like.toFixed()}F</p> : null}
      </div>
      
      <div className ='minMax'>
      <span>Min:  </span>
        {info.main ? <span>{info.main.temp_min.toFixed()}F</span> : null}
        <span> Max: </span>
        {info.main ? <span>{info.main.temp_max.toFixed()}F</span> : null}
      </div>
        
    </div>
  );
}

export default App;
