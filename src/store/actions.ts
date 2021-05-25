import * as actions from "./types";
import { Weather } from "./types";

export type FetchSuccessPayload = Weather;
export type FetchErrorPayload = string;
export type ChangePlacePayload = string;
export type ChangeUnitsPayload = string;

export const fetchSuccessAction = (currentWeather: FetchSuccessPayload) => ({
    type: actions.FETCH_WEATHER_SUCCESS,
    payload: currentWeather
})

export const fetchErrorAction = (error: FetchErrorPayload) => ({
    type: actions.FETCH_WEATHER_ERROR,
    payload: error
})

export const changePlaceAction = (place: ChangePlacePayload) => ({
    type: actions.CHANGE_PLACE,
    payload: place
})

export const changeUnitsAction = (units: ChangeUnitsPayload) => ({
    type: actions.CHANGE_UNITS,
    payload: units
})

