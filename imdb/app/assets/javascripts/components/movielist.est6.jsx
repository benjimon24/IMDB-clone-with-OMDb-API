class MovieList extends React.Component {


  render() {
    //let movies = [array of movies]

    return (
      <section className="movie-list">
        <ul>
          <Movie />
          {/* this.props.movies.map((movie, i )) */}
        </ul>
      </section>

    )
  }
}
