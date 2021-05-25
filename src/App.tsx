import { useEffect } from "react";
import { hot } from "react-hot-loader";

import { useDispatch, useSelector } from "react-redux"
import { fetchWeatherAction } from "./store/thunks";
import WeatherState, { Weather } from "./store/types";

const App: React.FC<{}> = () => {

  const currentWeather = useSelector<WeatherState, WeatherState['currentWeather']>(state => state.currentWeather);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherAction());
  }, [])

  console.log(currentWeather)

  return (
    <>
    <h1>WEATHER APP</h1>
    </>
  );
};

export default hot(module)(App);

/** 
 * Todo:
 * 1. panaudoti reselect
 * 2. naudoti redux-form imputams, submit button
 * 3. forma + submit button*/ 
