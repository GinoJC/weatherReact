import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

/*componentWillMount() {
    const {city} = this.state;
    const api_weather = `${url}?q=${city},&APPID=${api_key}`;
    fetch(api_weather).then( data => {
        return data.json();
    }).then(weather_data => {
        const data = transformWeather(weather_data);
        this.setState({data}); //{data: data} pero por simplificación de nombres iguales solo queda data.
    });
}

const url = "http://api.openweathermap.org/data/2.5/weather";
const api_key = "18dfe2ca8944bf44a023e6d2cefadca9";
*/

const WeatherLocation = ({onWeatherLocationClick, city, data}) => (
    <div className='weatherLocationCont' onClick={onWeatherLocationClick}> 
        <Location city={city}/>
        {data ? <WeatherData data={data} /> :
        <CircularProgress size={60} thickness={7} />}
    </div>
);

WeatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default WeatherLocation;