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
    .then(data => formatData(data))
    .catch(err => {
      console.error(err);
    })
}

const formatData = data => {

  const weatherObj = {};

  weatherObj.city = data.name;
  weatherObj.weather = data.weather[0].main;
  weatherObj.description = data.weather[0].description;
  weatherObj.icon = data.weather[0].icon;
  weatherObj.mainTemp = data.main.temp;
  weatherObj.feelsLikeTemp = data.main.feels_like;

  console.log(weatherObj);
  return weatherObj;
}

export { getWeatherData };
