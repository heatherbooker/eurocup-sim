const React = require('react');

class ScoresInput extends React.Component {
  constructor() {
    super();
    this.state = {
      score1Input: '',
      score2Input: '',
      team1Input: '',
      team2Input: '',
    };
  }
  handleScore1Input(event) {
    this.setState({score1Input: Number(event.target.value)});
  }
  handleTeam1Input(event) {
    this.setState({team1Input: event.target.value});
  }
  handleScore2Input(event) {
    this.setState({score2Input: Number(event.target.value)});
  }
  handleTeam2Input(event) {
    this.setState({team2Input: event.target.value});
  }
  dispatchNewScore() {
    this.setState({
      score1Input: '',
      score2Input: '',
      team1Input: '',
      team2Input: '',
    });
    var scoreToSet = new CustomEvent('newScore', {
      'detail': {
        'team1': this.state.team1Input,
        'score1': this.state.score1Input,
        'team2': this.state.team2Input,
        'score2': this.state.score2Input,
      }
    });
    window.dispatchEvent(scoreToSet);
  }
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Team 1"
          value={this.state.team1Input}
          onChange={this.handleTeam1Input.bind(this)}
        />
        <input
          type="text"
          placeholder="Score for Team 1"
          value={this.state.score1Input}
          onChange={this.handleScore1Input.bind(this)}
        />
        <input
          type="text"
          placeholder="Team 2"
          value={this.state.team2Input}
          onChange={this.handleTeam2Input.bind(this)}
        />
        <input
          type="text"
          placeholder="Score for Team 2"
          value={this.state.score2Input}
          onChange={this.handleScore2Input.bind(this)}
        />
        <button onClick={this.dispatchNewScore.bind(this)}>
          Submit Score
        </button>
      </div>
    );
  }
}

module.exports = ScoresInput;
