import React from "react";
import './Card.css';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import { faCloud, faDroplet, faTemperature3, faWind } from '@fortawesome/free-solid-svg-icons';

const Card = (props) => {

  const { windInfo } = props;
  const { current ,location } = windInfo;

  return (
    <div className="card">
      <div className="top">
        <div className="flex">
          <span>{current.observation_time}</span>
        </div>
      </div>
      <div className="middle">
        <div className="box">
          <span className="font"><FA icon={faTemperature3}/>{current.temperature}&deg;C </span>
        </div>
        <div className="box flexcol">
          <label className="text">
          <FA icon={faCloud} />
          </label>
          {
            current.weather_descriptions.map((item)=>(
              <label className="text" key={item}>{item}</label>
            ))
          }
        </div>
        <div className="box">
          <img src={current.weather_icons} alt="weather icon" />
          <label className="text" >{ current.is_day==="yes"?"Day":"Night"}</label>
        </div>
      </div>
      <div className="middle">
        <div className="box humid">
          <span className="circle">{current.humidity} <FA  icon={faDroplet}/></span>
          <label className="text">Humidity</label>
        </div>
        <div className="box presure">
          <span className="circle">{current.pressure}</span>
          <label className="text">Pressure</label>
        </div>
      </div>
      <div className="middleDown">
        <div className="box">
          <label className="text"> Wind Direction <FA icon={faWind}/></label>
          <span className="value">{current.wind_dir}</span>
        </div>
        <div className="box">
          <label className="text">Wind Degree</label>
          <span className="value">{current.wind_degree} </span>
        </div>
        <div className="box">
          <label className="text">Wind Speed</label>
          <span className="value">{current.wind_speed}km/h</span>
        </div>
      </div>
      <div className="down">
        <div className="box"> Location: </div>
        <div className="box">
          <span>{location.name}{location.region}</span>
        </div>
        <div className="box">
          {location.country}
        </div>
      </div>
    </div>
  )

}
export default Card;