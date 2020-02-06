import React from 'react';
import Header from '../../sharedComponents/Header/header';
import Footer from '../../sharedComponents/Footer/footer';
import recordObj from '../../sharedObjects/recordObj.js';
import { Link } from 'react-router-dom';

export default class RecordsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: null
    };
  }

  componentDidMount = () => {
    const someHightlight = document.getElementById('qqq');

    let highlights = recordObj.highlights.map(x => {
      someHightlight.innerHTML = x
      return <p>{someHightlight.innerText}</p>
    })

    this.setState({ items: highlights });
  }

  render() {
    return (
      <div>
        <Header />
        <div class="some-record">
          <h2>
            {recordObj.name}
          </h2>
          <div id="qqq">
            {this.state.items == null ? "" : this.state.items}
          </div>
          <p>Score :{recordObj.score}/10</p>
          <Link to="/search"><button className="back-button">Back</button></Link>
        </div>

        <Footer />
      </div>
    )
  }
}