var latErr = document.getElementById("latErr");
var long;
var lat;
var apiKey = "96adbdcac13d991030c7cdc4683d94f6";
var weatherType;
var weatherIcon;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        latErr.innerHTML = "Weather not supported by this browser.";
    }
}

function showPosition(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    apiCall(long, lat);
}

function apiCall(long, lat) {
    $.ajax({url: ("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&APPID=" + apiKey + "&units=metric"), success: function(result){
        $("#title").html("Weather in " + result.name);
        $("#temp").html(result.main["temp"] + " C");
        $("#tempRange").html("Temp range: " + result.main["temp_min"] + " - " + result.main["temp_max"] + " C");
        $("#desc").html("Weather: " + result.weather[0].description);
        weatherType = result.weather[0].id;
        weatherIcon = result.weather[0].icon;
        changeIcon(weatherIcon);
        changeBG(weatherType);
    }
})}
//This isn't currently used, but its a goal to have an accurate weather map show as well. Not sure if this is the avenue I want though.
function showMap() {
    var latlon = long + "," + lat;
    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="+latlon+ "&zoom=14&size=400x300&sensor=false";
    document.getElementById("mapHolder").innerHTML = "<img src ='" + img_url + "'>";
}

function changeIcon(icon){
    icon = "Icons/" + icon + ".png";
    $("#icon").html('<img src= "' + icon + '">');
}

function changeBG(type){
    if(type == 800){
        $('html').css("background", "url(backgrounds/day/800.jpg no-repeat center center fixed");
        $('html').css("background-size", "cover");
    } else{
        type = type.toString()[0] + "xx" + ".jpg";
        $('html').css("background", "url(backgrounds/day/" + type + ") no-repeat center center fixed");
        $('html').css("background-size", "cover");
    }
}
window.onload = getLocation();
$(".refresh").click(function(){
    getLocation();
});