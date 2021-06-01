import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";

import { getCurrentWeather, getError, getPlace, getunits } from "../store/selectors";

const locationElement: React.FC<{}> = () => {

    const currentWeather = useSelector(getCurrentWeather);

    const currentDate = Date.now();
    const today = new Date(currentDate);

    return (
        <> 
            <div className="element-wrap">
                <p className="location">
                    {currentWeather?.city}, <span>{currentWeather?.country}</span>
                </p>
                <p className="date">{today.toDateString()}</p>
            </div>
        </>
    )
}

export default locationElement;