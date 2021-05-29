var button = document.querySelector('#search')
var input = document.querySelector('#input')

var city = document.querySelector('#city')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
var humid = document.querySelector('#humid')
var uv = document.querySelector('#uv-index')

button.addEventListener('click',function() {
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&APPID=66e66c24f276ae11a9d4b4b703bac3ae';
    fetch(url).then(function(response){
        if (response.ok) {
            response.json().then(data => {
                var nameValue = data['name'];
                var tempValueKelvin = data['main']['temp'] - 273.15;
                var windValue = data['wind']['speed'];
                var humidValue = data['main']['humidity'];
                var tempValue = (tempValueKelvin * 9/5 + 32);
                var lonValue = data['coord']['lon'];
                var latValue = data['coord']['lat'];
                
                console.log(nameValue)
                console.log(tempValue)
                console.log(latValue)

                

        
        var urlTwo = 'https://api.openweathermap.org/data/2.5/onecall?lat='+ latValue +'&lon='+ lonValue +'&APPID=66e66c24f276ae11a9d4b4b703bac3ae';  
        fetch(urlTwo).then(function(response){
            if (response.ok) {
                response.json().then(data => {
                var uvIndex = data['hourly']['0']['uvi'];

                console.log(uvIndex)

                console.log(humidValue)
                console.log(windValue)
                })}})
        });
        }
    })
    })

