import React from 'react';
import { Link } from 'react-router-dom';
import recordObj from '../../sharedObjects/recordObj.js';

export default class Record extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      searchItems: undefined
    };
  }


  getSearchTemplate = () => {
    
    if (this.props.searchItems) {
      
      const matches = this.props.searchItems.matches;
      let searchTemplate = matches.map((item, i) => {
        return <div key={i} className="news"><h2 className="news-name">{item.name}</h2><p className="score">Score {item.score.toFixed(2) * 10}/10</p>
          <Link onClick={() => {
            recordObj.name = item.name;
            recordObj.highlights = item.highlights;
            recordObj.score = item.score;
          }}
            to="/records"><button className="read-more">Read More</button></Link></div>
      })
      return searchTemplate;
    }
    else {
      return <div></div>
    }
  }


  render() {



    return (
      <React.Fragment>
        {this.getSearchTemplate()}
      </React.Fragment>
    )
  }
}