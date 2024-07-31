// import './App.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './style.css';
import { useState } from 'react';

function App({updateInfo}) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "0c88dd303830b76572c058dcb03eac77";

  let getWeatherInfo = async() => {
    try{
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let Jsonresponse = await response.json();
      let result = {
        temp: Jsonresponse.main.temp,
        tempMin: Jsonresponse.main.temp_min,
        tempMax: Jsonresponse.main.temp_max,
        humidity: Jsonresponse.main.humidity,
        feelsLike: Jsonresponse.main.feels_like,
        weather: Jsonresponse.weather[0].description,
        city: Jsonresponse.name
      }
      console.log(result);
    return result;
    } catch(error){
      throw error;
    }
    
  }
  
  let handleChange = (event) => {
    setCity(event.target.value);
  }

  let handlesubmit = async (event) => {
    try{
      event.preventDefault();
      console.log(city);
      setCity('');
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setError(false);
    } catch (error){
      setError(true);
    }
  }

  return (
    <>
      <div className='searchbox'>
        <h3>Search for Weather</h3>
        <form action="" onSubmit={handlesubmit}>
          <TextField id="city" label="City name" variant="outlined" value={city} onChange={handleChange} required/><br /><br />
          <Button variant="contained" type='submit'>Search</Button>
        </form>

      </div>
      <center>{error && <p style={{color: "red"}}>No such place exists in our service.</p>}</center>
    </>
  )
}

export default App
