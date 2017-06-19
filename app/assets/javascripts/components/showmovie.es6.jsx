class ShowMovie extends React.Component {
  render(){
    // let movieData = this.props.movie
    let movieData = {
      Poster: "http://t0.gstatic.com/images?q=tbn:ANd9GcQ0S5JQhVplHbw7O6nt7Q0r23Bssl9UNzC-z3zy1r45_eLUB43l",
      Director: "Gareth Edwards",
      Writer: "Chris Weitz, Tony Gilroy",
      Actors: "Felicity Jones, Diege Luna, Alan Tudyk",
      Rated: "7.9/10",
      Runtime: "2h 13min",
      Genre: "Action, Adventure, Sci-Fi",
      Plot: "The Rebel Alliance makes a risky move to steal the plans for the Death Star, setting up the epic saga to follow.",
      Awards: "Nominated for 2 Oscars. Another 11 wins & 73 nominations.",
      Metascore: "65",
      imdbRating: "7.9/10",
      imdbVotes: "333,530"
    }

    return (
      <div className="show-movie">
        <h1>{movieData.Title}</h1>
        <div>
          <img className="full-poster" width="320" src={movieData.Poster} />
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
