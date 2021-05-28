import { useEffect } from "react";
import { hot } from "react-hot-loader";
import { useDispatch, useSelector } from "react-redux";

import { getCurrentWeather, getError, getPlace, getunits } from "./store/selectors";
import { fetchWeatherAction, fetchCurrentWeatherbyPlace } from "./store/thunks";
import PlaceForm from "./components/placeForm";
import { formValues } from "redux-form";


const App: React.FC<{}> = () => {

  // const currentWeather = useSelector<WeatherState, WeatherState['currentWeather']>(state => state.currentWeather);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherAction());
  }, [])

  const currentWeather = useSelector(getCurrentWeather);
  const city = useSelector(getPlace);
  const units = useSelector(getunits);
  const error = useSelector(getError);
  
  console.log("currentWeather", currentWeather)
  console.log("city", city)
  console.log("units", units)

  const submit = (values: any) => {
    console.log("submit button has been fired");
    dispatch(fetchCurrentWeatherbyPlace(values));
  }

  return (
    <>
    <PlaceForm onSubmit={submit}/>
    <h1>WEATHER APP</h1>
    <h2>{currentWeather?.city}, {currentWeather?.country}</h2>
    <h2>{currentWeather?.temperature}</h2>
    </>
  );
};

export default hot(module)(App);


/** 
 * Todo:
 * 1. panaudoti reselect
 * 2. naudoti redux-form imputams, submit button
 * 3. forma + submit button*/ 
