import axios from "axios";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import moment from "moment";
import { FormState, formValues, getFormValues } from "redux-form";

import { apiKey } from "../../apiKey";
import AllWeatherState, * as actions from "./types";
import { getPlace } from "./selectors";

const BaseUrl = 'http://api.weatherstack.com/';

export interface Params {
    access_key: string,
    query: string,
    units: string
}

export const fetchWeatherAction = (): ThunkAction<void, any, unknown, AnyAction> => (dispatch, getState) => {

    const state = getState().weather;
    
console.log("state", state.place)

    const params: Params = {
        access_key: apiKey,
        query: state.place,
        units: state.units
    }

    console.log("params", params)
  
   axios.get(`${BaseUrl}current`, {params})
   .then(response => {
       console.log("response", response);
        const current = response.data.current;
        const location = response.data.location;

        dispatch({
            type: actions.FETCH_WEATHER_SUCCESS,
            payload: {
                temperature: current.temperature, 
                feelsLike: current.feelslike,
                humidity: current.humidity,
                weatherDescription: current.weather_descriptions[0],
                weatherIcon: current.weather_icons[0],
                windSpeed: current.wind_speed,
                windDirection: current.wind_dir,
                lastUpdated: moment().format('HH:mm'),
                city: location.name,
                country: location.country,
                isDay: current.is_day
            }
        })
    })
    .catch(error => {
        dispatch({
            type: actions.FETCH_WEATHER_ERROR,
            payload: "ups... something went wrong, try another time."
        })
    })
    
}

export const fetchCurrentWeatherbyPlace = (values: any): ThunkAction<void, any, string, AnyAction> => { 
    return (dispatch) => {
    
    dispatch({
        type: actions.CHANGE_PLACE,
        payload: values.city
    })
    
    dispatch({
        type: actions.CHANGE_UNITS,
        payload: values.units
    })

    dispatch(fetchWeatherAction());
    }
}
