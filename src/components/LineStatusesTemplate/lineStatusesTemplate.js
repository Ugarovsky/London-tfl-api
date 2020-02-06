import React from 'react';
import getRequest from '../../services/api';

export default class LineStatusTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        const lineModeStatusURL = "https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail/status";
        getRequest(lineModeStatusURL)
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="line-status-container">
                    <h1 id="blink1">Line's tubes statuses Online</h1>
                    <div className="line-status-template">
                        {items.map(item => (
                            <div className="line-status-block" key={item.name}>
                                <h1> {item.name} </h1><p>Type: {item.modeName}</p> <p>Created: {item.created.replace('T', ' ')} </p> <p>Status: {item.lineStatuses[0].statusSeverityDescription} </p> </div>
                        ))}
                    </div>
                </div>
            );
        }
    }
}