class SearchResults extends React.Component {
  render() {
    let movieList = this.props.movieList;
    return (
      <section className="movie-list">
        <ul>
          {movieList.map(movie => {
            return <MovieCard movie={movie} displayMovie={this.props.displayMovie} key={movie.imdbID} />;
          })}
        </ul>
      </section>
    );
  }
}
