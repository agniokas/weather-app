import { useEffect } from "react";
import { hot } from "react-hot-loader";
import { useDispatch, useSelector } from "react-redux";

import { fetchWeatherAction, fetchCurrentWeatherbyPlace } from "./store/thunks";
import PlaceForm from "./components/placeForm";
import LocationElement from "./components/locationElement";
import MainWeatherInfoElement from "./components/mainWeatherInfoElement";
import { getCurrentWeather, getunits } from "./store/selectors";

const App = () => {

  const dispatch = useDispatch();
  const currentWeather = useSelector(getCurrentWeather);
  const units = useSelector(getunits);

  useEffect(() => {
    dispatch(fetchWeatherAction());
  }, [])

  const submitCity = (values: any) => {
    dispatch(fetchCurrentWeatherbyPlace(values));
  }

  return (
    <>
      <div className="main">
        <PlaceForm onSubmit={submitCity}/>
        <hr />
        <LocationElement currentWeather={currentWeather}/>
        <MainWeatherInfoElement  currentWeather={currentWeather} units={units} />
      </div>
    </>
  );
};

export default hot(module)(App); 
