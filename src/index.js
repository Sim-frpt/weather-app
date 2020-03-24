import "normalize.css";
import "./assets/styles/style.scss";
import { getWeatherData } from "./weather-data";

const cityInput = document.querySelector(".input-container__text");
const sendInputButton = document.querySelector(".input-container__button");
const tempToggleButton = document.querySelector( ".input-container__checkbox");


const handleCityInputClick = (e) => {
  e.preventDefault();

  cityInput.setCustomValidity("");

  if(! cityInput.validity.valid) {
    cityInput.setCustomValidity("Make sure you enter a city name, between 2 and 20 characters long");
    cityInput.reportValidity();
    return;
  }

  const cityName = cityInput.value;
  const tempPreferences = tempToggleButton.checked ? "imperial" : "metric";

  getWeatherData( cityName, tempPreferences );
}

sendInputButton.addEventListener( 'click', handleCityInputClick );
