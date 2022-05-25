let weather = {
    apikey: "87bb3a6d879e90e85ad6cafc8fdfc947",
    fetchWeather: function(city) {
        fetch(
           `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apikey}`
            ).then(response => response.json())
            .then(data => this.displayWeather(data));
    },
    displayWeather: function(data) {
       const {name} = data;
       const {icon, description} = data.weather[0];
       const {temp, humidity} = data.main;
         const {speed} = data.wind;
         console.log(name, icon, description, temp, humidity, speed);
         document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png" ;
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".temp").innerHTML = temp + "&deg;C";
        document.querySelector(".humidity").innerHTML = humidity + "%";
        document.querySelector(".wind").innerHTML = speed + "km/h";
    },
    
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
                
};

document.querySelector(".search button").addEventListener("click", function(e) {
    weather.search();
})

document.querySelector(".search-bar").addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
        weather.search();
    }
})

weather.fetchWeather("Mumbai");
