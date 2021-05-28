import { useEffect } from "react";
import { hot } from "react-hot-loader";
import { useDispatch, useSelector } from "react-redux";

import { getCurrentWeather, getError, getPlace, getunits } from "./store/selectors";
import { fetchWeatherAction, fetchCurrentWeatherbyPlace } from "./store/thunks";
import PlaceForm from "./components/placeForm";


const App: React.FC<{}> = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherAction());
  }, [])

  const currentWeather = useSelector(getCurrentWeather);
  const city = useSelector(getPlace);
  const units = useSelector(getunits);
  const error = useSelector(getError);


  const submitCity = (values: any) => {
    dispatch(fetchCurrentWeatherbyPlace(values));
  }

  return (
    <>
    <PlaceForm onSubmit={submitCity}/>
    <h1>WEATHER APP</h1>
    <h2>{currentWeather?.city}, {currentWeather?.country}</h2>
    <h2>{currentWeather?.temperature}</h2>
    </>
  );
};

export default hot(module)(App); 
