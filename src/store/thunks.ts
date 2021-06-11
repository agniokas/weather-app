import axios from "axios";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import moment from "moment";

import { apiKey } from "../../apiKey";
import {changePlaceAction, changeUnitsAction, fetchSuccessAction, fetchErrorAction} from "./actions";

const BaseUrl = 'http://api.weatherstack.com/';

export interface Params {
    access_key: string,
    query: string,
    units: string
}

export const fetchCurrentWeather = (): ThunkAction<void, any, unknown, AnyAction> => (dispatch, getState) => {

    const state = getState().weather;

    const params: Params = {
        access_key: apiKey,
        query: state.place,
        units: state.units
    }
  
   axios.get(`${BaseUrl}current`, {params})
   .then(response => {
        const current = response.data.current;
        const location = response.data.location;

        console.log("response weather code", current.weather_code)
        dispatch(fetchSuccessAction({
            temperature: current.temperature, 
            feelsLike: current.feelslike,
            humidity: current.humidity,
            weatherDescription: current.weather_descriptions[0],
            weatherCode: current.weather_code,
            windSpeed: current.wind_speed,
            windDirection: current.wind_dir,
            weatherIcon: current.weatherIcon,
            precipitation: current.precip,
            uvIndex: current.uv_index,
            lastUpdated: moment().format('HH:mm'),
            city: location.name,
            country: location.country,
            isDay: current.is_day
        }))
    })
    .catch(error => {
        dispatch(fetchErrorAction("ups... something went wrong, try another time."))
    })
};

export const fetchCurrentWeatherbyPlaceAndUnits = (values: any): ThunkAction<void, any, string, AnyAction> => { 
    return (dispatch) => {
    dispatch(changePlaceAction(values.city));
    dispatch(changeUnitsAction(values.units))
    dispatch(fetchCurrentWeather());
    };
};
