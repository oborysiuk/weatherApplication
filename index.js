import {form, API_KEY, input} from './constants.js';
import {WeatherApp} from './weatherApp.js';

(() =>{
    const weatherApp = new WeatherApp(API_KEY);

    form.addEventListener('submit', (event)=>{
        event.preventDefault();

        weatherApp.fetchData();

        form.reset();
        input.focus();

    })
})()
