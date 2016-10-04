var React = require('react');

var WeatherMessage = React.createClass({
  capitalizeFirstLetter: function (string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  },
  render: function(props){
    var {location,temp} = this.props;
    return(
      <div>
        <p className="text-center">
          It's it {temp} in {this.capitalizeFirstLetter(location)}</p>
      </div>
    );
  }
});



// ({location,temp}) => {
//
//   return(
//
//   );
// }

module.exports = WeatherMessage;
