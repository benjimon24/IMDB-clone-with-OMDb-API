class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movie: {}
    };
    this.searchResults = this.searchResults.bind(this);
    this.displayMovie = this.displayMovie.bind(this);
  }

  searchResults(result) {
    this.setState({movies: result})
  }

  displayMovie(result){
    this.setState({movie: result})
  }

  render() {
    return (
      <div>
        <Header searchResults={this.searchResults}/>
        <div className="result">
          <MovieList movies={this.state.movies} displayMovie={this.displayMovie}/>
          <ShowMovie movie={this.state.movie}/>
        </div>
      </div>
    )
  }
}
