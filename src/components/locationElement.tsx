import React, {useState} from "react";

import { Weather } from "../store/types";

const locationElement: React.FC<{ currentWeather: Weather | null}> = (props) => {

    const currentWeather = props.currentWeather;

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