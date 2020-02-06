import React from 'react';
import Header from '../../sharedComponents/Header/header';
import Footer from '../../sharedComponents/Footer/footer';
import LineStatusTemplate from '../../components/LineStatusesTemplate/lineStatusesTemplate';

export default class TubeStatuses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Header />
        <LineStatusTemplate />
        <Footer />
      </div>
    )
  }
}