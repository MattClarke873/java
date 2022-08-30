const icon = document.getElementById("icon")
const temp = document.getElementById("temp")
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f56a4db6b9msh548d00aec74a89fp184865jsnd4053e833291',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=shawbury%2C%20uk&days=3', options)
	.then(response => response.json())
    .then(json => {
        console.log(json)
        // icon.innerHTML = `<img src='${json.current.condition.icon}' height=200 width=200/>`
        // temp.innerText = (`${json.current.temp_c} `) 
        
    })

	// .catch(err => console.error(err));