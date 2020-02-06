import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LineArrivals from './pages/LineArrivals/LineArrivals';
import Searchpage from './pages/SearchPage/SearchPage';
import TubeStatuses from './pages/TubesPage/TubeStatuses';
import RecordsPage from './pages/RecordPage/RecordsPage';

export default class App extends React.Component  {
  render(){
    return (
      <div>
        <Route path="/" exact component={HomePage}/>
        <Route path="/arrivals" exact component={LineArrivals}/>
        <Route path="/search" exact component={Searchpage}/>
        <Route path="/statuses" exact component={TubeStatuses}/>
        <Route path="/records" exact component={RecordsPage}/>
      </div>
    )
  }
}