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
                
                console.log('City of ' + nameValue)
                console.log('Temp: ' + tempValue + " degrees")

                

        
        var urlTwo = 'https://api.openweathermap.org/data/2.5/onecall?lat='+ latValue +'&lon='+ lonValue +'&APPID=66e66c24f276ae11a9d4b4b703bac3ae';  
        fetch(urlTwo).then(function(response){
            if (response.ok) {
                response.json().then(data => {
                var uvIndex = data['hourly']['0']['uvi'];

                console.log('UV Index: ' + uvIndex)
                console.log('Humidity: ' + humidValue + '%')
                console.log('Wind Speed: ' + windValue + ' MPH')
                console.log(data)

            var windValue1 = data['daily']['1']['wind_speed']

                console.log(windValue1)
                })}})


                
//                var windValue2 =
 //               var windValue3 =
   //             var windValue4 =
     //           var windValue5 =
//
  //              var humidValue1 =
    //            var humidValue2 =
      //          var humidValue3 =
        //        var humidValue4 =
          //      var humidValue5 =
//
  //              var tempValue1 =
    //            var tempValue2 =
      //          var tempValue3 =
        //        var tempValue4 =
          //      var tempValue5 =



        
        });
        }
    })
    })

