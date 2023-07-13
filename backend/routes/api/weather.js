const config = require('config');
const express = require('express');
const router = express.Router();
const axios = require('axios');


const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";
const API_key= config.get("API_key");  //api key for weather api

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

//@route    GET /api/weather
//@desc     Default weather
//@access   public
router.get('/', async(req,res)=>{
    const city="delhi";

    axios.get(`${weatherUrl}?q=${city}&appid=${API_key}&units=metric`)
    .then(response=>{
        const weatherData = {
            status:200,
            main: response.data.main,
            weather: response.data.weather[0],
            location: response.data.name
        };
        res.status(200).json(weatherData);
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({status:500,msg: 'An error occurred'});
    });

}); 


//@route    GET /api/weather/:search
//@desc     Search by user location
//@access   public
router.get('/:search', async(req,res)=>{
    const search = req.params.search;

    axios.get(`${weatherUrl}?q=${search}&appid=${API_key}&units=metric`)
    .then(response=>{
        const weatherData = {
            status:200,
            main: response.data.main,
            weather: response.data.weather[0],
            location: response.data.name
        };
        res.status(200).json(weatherData);
    })
    .catch(error => {
        if (error.response && error.response.status === 404) {
            return res.status(404).json({status:404,msg: 'City not found'});
        }
        console.error(error);
        res.status(500).json({status:500,msg: 'An error occurred'});
    });
});

module.exports = router;