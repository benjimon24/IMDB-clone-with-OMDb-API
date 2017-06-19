class Movie extends React.Component {
  constructor(){
    super();
    this.state = {
      data: {},
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount(){
    this.setState({data: this.props.movie})
  }

  // handleClick(event) {
  //   event.preventDefault();
  //
  //   $.ajax({
  //     url: "https://www.omdbapi.com/?i=" + this.state.data.imdbID,
  //   }).done(response=>{
  //     $('.show-movie').css("display", "inline-block");
  //     this.props.displayMovie(response);
  //   }.bind(this))
  // }

  handleClick(event) {
    event.preventDefault();
    //
    // $.ajax({
    //   url: "https://www.omdbapi.com/?i=" + this.state.data.imdbID,
    // }).done(response=>{
      $('.show-movie').css("display", "inline-block");
      this.props.displayMovie({});
    // }.bind(this))
  }

  render() {
    // let movieData = this.props.movie
    let movieData = {
      Poster: "http://t0.gstatic.com/images?q=tbn:ANd9GcQ0S5JQhVplHbw7O6nt7Q0r23Bssl9UNzC-z3zy1r45_eLUB43l",
      Title: "Rogue One",
      Year: "2016"
    }

    return (
      <li className="movie">
        <a onClick={this.handleClick}>
          <div className="movie-content">
            <img className="poster" src={movieData.Poster} />
            <div className="movieInfo">
              <span className="title">{movieData.Title}</span> <br />
              <span className="year">{movieData.Year}</span> <br />
            </div>
          </div>
        </a>
      </li>
    );
  };
}
