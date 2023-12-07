import {input, list} from './constants.js';


export class WeatherApp {
    constructor(API_KEY){
        this.API_KEY = API_KEY;
        this.isLoading = false;
    }

    async asyncFetchData (url) {
        let response = await fetch(url);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        this.updateDOM(jsonResponse);
        this.isLoading = false;
    }

    fetchData = () => {
        const inputVal = input.value;
        const url = 
        `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${this.API_KEY}&units=metric`;

        

        this.isLoading = true;
        // fetch(url)
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(data);
        //         this.updateDOM(data);
        //     })
        //     .catch((error) => {
        //         throw new Error(error);
        //     })
        //     .finally(() => {
        //         this.isLoading = false;
        //     })

        this.asyncFetchData(url);
    }

    
    

    updateDOM = (data) => {
        const {main, name, sys, weather} = data;

        const li = document.createElement('li');
        li.classList.add('city');

        li.innerHTML = `<h2 class = "city-name">${name}</h2>
            <div class = "city-temp">${main.temp}</div>`;

            list.appendChild(li);

    }
}