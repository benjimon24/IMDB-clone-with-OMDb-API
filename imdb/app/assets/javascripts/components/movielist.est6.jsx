class MovieList extends React.Component {
  render() {
    let movies = this.props.movies
    return (
      <section className="movie-list">
        <ul>
          {this.props.movies.map((movie, i) => {return <Movie movie={movie} key={i} />})}
        </ul>
      </section>

    )
  }
}
