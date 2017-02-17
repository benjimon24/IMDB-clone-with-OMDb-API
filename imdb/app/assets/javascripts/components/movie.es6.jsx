class Movie extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    // event.preventDefault();
    // console.log(this.refs.content.value)
    // "http://www.omdbapi.com/?i=#{params[:movie_id]}&r=json"
    // $.ajax(){
    //
    // }
  }

  render() {
    let movieData = this.props.movie
    // {"poster": 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg', "title": "Batman", "year": "2017", "rating": "10/10", "plot": "Joyce bullies Ben"};
    let link = `/movies/${movieData.imdbID}`
    return (
      <li className="movie">
          <div className="movie-content">
            <p>
              <a href={link} onClick={this.handleClick}><img className ="poster" src={movieData.Poster} /></a> <br />
              <span className="title">{movieData.Title}</span> <br />
              <span className="year">{movieData.Year}</span> <br />
            </p>
          </div>
        </li>
    );
  };
}
