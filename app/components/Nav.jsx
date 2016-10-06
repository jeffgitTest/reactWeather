var React = require("react");
var {Link, IndexLink} = require("react-router");

var Nav = React.createClass({
  onJeffSubmit: function(e){
    e.preventDefault();
    alert("no function yet!");
    this.refs.search.value = "";
  },

  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App by Jeff</li>
            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink></li>
            <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link></li>
            <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onJeffSubmit}>
            <ul className="menu">
              <li><input type="search" ref="search" placeholder="Search Weather by City"/></li>
              <li><input type="submit" className="button" value="Get Weather"/></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;

// var old = (
//   <div>
//     <h2>Nav Component</h2>
//     <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
//     <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
//     <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
//   </div>
// );
