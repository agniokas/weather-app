
import { ChangePlacePayload, ChangeUnitsPayload, FetchErrorPayload, FetchSuccessPayload } from "./actions";
import WeatherState, * as types from "./types";


const initialState: WeatherState = {
    currentWeather: null,
    place: 'Vilnius',
    units: 'm',
    error: '',
    weatherDataLoaded: false
}

const weatherReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.FETCH_WEATHER_SUCCESS:
            const weatherPayload = action.payload as FetchSuccessPayload;
            return {
                ...state,
                currentWeather: weatherPayload,
                error: '',
                weatherDataLoaded: true,
            }
        case types.FETCH_WEATHER_ERROR: 
            const errorPayload = action.payload as FetchErrorPayload;
            return {
                ...state,
                error: errorPayload,
                weatherDataLoaded: false,
            }
        case types.CHANGE_PLACE:
            const placePayload = action.payload as ChangePlacePayload;
            return {
                ...state,
                place: placePayload
            }
        case types.CHANGE_UNITS:
            const unitsPayload = action.payload as ChangeUnitsPayload;
            return {
                ...state,
                units: unitsPayload
            }
        default:
            return state
    }
}

export default weatherReducer