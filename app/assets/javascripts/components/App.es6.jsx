class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movieList: [],
      movie: {}
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.displayMovie = this.displayMovie.bind(this);
  }

  handleSearch(results) {
    this.setState({ movieList: results });
  }

  displayMovie(result) {
    this.setState({ movie: result });
  }

  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch} />
        <div className="result">
          <SearchResults movieList={this.state.movieList} displayMovie={this.displayMovie} />
          <Details movie={this.state.movie} />
        </div>
      </div>
    );
  }
}
