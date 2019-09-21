import transformForecast from './../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({type: SET_CITY, payload});
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});

const url = "http://api.openweathermap.org/data/2.5/forecast";
const api_key = "18dfe2ca8944bf44a023e6d2cefadca9";

export const setSelectedCity = payload => {

    return dispatch => {
        const url_forecast = `${url}?q=${payload}&APPID=${api_key}`;
        
        // activar en el estado un indicador de busqueda
        dispatch(setCity(payload));

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);

                // modificar el estado con el resultado de la promise (fetch)
                dispatch(setForecastData({city: payload, forecastData}));
            }
        );

        return;

    };
};