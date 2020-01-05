import React from 'react';

const Weather = (props) => ( 
            <div>
               {/* this is so the information shows up once you click the button getWeather  */}
               {props.city && this.props.country && <p>Location: {props.city} , {props.country} </p>}
               {props.temperature && <p>Temperature: {props.temperature}</p>}
               {props.humidity && <p>Humidity: {props.humidity}</p>}
               {props.description && <p>Conditions: {props.description}</p> }
                {props.error && <p>{props.error}</p>}
               
            </div>
);

export default Weather;