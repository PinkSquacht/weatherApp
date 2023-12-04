const form = document.querySelector('form');

const table = document.querySelector('.weather');

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const data_input = (form).querySelector('input').value 
    getWeatherData(data_input)
})
const getWeatherData = async (city) => {
    const apiKey = 'a030351cd83625cc54ac52c4ab0d984b';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const data = await response.json();
    displayData(data);
};
const convertTemp = (kelvin) => {
    return (kelvin - 273.15) * 9/5 + 32
}
const displayData = (data) => {
    table.innerHTML = '';
    
    const cityName = document.createElement('tr')
    cityName.innerHTML = `<td> city: </td><td>${data.name}</td>`;
    table.appendChild(cityName)

    const temp = document.createElement('tr')
    temp.innerHTML = `<td> Current Temp: </td><td>${convertTemp(data.main.temp)}</td>`;
    table.appendChild(temp)

    const tempMax = document.createElement('tr')
    tempMax.innerHTML = `<td> Todays High's: </td><td>${convertTemp(data.main.temp_max)}</td>`;
    table.appendChild(tempMax)

    const tempMin = document.createElement('tr')
    tempMin.innerHTML = `<td> Todays Low's: </td><td>${convertTemp(data.main.temp_min)}</td>`;
    table.appendChild(tempMin)

    const humidity = document.createElement('tr')
    humidity.innerHTML = `<td> Humidity: </td><td>${data.main.humidity}%</td>`;
    table.appendChild(humidity)

};
