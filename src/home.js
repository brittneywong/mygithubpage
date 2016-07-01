const React = require('react');


class Home extends React.Component {
  render() {
    return (
      <div> 
        <h1>brittney wong</h1>
        <h3>sup</h3>
        <Bio />
      </div>
    );
  }
}


class Bio extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>cool</li>
        </ul>
      </div>
    );
  }
}


module.exports = Home;
