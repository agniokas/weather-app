import React, { useEffect } from "react";
import { hot } from "react-hot-loader";
import { useDispatch } from "react-redux";

import { fetchCurrentWeather, fetchCurrentWeatherbyPlaceAndUnits } from "./store/thunks";
import WeatherForm from "./components/forms/WeatherForm";
import WeatherInfo from "./components/WeatherInfo";
import Language from "./components/language/Language";


const App = () => {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchCurrentWeather());
  }, [])

  const submit = () => {
    dispatch(fetchCurrentWeather());
  }

  return (
    <>
      <div className="main">
        <Language />
        <WeatherForm onSubmit={submit}/>
        <hr />
        <WeatherInfo />
      </div>
    </>
  );
};

export default hot(module)(App); 
