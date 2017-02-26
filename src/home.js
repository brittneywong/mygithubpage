const React = require('react');


class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      clickedName: 0,
    };
  }

  handleClick(event) {
    console.log(event);

    this.setState((state) => (
      { clickedName: state.clickedName += 1 }
    ));
  }

  renderPanda() {
    console.log(this.state);
    if (this.state.clickedName >= 3) {
      return <img className="panda panda-show" src="http://www.newyorker.com/wp-content/uploads/2016/01/Wright-D.C-Panda-Obsession-1200.jpg" />;
    }
    return <img className="panda" src="http://www.newyorker.com/wp-content/uploads/2016/01/Wright-D.C-Panda-Obsession-1200.jpg" />;
  }

  render() {
    return (
      <div> 
        <h1 
          className="home-title"
          onClick={this.handleClick}>
          Brittney Wong
        </h1>
        <hr className="hr"></hr>
        <h3 className="description">Hey! I am a biomedical engineering student at Arizona State with interests in business, event planning, and biotechnology.</h3>
        <Bio />
        {this.renderPanda()}
        <Info />
        <Footer />
      </div>
    );
  }
}


class Bio extends React.Component {
  render() {
    return (
      <div>
        <p
          className="location">Tempe, Arizona
          </p>
        <ul className="navigation-bar">
          <li className="email"><a href="mailto:brittneywong33@gmail.com">Email</a></li>
          <li className="LinkedIn"><a href="https://www.linkedin.com/in/brittneywong33">LinkedIn</a></li>
          <li className="VSCO"><a href="http://vsco.co/brittneywong3/images/1">VSCO</a></li>
        </ul>
      </div>
    );
  }
}


class Info extends React.Component {
render() {
  return (
    <div> 
      <h2 className="info-title">
      
      </h2>
    </div>
  )
}

}

class Footer extends React.Component {
  render() {
    return (
      <footer>

        <p>made by brittney</p>
      </footer>
    );
  }
}


module.exports = Home;
