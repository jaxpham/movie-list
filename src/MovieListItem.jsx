import React from 'react';
import Toggle from './Toggle.jsx';

const MovieListItem = props => {
  return (
    <div>
     <span>{props.title}</span>
     <span> </span>
     <Toggle/>
    </div>
  )
}


export default MovieListItem;