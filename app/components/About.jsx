var React = require("react");

var About = () =>{
  return(
    <div>
      <h1 className="text-center">About</h1>
      <p>
        This is a Weather application build on React. I have built this
        for The Complete React Web App Developer Course.
      </p>
      <p>
        Here are some of the tools I used:
        <ul className="vertical menu">
          <li>
            <a href="https://facebook.github.io/react">React</a> - This was the
              Javascript Framework used.
          </li>
          <li>
            <a href="http://foundation.zurb.com/docs">Foundation</a> - This was
              used for styling the page.
          </li>
          <li>
            <a href="http://openweathermap.org/">Open Weather Map</a> - This was
              used for searching weather data by city name.
          </li>
        </ul>
      </p>
    </div>
  )
}

module.exports = About;
