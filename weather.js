const body = document.querySelector('body')
const search = document.querySelector('.search')
window.addEventListener('keydown', (e)=>{
    if(e.key==='Enter'){
        weather()
    }
})
search.addEventListener('click',weather)
let city
function weather(e) {
    const city = document.querySelector('#input').value
    // const city = 'mihijam'
    const key = 'd299e664fd253ca7b4220cbaf682824b'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    // console.log(city)
    // const name = city.value
    fetch(`${url}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            // console.log(data)
            run(data)
         

        })
        .catch((error) => {
            // console.log('ERROR')
            let display = document.querySelector('.display')
            display.innerHTML = `<p>ERROR: Something Went Wrong</p>`
        })
}



function run(data) {
    const temp = Math.ceil((data.main.temp)-273.15)
    const type = data.weather[0].main
    const flike = Math.round((data.main.feels_like) - 273.15)
    const wind = Math.floor((data.wind.speed)*3.6)
    //    console.log(celsius)
    //    console.log(type)
    let display = document.querySelector('.display')
    display.innerHTML = `
 <p id="temp">${temp}°c<br></p>
 <p id="sky">${type}<br></p>
    <div class="dip">
     <span><p id="flike">feels like :${flike}°c</p></span>
     <span><p id="wind">wind speed :${wind}km/h</p></span></div>
     
     </p>
 `
 if(type=='Clouds'){
    body.style.background = "url('cloud.jpg')"
    body.style.backgroundSize ="cover"
}
 if(type=='Clear'){
    body.style.background = "url('clear.jpg')"
    body.style.backgroundSize ="cover"
}
 if(type=='Rain'){
    body.style.background = "url('rain.jpg')"
    body.style.backgroundSize ="cover"
}
 if(type=='Mist'){
    body.style.background = "url('mist.jpg')"
    body.style.backgroundSize ="cover"
}
 if(type=='Haze'){
    body.style.background = "url('Haze.jpg')"
    body.style.backgroundSize ="cover"
}
 if(type=='Smoke'){
    body.style.background = "url('smoke.jpg')"
    body.style.backgroundSize ="cover"
}
 if(type=='Drizzle'){
    body.style.background = "url('drizzle.jpg')"
    body.style.backgroundSize ="cover"
}
 if(type=='Thunderstorm'){
    body.style.background = "url('thunderstorm.jpg')"
    body.style.backgroundSize ="cover"
}
}

