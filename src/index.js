// Import the code we need
import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce some HTML
const App = () => {
    return <div>Hello React!</div>;
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container')); // <App /> is shorthand for <App></App> (must be empty component to use shorthand)
