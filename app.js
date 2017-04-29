var API_KEY = "1c36c1bc4095e967d00414e9c7409d67";
var cel = false;
var wd;

$(function(){

	var loc;

	$.getJSON('http://ipinfo.io', function(d){
  console.log("Assigning the data ...")
  loc = d.loc.split(",");
  console.log(loc);
  
  $.getJSON('http://api.openweathermap.org/data/2.5/weather?units=imperial&lat='
   	+ loc[0] + '&lon=' + loc[1] + '&APPID=' + API_KEY, function(apiData){
   		wd = apiData;
   	console.log("got the data ," , wd);
   	var currentLocation = wd.name;
   	var currentWeather = wd.weather[0].description;
   	var currentTemp = wd.main.temp;
   	var high = wd.main.temp_max;
   	var low = wd.main.temp_min;
   	var icon = wd.weather[0].icon;



   	$('#currentLocation').html(currentLocation);
   	$('#currentWeather').html(currentWeather);
   	$('#currentTemp').html(Math.round(currentTemp)  + " Degrees (F)");
   	$('#high-low').html(Math.round(high) + " / " + Math.round(low));


   	var iconSrc = 'http://openweathermap.org/img/w/' + icon + ".png";
   	// console.log(iconSrc);
   	$("#currentTemp").prepend("<img src='" + iconSrc + "'>");
   })
  

});
// 

});
//Get the lat and lon