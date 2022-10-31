
const weatherForm = document.querySelector("#weatherForm")
weatherForm.addEventListener("submit"  , async(e)=>{
    const input = document.getElementById("input").value
    e.preventDefault()
    console.log(input);
    const cityData = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=a1Aa7JCSzw4koBXV0wWHZ76vUDHvQB0n&q=${input}&language=en-us&details=false`)
    console.log(cityData.data[0].Key);
    const locationKey = cityData.data[0].Key
   
    const weather = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}?apikey=a1Aa7JCSzw4koBXV0wWHZ76vUDHvQB0n&language=en-us&details=true&metric=true`)
    console.log(weather.data.DailyForecasts);
    let min_temp = weather.data.DailyForecasts[0].Temperature.Minimum.Value
    let max_temp = weather.data.DailyForecasts[0].Temperature.Maximum.Value
    let date = weather.data.DailyForecasts[0].Date.split("T")[0]
    let time = new Date().toLocaleTimeString()
    let windGust
    console.log(time);
    console.log(date);
    console.log(min_temp);

    
})