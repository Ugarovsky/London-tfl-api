import React from 'react';
import SearchFromTheSite from '../../components/SearchTheSiteFrom/searchTheSiteFrom';
import Header from '../../sharedComponents/Header/header';
import Footer from '../../sharedComponents/Footer/footer';



export default class Searchpage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <SearchFromTheSite />
        <Footer />
      </div>
    )
  }
}