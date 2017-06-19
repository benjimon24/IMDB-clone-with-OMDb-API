class ShowMovie extends React.Component {
  render(){
    let movieData = this.props.movie

    return (
      <div className="show-movie">
        <h1>{movieData.Title}</h1>
        <div>
          <img className="full-poster" src={movieData.Poster} />
        </div>
        <li><span className="label">Directed By:</span> {movieData.Director} </li>
        <li><span className="label">Written By:</span> {movieData.Writer} </li>
        <li><span className="label">Starring:</span> {movieData.Actors} </li>
        <li><span className="label">Rated:</span> {movieData.Rated} </li>
        <li><span className="label">Runtime:</span> {movieData.Runtime} </li>
        <li><span className="label">Genre:</span> {movieData.Genre} </li>

        <h2>Plot</h2>
        <p> {movieData.Plot} </p>

        <h2>Reception</h2>
        <li><span className="label">Nominations:</span> {movieData.Awards} </li>
        <li><span className="label">Metascore:</span> {movieData.Metascore} </li>
        <li><span className="label">imdb Rating:</span> {movieData.imdbRating} </li>
        <li><span className="label">imdb Votes:</span> {movieData.imdbVotes} </li>

      </div>
    )
  }
}
