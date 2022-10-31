
const weatherForm = document.querySelector("#weatherForm")
weatherForm.addEventListener("submit"  , async(e)=>{
    const input = document.getElementById("input").value
    e.preventDefault()
    console.log(input);
    const cityData = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=a1Aa7JCSzw4koBXV0wWHZ76vUDHvQB0n&q=${input}&language=en-us&details=false`)
    console.log(cityData.data[0].LocalizedName)
    const locationKey = cityData.data[0].Key
    let CityName = cityData.data[0].LocalizedName
    const weather = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}?apikey=a1Aa7JCSzw4koBXV0wWHZ76vUDHvQB0n&language=en-us&details=true&metric=true`)
    console.log(weather.data);
    let min_temp = weather.data.DailyForecasts[0].Temperature.Minimum.Value
    let max_temp = weather.data.DailyForecasts[0].Temperature.Maximum.Value
    let date = weather.data.DailyForecasts[0].Date.split("T")[0]
    let time = new Date().toLocaleTimeString()
    let Rain = weather.data.DailyForecasts[0].Day.Rain.Value
    let windGust = weather.data.DailyForecasts[0].Day.WindGust.Speed.Value
    let CloudCover = weather.data.DailyForecasts[0].Day.CloudCover
    let LongPhrase = weather.data.Headline.Text
    console.log(LongPhrase);

    // now selecting all ids and class
    let Rain_value = document.getElementById("Rain_value")
    Rain_value.innerHTML = Rain
    console.log(Rain_value);
    console.log(Rain_value);
    let Cloud_cover = document.getElementById("Cloud_cover")
    CloudCover.innerHTML = CloudCover
    let Wind_gusts= document.getElementById("Wind_gusts")
    Wind_gusts.innerHTML = windGust
    let Phrase = document.getElementById("Phrase")
    Phrase.innerHTML = LongPhrase
    let max = document.getElementById("max")
    max.innerHTML = max_temp + " °C"
    let min = document.getElementById("min")
    min.innerHTML = min_temp + " °C"
    let Date_now = document.getElementById("Date_now")
    Date_now.innerHTML = date
    let Time_now = document.getElementById("Time_now")
    Time_now.innerHTML = time
    let City_name = document.getElementById("City_name")
    City_name.innerHTML = CityName
    
    document.getElementById("input").value = ""
})