import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              Day & Time:{" "}
              <strong>
                <FormattedDate date={props.data.date} />
              </strong>
              ,
            </li>
            <li>
              Condition: <strong>{props.data.description}</strong>,
            </li>
            <li>
              Humidity: <strong>{props.data.humidity}%</strong>, Wind:{" "}
              <strong>{props.data.wind}km/h</strong>,
            </li>

            <li>
              Feels Like: <strong>props.data.feels_like</strong>, Pressure:
              <strong>props.data.pressure</strong>,
            </li>
            <li>
              Coordinates: lat.{" "}
              <strong>props.data.longitude</strong>, long.{" "}
              <strong>props.data.latitude</strong>.
            </li>
          </ul>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-8">
          <div className="temperature-container d-flex justify-content-end">
            <div className="icon-wrapper">
              <WeatherIcon code={props.data.icon} size={100} />
            </div>
            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
