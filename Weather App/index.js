const apiKey = "b077b5bfbf9a62913fbb77bd353d39a8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon  = document.querySelector(".w-icon");



const checkWeather = async (city)  =>{

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data =  await response.json();

    
    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°c" ;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/H";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if (data.weather.main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if (data.weather.main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if (data.weather.main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    else if (data.weather.main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if (data.weather.main == "Snow"){
        weatherIcon.src = "images/snow.png";
    }
}

searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);

})