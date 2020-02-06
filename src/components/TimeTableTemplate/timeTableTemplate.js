import React from 'react';

export default class TimeTable extends React.Component {

  getTableTemplate = () => {
    const isLineItems = this.props.lineItems;
    var tableTemplate;

    if (isLineItems) {
      this.getMinutesLineTime(isLineItems);

      tableTemplate = isLineItems.map((item, i) => {
        return <tr key={i}>
          <td>{item.lineName}</td>
          <td>{item.stationName}</td>
          <td>{item.destinationName}</td>
          <td>{Math.round(item.timeToStation)} Min</td>
        </tr>
      })

      return tableTemplate;
    }

    return <div></div>
  }


  getMinutesLineTime(isLineItems){

  for (let i = 0; isLineItems[i]; i++) {
      if (isLineItems[i].timeToStation <= 3000) {
      isLineItems[i].timeToStation = isLineItems[i].timeToStation / 60;
    }
  }
}

  render() {
    const isLineItems = this.props.lineItems;
    
    if (isLineItems) {
      return (<div>
        <h1></h1>
        <table id="time_table">
          <thead>
            <tr><td>line number</td><td>Station Name</td><td>Destination</td><td>Time to station</td></tr>
          </thead>
          <tbody>
            {this.getTableTemplate()}
          </tbody>
        </table>
      </div>
      )
    }
    else {
      return null;
    }
  }
}
