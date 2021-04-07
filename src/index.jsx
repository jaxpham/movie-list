import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';


var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];
ReactDOM.render(<App movies={movies}/>, document.getElementById('root'));

