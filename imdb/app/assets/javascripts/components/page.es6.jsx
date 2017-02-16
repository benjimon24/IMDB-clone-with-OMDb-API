class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
    this.searchResults = this.searchResults.bind(this)
  }

  searchResults(results) {
    this.setState({movies: results})
  }

  // clear() {
  //   this.setState({movies: []})
  // }

  render() {
    return (
      <div>
        <Header searchResults={this.searchResults}/>
        <MovieList movies={this.state.movies}/>
      </div>
    )
  }
}
