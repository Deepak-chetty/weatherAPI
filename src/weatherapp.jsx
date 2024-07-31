import { useState } from "react";
import App from "./App";
import Infobox from "./infobox";



export default function Weatherapp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Hyderabad",
        feelsLike: 31.59,
        humidity: 61,
        temp: 29.23,
        tempMax: 29.23,
        tempMin: 27.73,
        weather: "haze"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <>
            <App updateInfo={updateInfo}/>
            <Infobox info={weatherInfo}/>
        </>
    )
}