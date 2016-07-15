const React = require('react');


class TeamPage extends React.Component {
  getScore() {
    var scores = JSON.parse(window.localStorage.getItem('teamScores'));
    return scores[this.props.params.teamName];
  }
  render() {
    var score = this.getScore();
    return (
      <div>
        <h1>{this.props.params.teamName}</h1>
        <h3>Score: {score}</h3>
        <h4>Matches:</h4>
          <ol>
            <li>TBA</li>
            <li>TBA</li>
            <li>TBA</li>
          </ol>
      </div>
    );
  }
}

module.exports = TeamPage;
