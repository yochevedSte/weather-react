import React from 'react';
import WeatherBox from './WeatherBox';
import './App.css';

const WeatherListBox = (props) => {
  const boxes = props
    .boxes
    .map((item, index) => <WeatherBox
      key={index}
      item={item} 
      handleSubmitComment={props.handleSubmitComment}
      removeWeather={props.removeWeather(index)}
      removeComment={props.removeComment(index)}
      />);
  return (
    <div className="row">
      {boxes}
    </div>
  );

}

export default WeatherListBox;