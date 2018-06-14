//calculate the wind chill for the page
var high = 90;
var low = 66;
var windSpeed = 5;
var averageTemp = (high + low) / 2;
var newSpeed = Math.pow(windSpeed, 0.16);
var windChill = 35.74 + (0.6215 * averageTemp) - (35.75 * newSpeed) + (0.4275 * averageTemp * newSpeed);
windChill = Math.round(windChill);
document.write("Windchill " + windChill + "&deg;F");
