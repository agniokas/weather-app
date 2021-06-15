import * as actions from "./types";
import { Weather } from "./types";

export type FetchSuccessPayload = Weather;
export type FetchErrorPayload = string;

export const fetchSuccessAction = (currentWeather: FetchSuccessPayload) => ({
    type: actions.FETCH_WEATHER_SUCCESS,
    payload: currentWeather
})

export const fetchErrorAction = (error: FetchErrorPayload) => ({
    type: actions.FETCH_WEATHER_ERROR,
    payload: error
})


