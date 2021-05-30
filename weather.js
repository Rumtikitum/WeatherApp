var button = document.querySelector('#search')
var input = document.querySelector('#input')

//today
var city = document.querySelector('#city')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
var humid = document.querySelector('#humid')
var uv = document.querySelector('#uv-index')

//tomorrow
var city1 = document.querySelector('#city1')
var temp1 = document.querySelector('#temp1')
var wind1 = document.querySelector('#wind1')
var humid1 = document.querySelector('#humid1')
var uv1 = document.querySelector('#uv-index1')

var currentDay = document.querySelector('#currentDay')
var tomorrowDay = document.querySelector('#tomorrow')
var day2 = document.querySelector('#day2')
var day3 = document.querySelector('#day3')
var day4 = document.querySelector('#day4')
var day5 = document.querySelector('#day5')


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

            var windValue1 = data['daily']['1']['wind_speed'];
            var windValue2 = data['daily']['2']['wind_speed'];
            var windValue3 = data['daily']['3']['wind_speed'];
            var windValue4 = data['daily']['4']['wind_speed'];
            var windValue5 = data['daily']['5']['wind_speed'];

            var humidValue1 = data['daily']['1']['humidity'];
            var humidValue2 = data['daily']['2']['humidity'];
            var humidValue3 = data['daily']['3']['humidity'];
            var humidValue4 = data['daily']['4']['humidity'];
            var humidValue5 = data['daily']['5']['humidity'];

            var tempValue1K = data['daily']['1']['temp']['day'] - 273.15;
            var tempValue2K = data['daily']['2']['temp']['day'] - 273.15;
            var tempValue3K = data['daily']['3']['temp']['day'] - 273.15;
            var tempValue4K = data['daily']['4']['temp']['day'] - 273.15;
            var tempValue5K = data['daily']['5']['temp']['day'] - 273.15;

            var tempValue1 = (tempValue1K * 9/5 + 32);
            var tempValue2 = (tempValue2K * 9/5 + 32);
            var tempValue3 = (tempValue3K * 9/5 + 32);
            var tempValue4 = (tempValue4K * 9/5 + 32);
            var tempValue5 = (tempValue5K * 9/5 + 32);


                console.log(tempValue1)
                
                city.textContent = nameValue+" ";
                temp.textContent = tempValue+' ';
                wind.textContent = windValue+' ';
                humid.textContent = humidValue+' ';
                uv.textContent = uvIndex+' ';

                temp1.textContent = tempValue1+' ';
                wind1.textContent = windValue1+' ';
                humid1.textContent = humidValue1+' ';

                temp1.textContent = tempValue1+' ';
                wind1.textContent = windValue1+' ';
                humid1.textContent = humidValue1+' ';

                temp1.textContent = tempValue1+' ';
                wind1.textContent = windValue1+' ';
                humid1.textContent = humidValue1+' ';

                temp1.textContent = tempValue1+' ';
                wind1.textContent = windValue1+' ';
                humid1.textContent = humidValue1+' ';

                temp1.textContent = tempValue1+' ';
                wind1.textContent = windValue1+' ';
                humid1.textContent = humidValue1+' ';

                temp1.textContent = tempValue1+' ';
                wind1.textContent = windValue1+' ';
                humid1.textContent = humidValue1+' ';
                })}})        
        });
        }
    })
    })


    var today = moment().format('L');
    var tomorrow = moment().add(1, 'days').format('L');
    var dayTwo = moment().add(2, 'days').format('L');
    var dayThree = moment().add(3, 'days').format('L');
    var dayFour = moment().add(4, 'days').format('L');
    var dayFive = moment().add(5, 'days').format('L');
    console.log(dayTwo)

    currentDay.textContent = today
    tomorrowDay.textContent = tomorrow
    day2.textContent = dayTwo
    day3.textContent = dayThree
    day4.textContent = dayFour
    day5.textContent = dayFive

    


