import { useEffect } from "react";
import { hot } from "react-hot-loader";
import { useDispatch, useSelector } from "react-redux";

import { getCurrentWeather, getPlace } from "./store/selectors";
import { fetchWeatherAction } from "./store/thunks";
import WeatherState, { Weather } from "./store/types";
import PlaceForm from "./components/placeForm";


const App: React.FC<{}> = () => {

  // const currentWeather = useSelector<WeatherState, WeatherState['currentWeather']>(state => state.currentWeather);
  const currentWeather = useSelector(getCurrentWeather);
  const city = useSelector(getPlace);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherAction());
  }, [])

  console.log("currentWeather", currentWeather)

  const submit = (values: string) => {
    console.log(values)
  }

  return (
    <>
    <PlaceForm onSubmit={submit}/>
    <h1>WEATHER APP</h1>
    <div>{currentWeather?.temperature}</div>
    </>
  );
};

export default hot(module)(App);


/** 
 * Todo:
 * 1. panaudoti reselect
 * 2. naudoti redux-form imputams, submit button
 * 3. forma + submit button*/ 
