import React from "react";
import { useDispatch } from "react-redux";
import { Form, Field, reduxForm } from "redux-form";

import { fetchCurrentWeatherbyPlace, fetchCurrentWeatherbyUnits } from "../../store/thunks";
import LocationForm from "./LocationForm";
import UnitsForm from "./UnitsForm";


interface Props { };

let WeatherForm: React.FC<{}>  = () => {

    const dispatch = useDispatch();

    const submitCity = (values: any) => {
        dispatch(fetchCurrentWeatherbyPlace(values));
      }

    const submitUnits = (values: any) => {
        dispatch(fetchCurrentWeatherbyUnits(values));
      }

    return (
        <div>
            <LocationForm onSubmit={submitCity} />
            <UnitsForm onSubmit={submitUnits}/>
        </div>
    )
}

export default WeatherForm