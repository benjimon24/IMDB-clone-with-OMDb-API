class MovieList extends React.Component {
  render() {
    let movies = this.props.movies
    return (
      <section className="movie-list">
        <ul>
          {this.props.movies.map((movie) => {
            return <Movie movie={movie} displayMovie={this.props.displayMovie} key={movie.imdbID} />})}
        </ul>
      </section>

    )
  }
}
