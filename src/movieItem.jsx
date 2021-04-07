import React from 'react';

const MovieItem = ({movie}) => {
  return (
    <ul>
      <li>{movie.title}</li>
    </ul>
  )
}

export default MovieItem;