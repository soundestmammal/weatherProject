var API_KEY = "1c36c1bc4095e967d00414e9c7409d67";
var cel = false;
var wd;

	function displayTemp(fTemp , c){
		if (c) return Math.round((fTemp - 32) * (5/9)) + " C";
		return Math.round(fTemp) + " F";
	};

function render(wd){
	var currentLocation = wd.name;
   	var currentWeather = wd.weather[0].description;
   	var currentTemp = displayTemp(wd.main.temp , cel);
   	var high = displayTemp(wd.main.temp_max , cel);
   	var low = displayTemp(wd.main.temp_min , cel);
   	var icon = wd.weather[0].icon;



   	$('#currentLocation').html(currentLocation);
   	$('#currentWeather').html(currentWeather);
   	$('#currentTemp').html(currentTemp);
   	$('#high-low').html(high + " / " + low);


   	var iconSrc = 'http://openweathermap.org/img/w/' + icon + ".png";
   	// console.log(iconSrc);
   	$("#currentTemp").prepend("<img src='" + iconSrc + "'>");
	}

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

   	render(apiData , cel);

   	$("#toggle").click(function(){
   		cel = !cel;
   		render(wd , cel);
   	});

   })
  

});
// 

});
//Get the lat and lon