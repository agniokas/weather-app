import React, { useEffect } from "react";
import { hot } from "react-hot-loader";
import { useDispatch } from "react-redux";

import { fetchCurrentWeather, fetchCurrentWeatherbyPlaceAndUnits } from "./store/thunks";
import WeatherForm from "./components/WeatherForm";
import WeatherInfo from "./components/WeatherInfo";


const App = () => {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchCurrentWeather());
  }, [])

  const submitCity = (values: any) => {
    dispatch(fetchCurrentWeatherbyPlaceAndUnits(values));
  }

  return (
    <>
      <div className="main">
        <WeatherForm onSubmit={submitCity}/>
        <hr />
        <WeatherInfo />
      </div>
    </>
  );
};

export default hot(module)(App); 
