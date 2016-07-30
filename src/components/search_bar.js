// Import the code we need
import React, { Component } from 'react'; // get React and React.Component, now React.Component can be accessed shorthand with Component

// Create a React component class
class SearchBar extends Component {
    render() {
        return <input onChange={event => console.log(event.target.value)} />;
    }
}

// Export the React component
export default SearchBar;
