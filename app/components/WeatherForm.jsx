var React = require("react");

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var cityNameRefs = this.refs.cityName;
    var cityName = cityNameRefs.value;
    if(cityName.length>0){
      cityNameRefs.value = "";
      this.props.varGetter(cityName);
    }
  },
  render: function(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="search" ref="cityName" placeholder="Search Weather by City"/>
          <button className="hollow expanded button">Get Weather</button>
        </form>
      </div>

    );
  }
});

module.exports = WeatherForm;
