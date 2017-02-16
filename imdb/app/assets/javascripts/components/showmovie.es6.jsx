class ShowMovie extends React.Component {
  render(){
      let movieData = this.props.movie

    return (
      <div className="show-movie">
        <h1>{movieData.Title}</h1>
        <div>
          <img className="poster" src={movieData.Poster} />
        </div>
        <ul>
          <li>Directed By: {movieData.Director} </li>
          <li>Written By: {movieData.Writer} </li>
          <li>Starring: {movieData.Actors} </li>
          <li>Rated: {movieData.Rated} </li>
          <li>Runtime: {movieData.Runtime} </li>
          <li>Genre: {movieData.Genre} </li>
        </ul>

        <h2>Plot</h2>
        <p> {movieData.Plot} </p>

        <h2>Reception</h2>
        <li>Nominations: {movieData.Awards} </li>
        <li>Metascore: {movieData.Metascore} </li>
        <li>imdb Rating: {movieData.imdbRating} </li>
        <li>imdb Votes: {movieData.imdbVotes} </li>

        <a id="go-back" href="/">Go Back</a>
      </div>
    )
  }
}
