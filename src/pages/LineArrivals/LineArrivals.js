import React from 'react';
import TimeTable from '../../components/TimeTableTemplate/timeTableTemplate';
import SearchForm from '../../sharedComponents/SearchLineForm/searchLineForm';
import Header from '../../sharedComponents/Header/header';
import Footer from '../../sharedComponents/Footer/footer';
import getRequest from '../../services/api.js';

export default class LineArrivals extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      lineItems: undefined
    };
  }

  getLinesInfo = (e) => {
    e.preventDefault();
    const lineNumber = e.target.elements.line.value;
    const lineNumberURL = `https://api.tfl.gov.uk/line/${lineNumber}/arrivals?`;
    getRequest(lineNumberURL).then(
      (result) => {
          this.setState({
              lineItems: result,
          });
      },
    )}


  render(){
    return(
      <div>
        <Header />
       <SearchForm infoMethod={this.getLinesInfo} />
        <TimeTable
          lineItems = {this.state.lineItems}
        />
        <Footer />
      </div>
    )
  }
}