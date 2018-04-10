var converted = false;

$('.convert').click(function() {
    var currentTemp = $('#temp').html().split(" ");
    var tempRange = $("#tempRange").html().split(" ");
    console.log(tempRange);
    if (converted == false){
        currentTemp = Math.round(currentTemp[0] * (9/5) + 32);
        tempRange = Math.round(tempRange[2] * (9/5) + 32) + " - " + Math.round(tempRange[4] * (9/5) + 32) + " F";
        $("#temp").html(currentTemp + " F");
        $("#tempRange").html("Temp Range: " + tempRange);
        converted = true;
    } else if (converted){
        currentTemp = Math.round((currentTemp[0]-32)*(5/9));
        tempRange = Math.round((tempRange[2]-32)*(5/9)) + " - " + Math.round((tempRange[4]-32)*(5/9)) + " C";
        $("#temp").html(currentTemp + " C");
        $("#tempRange").html("Temp Range: " + tempRange);
        converted = false;
    }
})