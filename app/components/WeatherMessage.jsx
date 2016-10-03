var React = require('react');

var WeatherMessage = ({location,temp}) => {
  return(
    <div>
      <p>It's it {temp} in {location}</p>
    </div>
  );
}

module.exports = WeatherMessage;
