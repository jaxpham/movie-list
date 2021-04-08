import React from 'react';

class MovieForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movie: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // console.log(props)
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log('hello')
    const movie = this.state;
    this.props.addMovie(this.state.movie);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      movie: event.target.value
    })
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            name="movie"
            type='text'
            placeholder="Movie..."
            value={this.state.movie}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add Movie</button>
      </form>
    )
 }
}

export default MovieForm