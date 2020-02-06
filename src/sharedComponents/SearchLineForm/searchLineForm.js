import React from 'react';


export default class SearchLineForm extends React.Component {
    render() {
        return (
            <div className="search-line">
                <form onSubmit={this.props.infoMethod} id="search-form">
                    <h2>Find line Arrivals</h2>
                    <input type="number" name="line" required placeholder="Please enter line number..." />
                    <button>Search</button>
                </form>
            </div>
        );
    }
}

