import axios from "axios";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import moment from "moment";

import { apiKey } from "../../apiKey";
import {fetchSuccessAction, fetchErrorAction} from "./actions";
import { getFormWeatherState } from "../store/selectors";

const BaseUrl = 'http://api.weatherstack.com/';

export interface Params {
    access_key: string,
    query: string,
    units: string
}

export const fetchCurrentWeather = (): ThunkAction<void, any, unknown, AnyAction> => (dispatch, getState) => {
    const formWeatherState = getFormWeatherState(getState());

    const params: Params = {
        access_key: apiKey,
        query: formWeatherState?.city || "Vilnius",
        units: formWeatherState?.units || "m",
    }
  
   axios.get(`${BaseUrl}current`, {params})
   .then(response => {
        const current = response.data.current;
        const location = response.data.location;

        console.log(response)

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

export const fetchCurrentWeatherbyPlaceAndUnits = (): ThunkAction<void, any, string, AnyAction> => { 
    return (dispatch) => {
    dispatch(fetchCurrentWeather());
    };
};
