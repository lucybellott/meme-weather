import {useState, useEffect} from 'react';
import './App.css';


function App() {
  


  const apiKey = 'd38b20925679d2d417fddef4f8cb381a'


const [weather, setWeather] = useState({})

  useEffect(() => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apiKey}
    `)
    .then(resp => resp.json())
    .then(data => {
          console.log(data)
    })
    }, [])
  
  
  
  
  
  
  
  
  
  return (
    <div className="App">
    <h1>Meme Weather</h1>
    </div>
  );
}

export default App;
