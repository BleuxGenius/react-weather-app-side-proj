import React from 'react';
import Titles from './components/Titles';
import Form from "./components/Form";
import Weather from './components/Weather';



// API Key
const API_KEY = "c82a11bceccd51b03a9ec65d1ab6aee3";  

// initilize component 
class App extends React.Component {

  state = {
    temperature: undefined, 
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  // console.log(data)
  // create method to get the weather 

  getWeather = async (e) => {

    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    // create constant that is a function to fetch api,
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);

      // converting the api and assigning to constant called data 
      const data = await api_call.json();

      // checking to make sure if city and country has a value then do nothing 
      if (city  && country ){ 
      
      

      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please enter the values'
      });
    }
  }

  // returns JSX 
render(){
  return (

    // 
<div>
  <div className="wrapper">
    <div className="main">
      <div className="container">
        <div className="row">
          <div className="col-xs-5 title-container">
            <Titles />
        </div>

        <div className="col-xs-3 form-container">
        <Form getWeather={this.getWeather}/>
          <Weather 
              temperature={this.state.temperature} 
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}
            />
        </div>
      </div>z
    </div>
  </div>
</div>
</div>

  );
}

};
  

export default App;
