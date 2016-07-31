// Import the code we need
import React, { Component } from 'react'; // get React and React.Component, now React.Component can be accessed shorthand with Component

// Create a React component class
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }
    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })}
                />
            </div>
        );
    }
}

// Export the React component
export default SearchBar;
