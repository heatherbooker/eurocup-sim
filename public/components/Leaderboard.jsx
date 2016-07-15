const React = require('react');
import { Link } from 'react-router'


function makeTeams(teamNames) {
  var teamMap = {};
  for (var i = 0; i < 8; i++) {
    var name = teamNames[i];
    teamMap[name] = 0;
  }
  return teamMap;
}


class Leaderboard extends React.Component {
  constructor() {
    super();
    var teamNames = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    window.addEventListener('newScore', (e) => {this.setScore(e)});
    this.state = this.getScores(teamNames);
  }
  getScores(teamNames) {
    if (!window.localStorage.getItem('teamScores')) {
      window.localStorage.setItem('teamScores', JSON.stringify(makeTeams(teamNames)));
      return {
        teamNames: teamNames,
        teamScores: makeTeams(teamNames)
      };
    } else {
      return {
        teamNames: teamNames,
        teamScores: JSON.parse(window.localStorage.getItem('teamScores'))
      };
    }
  }
  setScore(event) {
    var teamScoresObject = this.state.teamScores;
    teamScoresObject[event.detail.team1] += event.detail.score1;
    teamScoresObject[event.detail.team2] += event.detail.score2;
    this.setState({
      teamScores: teamScoresObject
    });
    window.localStorage.setItem('teamScores', JSON.stringify(teamScoresObject));
  }
  resetScores() {
    this.setState({
      teamScores: makeTeams(this.state.teamNames)
    });
    window.localStorage.setItem('teamScores', JSON.stringify(makeTeams(this.state.teamNames)));
  }
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Ranking</th>
              <th>Team Name</th>
              <th>Current Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <Link to={`/teams/${this.state.teamNames[0]}`}>
                {this.state.teamNames[0]}
                </Link>
              </td>
              <td>{this.state.teamScores[this.state.teamNames[0]]}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <Link to={`/teams/${this.state.teamNames[1]}`}>
                {this.state.teamNames[1]}
                </Link>
              </td>
              <td>{this.state.teamScores[this.state.teamNames[1]]}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <Link to={`/teams/${this.state.teamNames[2]}`}>
                {this.state.teamNames[2]}
                </Link>
              </td>
              <td>{this.state.teamScores[this.state.teamNames[2]]}</td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <Link to={`/teams/${this.state.teamNames[3]}`}>
                {this.state.teamNames[3]}
                </Link>
              </td>
              <td>{this.state.teamScores[this.state.teamNames[3]]}</td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <Link to={`/teams/${this.state.teamNames[4]}`}>
                {this.state.teamNames[4]}
                </Link>
              </td>
              <td>{this.state.teamScores[this.state.teamNames[4]]}</td>
            </tr>
            <tr>
              <td>6</td>
              <td>
                <Link to={`/teams/${this.state.teamNames[5]}`}>
                {this.state.teamNames[5]}
                </Link>
              </td>
              <td>{this.state.teamScores[this.state.teamNames[5]]}</td>
            </tr>
            <tr>
              <td>7</td>
              <td>
                <Link to={`/teams/${this.state.teamNames[6]}`}>
                {this.state.teamNames[6]}
                </Link>
              </td>
              <td>{this.state.teamScores[this.state.teamNames[6]]}</td>
            </tr>
            <tr>
              <td>8</td>
              <td>
                <Link to={`/teams/${this.state.teamNames[7]}`}>
                {this.state.teamNames[7]}
                </Link>
              </td>
              <td>{this.state.teamScores[this.state.teamNames[7]]}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={this.resetScores.bind(this)}>Reset</button>
      </div>
    );
  }
}

module.exports = Leaderboard;
