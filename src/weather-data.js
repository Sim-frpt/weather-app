import { updateDom } from "./dom-manipulations";

const apiKey = "cac96e4f3c9bcf5366ecbcc47bd0dcf2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";

const getWeatherData = ( location, tempPreferences ) => {
  const url = `${apiUrl}q=${location}&appid=${apiKey}&units=${tempPreferences}`;

  fetch(url)
    .then(response => {
      if (! response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then(data => formatData(data, tempPreferences))
    .then( formatedData => updateDom(formatedData))
    .catch(err => {
      updateDom();
      console.error(err);
    })
}

const formatData = (data, tempPreferences) => {
  const weatherObj = {};
  const iconBaseUrl = "http://openweathermap.org/img/wn/";

  weatherObj.city = data.name;
  weatherObj.weather = data.weather[0].main;
  weatherObj.description = data.weather[0].description;
  weatherObj.icon = iconBaseUrl + data.weather[0].icon + "@2x.png";
  weatherObj.mainTemp = data.main.temp;
  weatherObj.feelsLikeTemp = data.main.feels_like;
  weatherObj.tempUnit = tempPreferences === "metric" ? "\u2103" : "\u2109";
  return weatherObj;
}

export { getWeatherData };
