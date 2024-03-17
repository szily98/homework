/*Îmi cer scuze, am avut câteva probelem personale și nu am putut să fac tema așa cum am vrut eu.
Poate anm facut eu o greseală, poate n-am înțeles ceva. dar nu am reușit să folosesc API-ul. Îmi cerea un KEY 
pe care nu l-am găsit nicăieri. Deoarece nu am vrut să nui fac tema, am ales un alt API. În cazul în care am făzut
ceva greșit, îl corectez. */

document.addEventListener("DOMContentLoaded", () => {
  const weatherInfo = document.getElementById("weather-info");

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const { latitude, longitude } = position.coords;
      const apiKey = "8fd16c4a379245e1bbec8d1bec63c2bf";
      const apiUrl = `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=${apiKey}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.data && data.data.length > 0) {
          const weatherData = data.data[0];

          const temperatureCelsius = weatherData.temp;
          const temperatureFahrenheit = (temperatureCelsius * 9) / 5 + 32;

          const hourlyForecast = weatherData.weather.description;

          const weatherHtml = `
                    <div class="weather-item">
                        <h2>Current Temperature</h2>
                        <p class="temperature">${temperatureCelsius} °C / ${temperatureFahrenheit} °F</p>
                        <h2>Hourly Forecast</h2>
                        <p class="description">${hourlyForecast}</p>
                    </div>
                `;

          weatherInfo.innerHTML = weatherHtml;
        } else {
          weatherInfo.innerText = "Weather data currently is not available.";
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        weatherInfo.innerText = "Error fetching data.";
      }
    },
    (error) => {
      console.error("Error getting current position:", error);
      weatherInfo.innerText = "Error getting current position.";
    }
  );
});
