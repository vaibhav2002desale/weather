var inputeval = document.querySelector('#cityinpute')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik = "7f2cded3c3610a5b658242a5851dceef"

function convertion(val)
{
    return (val - 273).toFixed(2)
}

btn.addEventListener('click',() =>
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputeval.value+'&appid='+apik).then(res => res.json())



.then(data =>
{
   var nameval =data['name']
   var descrip = data['weather']['0']['description'] 
   var tempature = data['main']['temp']
   var wndspd = data['wind']['speed']
   city.innerHTML=`Weather of <span>${nameval}<span>`
   temp.innerHTML = `temperature: <span>${convertion(tempature)}c</span>`
   description.innerHTML = `sky condition: <span>${descrip}<span>`
   wind.innerHTML = `wind speed: <spam>${wndspd}km/h<span>` 

}
)
.catch(err => alert('you entered wrong city name'))

})