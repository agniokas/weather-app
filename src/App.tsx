import { useEffect } from "react";
import { hot } from "react-hot-loader";
import { useDispatch, useSelector } from "react-redux";

import { fetchWeatherAction, fetchCurrentWeatherbyPlace } from "./store/thunks";
import PlaceForm from "./components/placeForm";
import LocationElement from "./components/locationElement";
import MainWeatherInfoElement from "./components/mainWeatherInfoElement";
import AdditionalInfoElement from "./components/additionalInfoElement";

const App: React.FC<{}> = () => {

  const dispatch = useDispatch();

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
        <LocationElement />
        <MainWeatherInfoElement />
        {/* <AdditionalInfoElement/> */}
      </div>
    </>
  );
};

export default hot(module)(App); 
