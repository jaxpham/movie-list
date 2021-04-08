import React from 'react';
import MovieListItem from './MovieListItem.jsx'


const MovieList = props => {
  const movies = props.list;
  return (
    <div>
      <ul>
        {movies.map((movie, index) =>
          < MovieListItem
            key={index}
            title={movie.title}
          />
          )}
      </ul>
    </div>
  )
}

export default MovieList;