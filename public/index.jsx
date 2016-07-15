const React = require('react');
const ReactDOM = require('react-dom');
import { Router, Route, hashHistory } from 'react-router'
const ScoresInput = require('./components/ScoresInput.jsx');
const Leaderboard = require('./components/Leaderboard.jsx');
const TeamPage = require('./components/TeamPage.jsx');


var MainComponent = React.createClass ({
  render: function() {
    return (
      <div>
        <ScoresInput />
        <Leaderboard />
      </div>
    );
  }
});

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={MainComponent} />
    <Route path="/teams/:teamName" component={TeamPage} />
  </Router>,
  document.getElementById('app')
);
