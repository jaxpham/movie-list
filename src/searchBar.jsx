import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleFilterGo = this.handleFilterGo.bind(this);
  }

  handleFilterGo(event) {
    event.preventDefault();
    this.props.handleFilterGo();
  }

  render() {
    // {console.log('this is the props', this.props)}
    return (
      <div>
        <form onSubmit={this.handleFilterGo}>

        <input
          type="text"
          placeholder="Search"
          value={this.props.filterText}
          onChange={(event) => {
            this.props.onFilterTextChange(event.target.value)
          }} />
          <span> </span>
          <button>Go!</button>
        </form>
      </div>
    )
  }
}

export default SearchBar;