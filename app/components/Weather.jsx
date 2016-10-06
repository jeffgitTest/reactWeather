var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function(){
    return{
      isLoading : false
    }
  }, //get state of an object
  valueHandler: function(cityName){
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });

    openWeatherMap.getTemp(cityName).then(
      function (temp) {
        that.setState({
          location: cityName,
          temp: temp,
          isLoading: false
        });
      },
      function (e) {
        that.setState({
          isLoading: false,
          errorMessage: e.message
        });
      });
  },

  componentDidMount: function(){
      var location = this.props.location.query.location;
      if(location && location.length > 0){
        this.valueHandler(location);
        window.location.hash = '#/';
      }
  },

  componentWillReceiveProps: function(jeffProps){
    var location = jeffProps.location.query.location;
    if(location && location.length > 0){
      this.valueHandler(location);
      window.location.hash = '#/';
    }
  },

  render: function(){
    var {isLoading, location, temp, errorMessage} = this.state;

    function renderMessage() {
      if(isLoading){
        return <h3 className="text-center">Fetching Weather...</h3>;
      }else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }

    function renderError(){
      if(typeof errorMessage === 'string'){
        return <ErrorModal message={errorMessage}/>;
      }
    }

    return(
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm varGetter={this.valueHandler}/>
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
