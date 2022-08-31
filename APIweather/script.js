let URL = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=shrewsbury&days=3`;

const icon = document.getElementById("icon")
const town = document.getElementById("town")
const region = document.getElementById("region")
const country = document.getElementById("country")
const chart = document.getElementById("chart")
const temp = document.getElementById("temp")
const minTemp = document.getElementById("minTemp")
const maxTemp = document.getElementById("maxTemp")
const hourly0 =  document.getElementById("hourly0")
const hourlyIcon0 =  document.getElementById("hourlyIcon0")
const hourly1 =  document.getElementById("hourly1")
const hourlyIcon1 =  document.getElementById("hourlyIcon1")
const hourly2 =  document.getElementById("hourly2")
const hourlyIcon2 =  document.getElementById("hourlyIcon2")
const hourly3 =  document.getElementById("hourly3")
const hourlyIcon3 =  document.getElementById("hourlyIcon3")
const hourly4 =  document.getElementById("hourly4")
const hourlyIcon4 =  document.getElementById("hourlyIcon4")
const hourly5=  document.getElementById("hourly5")
const hourlyIcon5 =  document.getElementById("hourlyIcon5")
const hourly6 =  document.getElementById("hourly6")
const hourlyIcon6 =  document.getElementById("hourlyIcon6")
const hourly7 =  document.getElementById("hourly7")
const hourlyIcon7 =  document.getElementById("hourlyIcon7")
const hourly8 =  document.getElementById("hourly8")
const hourlyIcon8 =  document.getElementById("hourlyIcon8")
const hourly9 =  document.getElementById("hourly9")
const hourlyIcon9 =  document.getElementById("hourlyIcon9")
const hourly10 =  document.getElementById("hourly10")
const hourlyIcon10 =  document.getElementById("hourlyIcon10")
const hourly11 =  document.getElementById("hourly11")
const hourlyIcon11 =  document.getElementById("hourlyIcon11")
const hourly12 =  document.getElementById("hourly12")
const hourlyIcon12 =  document.getElementById("hourlyIcon12")
const hourly13 =  document.getElementById("hourly13")
const hourlyIcon13 =  document.getElementById("hourlyIcon13")
const hourly14 =  document.getElementById("hourly14")
const hourlyIcon14 =  document.getElementById("hourlyIcon14")
const hourly15 =  document.getElementById("hourly15")
const hourlyIcon15 =  document.getElementById("hourlyIcon15")
const hourly16 =  document.getElementById("hourly16")
const hourlyIcon16 =  document.getElementById("hourlyIcon16")
const hourly17 =  document.getElementById("hourly17")
const hourlyIcon17 =  document.getElementById("hourlyIcon17")
const hourly18 =  document.getElementById("hourly18")
const hourlyIcon18 =  document.getElementById("hourlyIcon18")
const hourly19 =  document.getElementById("hourly19")
const hourlyIcon19 =  document.getElementById("hourlyIcon19")
const hourly20 =  document.getElementById("hourly20")
const hourlyIcon20 =  document.getElementById("hourlyIcon20")
const hourly21 =  document.getElementById("hourly21")
const hourlyIcon21 =  document.getElementById("hourlyIcon21")
const hourly22 =  document.getElementById("hourly22")
const hourlyIcon22 =  document.getElementById("hourlyIcon22")
const hourly23=  document.getElementById("hourly23")
const hourlyIcon23 =  document.getElementById("hourlyIcon23")

const iconDay1 = document.getElementById("iconDay1")
const avgDay1  = document.getElementById("avgDay1")
const dateDay1 = document.getElementById("dateDay1")

const iconDay2 = document.getElementById("iconDay2")
const avgDay2  = document.getElementById("avgDay2")
const dateDay2 = document.getElementById("dateDay2")

const iconDay3 = document.getElementById("iconDay3")
const avgDay3  = document.getElementById("avgDay3")
const dateDay3 = document.getElementById("dateDay3")

const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f56a4db6b9msh548d00aec74a89fp184865jsnd4053e833291',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

   
  
   
   
  

        const getWeather = () => {

        console.log(`in getWather funciton ${URL}`)
        fetch(`${URL}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            town.innerText = `${response.location.name}` 
            region.innerText = `${response.location.region}` 
            country.innerText = `${response.location.country}` 
            icon.innerHTML = `<img src='${response.current.condition.icon}'height=250 width=250/>`
            temp.innerText = (`${response.current.temp_c}` + `°C`)
            minTemp.innerText = `${response.forecast.forecastday[0].day.mintemp_c}`
            maxTemp.innerText = `${response.forecast.forecastday[0].day.maxtemp_c}`
            hourly0.innerText = `${response.forecast.forecastday[0].hour[0].temp_c}`
            hourlyIcon0.innerHTML = `<img src='${response.forecast.forecastday[0].hour[0].condition.icon}'height=20 width=20/>`
            hourly1.innerText = `${response.forecast.forecastday[0].hour[1].temp_c}`
            hourlyIcon1.innerHTML = `<img src='${response.forecast.forecastday[0].hour[1].condition.icon}'height=20 width=20/>`
            hourly2.innerText = `${response.forecast.forecastday[0].hour[2].temp_c}`
            hourlyIcon2.innerHTML = `<img src='${response.forecast.forecastday[0].hour[2].condition.icon}'height=20 width=20/>`
            hourly3.innerText = `${response.forecast.forecastday[0].hour[3].temp_c}`
            hourlyIcon3.innerHTML = `<img src='${response.forecast.forecastday[0].hour[3].condition.icon}'height=20 width=20/>`
            hourly4.innerText = `${response.forecast.forecastday[0].hour[4].temp_c}`
            hourlyIcon4.innerHTML = `<img src='${response.forecast.forecastday[0].hour[4].condition.icon}'height=20 width=20/>`
            hourly5.innerText = `${response.forecast.forecastday[0].hour[5].temp_c}`
            hourlyIcon5.innerHTML = `<img src='${response.forecast.forecastday[0].hour[5].condition.icon}'height=20 width=20/>`
            hourly6.innerText = `${response.forecast.forecastday[0].hour[6].temp_c}`
            hourlyIcon6.innerHTML = `<img src='${response.forecast.forecastday[0].hour[6].condition.icon}'height=20 width=20/>`
            hourly7.innerText = `${response.forecast.forecastday[0].hour[7].temp_c}`
            hourlyIcon7.innerHTML = `<img src='${response.forecast.forecastday[0].hour[7].condition.icon}'height=20 width=20/>`
            hourly8.innerText = `${response.forecast.forecastday[0].hour[8].temp_c}`
            hourlyIcon8.innerHTML = `<img src='${response.forecast.forecastday[0].hour[8].condition.icon}'height=20 width=20/>`
            hourly9.innerText = `${response.forecast.forecastday[0].hour[9].temp_c}`
            hourlyIcon9.innerHTML = `<img src='${response.forecast.forecastday[0].hour[9].condition.icon}'height=20 width=20/>`
            hourly10.innerText = `${response.forecast.forecastday[0].hour[10].temp_c}`
            hourlyIcon10.innerHTML = `<img src='${response.forecast.forecastday[0].hour[10].condition.icon}'height=20 width=20/>`
            hourly11.innerText = `${response.forecast.forecastday[0].hour[11].temp_c}`
            hourlyIcon11.innerHTML = `<img src='${response.forecast.forecastday[0].hour[11].condition.icon}'height=20 width=20/>`
            hourly12.innerText = `${response.forecast.forecastday[0].hour[12].temp_c}`
            hourlyIcon12.innerHTML = `<img src='${response.forecast.forecastday[0].hour[12].condition.icon}'height=20 width=20/>`
            hourly13.innerText = `${response.forecast.forecastday[0].hour[13].temp_c}`
            hourlyIcon13.innerHTML = `<img src='${response.forecast.forecastday[0].hour[13].condition.icon}'height=20 width=20/>`
            hourly14.innerText = `${response.forecast.forecastday[0].hour[14].temp_c}`
            hourlyIcon14.innerHTML = `<img src='${response.forecast.forecastday[0].hour[14].condition.icon}'height=20 width=20/>`
            hourly15.innerText = `${response.forecast.forecastday[0].hour[15].temp_c}`
            hourlyIcon15.innerHTML = `<img src='${response.forecast.forecastday[0].hour[15].condition.icon}'height=20 width=20/>`
            hourly16.innerText = `${response.forecast.forecastday[0].hour[16].temp_c}`
            hourlyIcon16.innerHTML = `<img src='${response.forecast.forecastday[0].hour[16].condition.icon}'height=20 width=20/>`
            hourly17.innerText = `${response.forecast.forecastday[0].hour[17].temp_c}`
            hourlyIcon17.innerHTML = `<img src='${response.forecast.forecastday[0].hour[17].condition.icon}'height=20 width=20/>`
            hourly18.innerText = `${response.forecast.forecastday[0].hour[18].temp_c}`
            hourlyIcon18.innerHTML = `<img src='${response.forecast.forecastday[0].hour[18].condition.icon}'height=20 width=20/>`
            hourly19.innerText = `${response.forecast.forecastday[0].hour[19].temp_c}`
            hourlyIcon19.innerHTML = `<img src='${response.forecast.forecastday[0].hour[19].condition.icon}'height=20 width=20/>`
            hourly20.innerText = `${response.forecast.forecastday[0].hour[20].temp_c}`
            hourlyIcon20.innerHTML = `<img src='${response.forecast.forecastday[0].hour[20].condition.icon}'height=20 width=20/>`
            hourly21.innerText = `${response.forecast.forecastday[0].hour[21].temp_c}`
            hourlyIcon21.innerHTML = `<img src='${response.forecast.forecastday[0].hour[21].condition.icon}'height=20 width=20/>`
            hourly22.innerText = `${response.forecast.forecastday[0].hour[22].temp_c}`
            hourlyIcon22.innerHTML = `<img src='${response.forecast.forecastday[0].hour[22].condition.icon}'height=20 width=20/>`
            hourly23.innerText = `${response.forecast.forecastday[0].hour[23].temp_c}`
            hourlyIcon23.innerHTML = `<img src='${response.forecast.forecastday[0].hour[23].condition.icon}'height=20 width=20/>`
            

            iconDay1.innerHTML = `<img src='${response.forecast.forecastday[0].day.condition.icon}'height=20 width=20/>`
            avgDay1.innerText = `${response.forecast.forecastday[0].day.avgtemp_c}`
            dateDay1.innerText = `${response.forecast.forecastday[0].date}`

            iconDay2.innerHTML = `<img src='${response.forecast.forecastday[1].day.condition.icon}'height=20 width=20/>`
            avgDay2.innerText = `${response.forecast.forecastday[1].day.avgtemp_c}`
            dateDay2.innerText = `${response.forecast.forecastday[1].date}`

            iconDay3.innerHTML = `<img src='${response.forecast.forecastday[2].day.condition.icon}'height=20 width=20/>`
            avgDay3.innerText = `${response.forecast.forecastday[2].day.avgtemp_c}`
            dateDay3.innerText = `${response.forecast.forecastday[2].date}`

            let Tnow = `${response.current.temp_c}`
            
            let MinT = minTemp.innerText
            let MaxT = maxTemp.innerText


            let diffTemp = Tnow- minTemp.innerText
            let range = maxTemp.innerText - minTemp.innerText;
            let leftRange = diffTemp/range*100;

            console.log({Tnow})
            console.log({MinT})
            console.log({MaxT})
            console.log({diffTemp})
            console.log({range})
            console.log({leftRange})
            
            chart.setAttribute(
                `style`, 
                `--percentage: ${leftRange}`)           
        //    .catch(err => console.error(err));
        })
    }
    


          
    window.addEventListener('load', () => {
        let scrollElement = document.querySelector('.hourly');
        scrollElement.scrollLeft =  (scrollElement.scrollWidth - 
        scrollElement.clientWidth ) / 1.705;
        getWeather()
      }); 


      addEventListener("keydown", function(event) {
        if (event.key === "Enter") { 
          getLocation()
        }
      });


    const getLocation = () =>{
        search = document.getElementById("input-search")
        const location = search.value
        URL = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${location}&days=3`;
        console.log(URL)
        getWeather()
        return URL
    }
 