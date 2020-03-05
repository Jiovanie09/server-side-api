var currentDay = moment().format("MMMM Do YYYY");

$(".currentTime").append(currentDay);

$(".btn").on("click", function (event) {
    event.preventDefault();
    var userInput = $(".userInput").val();
    if (userInput != "") {
    } else {
        $("#error").html("Field cannot be empty")
            ;
    }
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&appid=0d145117c52b8dbda4e66cffe6d9511d&units=imperial";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
    
        $("#cityTemp").text(response.name);
        $(".temperature").text("Temperature: " + response.main.temp);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".windSpeed").text("Wind Speed: " + response.wind.speed);
        var image = "http://openweathermap.org/img/wn/" + response.weather[0].icon + ".png"
        $(".uv-index").attr("src", image);
        
    });
    var fiveDayQueryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&appid=0d145117c52b8dbda4e66cffe6d9511d&units=imperial&cnt=5";
    $.ajax({
        url: fiveDayQueryURL,
        method: "GET"
    }) .then(function(response2){
        
        $(".card1temperature").text("TEMPERATURE: " + response2.list[0].main.temp)
        $(".card1humidity").text("HUMIDITY: " + response2.list[0].main.humidity)
        $(".card1date").append(currentDay)
        var logo = "http://openweathermap.org/img/wn/" + response2.list[0].weather[0].icon + ".png"
        $(".icon").attr("src", logo);

        $(".card2temperature").text("TEMPERATURE: " + response2.list[1].main.temp)
        $(".card2humidity").text("HUMIDITY: " + response2.list[1].main.humidity)
        var logo2 = "http://openweathermap.org/img/wn/" + response2.list[1].weather[0].icon + ".png"
        $(".icon2").attr("src", logo2);
        

        $(".card3temperature").text("TEMPERATURE: " + response2.list[2].main.temp)
        $(".card3humidity").text("HUMIDITY: " + response2.list[2].main.humidity)
        var logo3 = "http://openweathermap.org/img/wn/" + response2.list[2].weather[0].icon + ".png"
        $(".icon3").attr("src", logo3);

        $(".card4temperature").text("TEMPERATURE: " + response2.list[3].main.temp)
        $(".card4humidity").text("HUMIDITY: " + response2.list[3].main.humidity)
        var logo4 = "http://openweathermap.org/img/wn/" + response2.list[3].weather[0].icon + ".png"
        $(".icon4").attr("src", logo4);

        $(".card5temperature").text("TEMPERATURE: " + response2.list[4].main.temp)
        $(".card5humidity").text("HUMIDITY: " + response2.list[4].main.humidity)
        var logo5 = "http://openweathermap.org/img/wn/" + response2.list[4].weather[0].icon + ".png"
        $(".icon5").attr("src", logo5);
    })

});

