const apiKey = "6ff029eecc7c802f249f90c4aaac1d19";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".Search input");
const searchBtn = document.querySelector(".Search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey }`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "image/clouds.png";
        }
        if(data.weather[0].main == "Clear"){
            weatherIcon.src = "image/clear.png";
        }
        if(data.weather[0].main == "Rain"){
            weatherIcon.src = "image/rain.png";
        }
        if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "image/drizzle.png";
        }
        if(data.weather[0].main == "Mist"){
            weatherIcon.src = "image/mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
