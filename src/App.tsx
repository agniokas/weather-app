import React, { useEffect } from "react";
import { hot } from "react-hot-loader";
import { useDispatch } from "react-redux";

import { fetchCurrentWeather, fetchCurrentWeatherbyPlaceAndUnits } from "./store/thunks";
import WeatherForm from "./components/forms/WeatherForm";
import WeatherInfo from "./components/WeatherInfo";


const App = () => {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchCurrentWeather());
  }, [])

  const submit = (values: any) => {
    dispatch(fetchCurrentWeatherbyPlaceAndUnits(values));
  }

  return (
    <>
      <div className="main">
        <WeatherForm onSubmit={submit}/>
        <hr />
        <WeatherInfo />
      </div>
    </>
  );
};

export default hot(module)(App); 
