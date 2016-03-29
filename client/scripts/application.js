var React = require('react');

var App = React.createClass({
	render: function() {
		return (
			<div>Hello Marc</div>
		);
	}
});

React.render(
	<App />,
	document.getElementById('app')
);
