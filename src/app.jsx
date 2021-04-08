import React from 'react';
import Header from './Header.jsx';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import MovieForm from './MovieForm.jsx';
import Toggle from './Toggle.jsx';

class App extends React.Component{
  constructor(props) {
    super(props);

    const movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'}
    ]

    const filterText = '';
    this.state = { movies, filterText };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.handleFilterGo = this.handleFilterGo.bind(this);
    }

    addMovie(item) {
      event.preventDefault();
      const movie = { title: item };
      // console.log(movie);
      const movieList = this.state.movies.slice();
      movieList.push(movie);
      // console.log(movieList)
      this.setState({
        movies: movieList
      })
      console.log(this.state);
    }

    handleFilterTextChange(filterText) {
      // console.log('THis is the event', filterText)
      this.setState({
        filterText: filterText
      },() => {
        console.log(this.state);
      });
    }

    handleFilterGo() {
      const searchTerm = this.state.filterText;
      const movieList = this.state.movies;
      for (var i = 0; i < movieList.length; i++) {
        if (searchTerm === movieList[i].title) {
          this.setState({ movies: [{title: searchTerm}] });
        }
      }
    }

  render() {
    return (
      <div>
        <Header />
        <MovieForm addMovie={this.addMovie}/>
        <SearchBar filterText={this.state.filterText} onFilterTextChange={this.handleFilterTextChange} handleFilterGo={this.handleFilterGo} />
        <Toggle />
        <MovieList list={this.state.movies} filterText={this.state.filterText}/>
      </div>
    )
  }
}

export default App;