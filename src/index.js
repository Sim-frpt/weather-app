import "normalize.css";
import "./assets/styles/style.scss";
import { getWeatherData } from "./weather-data";

const cityInput = document.querySelector(".input-container__text");
const sendInputButton = document.querySelector(".input-container__button");
const tempToggleButton = document.querySelector( ".input-container__checkbox");


const handleclick = e => {
  const cityName = cityInput.value;
  const tempPreferences = tempToggleButton.checked ? "metric" : "imperial";
  getWeatherData( cityName, tempPreferences );
}

sendInputButton.addEventListener( 'click', handleclick );
