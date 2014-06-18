/** @jsx React.DOM */

var React = require('react');
var Link = require('react-router').Link;

var App = module.exports = React.createClass({

  render: function() {
    return (
      <div className="container">
        <h1>App</h1>
        <ul>
          <li><Link to="index">Home</Link></li>
          <li><Link to="foo">Foo</Link></li>
          <li><Link to="bar">Bar</Link></li>
        </ul>
        {this.props.activeRoute}
      </div>
    );
  },

  renderIndex: function() {
    return (
      <div>
        <h2>Index</h2>
      </div>
    );
  }

});

