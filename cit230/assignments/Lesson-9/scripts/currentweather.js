var weatherObject = new XMLHttpRequest();
weatherObject.open('GET', '//api.openweathermap.org/data/2.5/weather?id=4623560&appid=c0768753ec49627a56b99a56ccdb803b&units=imperial', true);

weatherObject.send();

weatherObject.onload = function () {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById("location").innerHTML = weatherInfo.name;
    document.getElementById("currentTemp").innerHTML = weatherInfo.main.temp;
    document.getElementById("currentConditions").innerHTML = weatherInfo.weather[0].description;
    document.getElementById("highTemp").innerHTML = weatherInfo.main.temp_max;
    document.getElementById("lowTemp").innerHTML = weatherInfo.main.temp_min;
    document.getElementById("wind").innerHTML = weatherInfo.wind.speed;

    var iconcode = weatherInfo.weather[0].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById("weatherIcon").src = icon_path;

} // remove the http: from the addresses before uploading to github.
