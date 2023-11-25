import { useEffect, useState } from "react";
import "./Weather.css";
import axios from "axios";
import { WeatherItem } from "./WeatherItem";
import { SearchWeather } from "./SearchWeather";

// const [weatherData, setWeatherData] = useState([]);

export function Weather() {
    const [weatherData, setWeatherData] = useState([]);
    const [weatherDataAfterFilter, setWeatherDataAfterFilter] = useState([]);
    const getWeatherData = () => {
        axios
            .get("https://danepubliczne.imgw.pl/api/data/synop")
            .then(function (res) {
                setWeatherData(res.data);
                setWeatherDataAfterFilter(res.data);
            });
    };

    useEffect(() => {
        getWeatherData();
    }, []);

    const filterWeather = (searchValue) => {
        const filteredWeatherData = weatherData.filter((weatherItem) =>
            weatherItem.stacja.toLowerCase().includes(searchValue.toLowerCase())
        );

        setWeatherDataAfterFilter(filteredWeatherData);
    };

    return (
        <div className="weather">
            <h1>Prognoza pogody</h1>
            <SearchWeather filterWeather={filterWeather} />
            <div className="weatherList">
                {weatherDataAfterFilter.map((weatherItem) => {
                    return (
                        <WeatherItem
                            weatherItem={weatherItem}
                            key={weatherItem.id_stacji}
                        />
                    );
                })}
            </div>
        </div>
    );
}
