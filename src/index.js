// Import the code we need
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar'; // ./ means current directory

const API_KEY = 'AIzaSyAE782XusBin97nbDNrrw28Hdd-hn0BRp8';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
    console.log(data);
});

// Create a new component. This component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container')); // <App /> is shorthand for <App></App> (must be empty component to use shorthand)
