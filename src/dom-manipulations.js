const updateDom = (weatherObj = {}) => {
  const weatherCard = document.querySelector(".weather-card");

  while (weatherCard.firstChild) {
    weatherCard.removeChild(weatherCard.lastChild);
  }

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add(".weather-card__title");
  
  // If there is no city name, something went wrong w/ fetching the data
  if ( typeof weatherObj.city === "undefined") {
    cardTitle.textContent = "Something went wrong, please make sure you entered a correct city name in this format: London or London, uk"; 
    weatherCard.append(cardTitle);
    return;
  }

  cardTitle.textContent = weatherObj.city;

  const cardImgContainer = document.createElement("span");
  cardImgContainer.classList.add("weather-card__img-container");

  const cardIcon = document.createElement("img");
  cardIcon.classList.add(".weather-card__icon");
  cardIcon.src = weatherObj.icon;

  cardImgContainer.append( cardIcon );

  const cardWeather = document.createElement("p");
  cardWeather.classList.add(".weather-card__main");
  cardWeather.textContent = `Weather: ${weatherObj.weather}`;

  const cardDescription = document.createElement("p");
  cardDescription.classList.add(".weather-card__desc");
  cardDescription.textContent = weatherObj.description;

  const weatherCardTemp = document.createElement("p");
  weatherCardTemp.classList.add(".weather-card__temp");
  weatherCardTemp.textContent = weatherObj.mainTemp + " " + weatherObj.tempUnit;

  const weatherCardFeelsLikeTemp = document.createElement("p");
  weatherCardFeelsLikeTemp.classList.add(".weather-card__feels-like-temp");
  weatherCardFeelsLikeTemp.textContent = "Feels like " +  weatherObj.feelsLikeTemp + " " +  weatherObj.tempUnit;

  weatherCard.append(
    cardTitle,
    weatherCardTemp,
    cardImgContainer,
    cardWeather,
    cardDescription,
    weatherCardFeelsLikeTemp
  );
}

export { updateDom };
