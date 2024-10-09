const apiKey = "e799596805c10d4fc3e1d7111b0d4b3e";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// const city = "new york";
const weatherIcon = document.querySelector(".weather-icon");

const searchBox = document.querySelector(".search input");

const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
    }else{
        document.querySelector(".error").style.display = "none";
    }

    let data = await response.json();
    
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " kmph";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "mist.png";
    }

}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
    searchBox.value = "";
});

