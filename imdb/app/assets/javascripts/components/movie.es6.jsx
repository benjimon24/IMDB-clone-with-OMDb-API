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

  handleClick(event) {
    event.preventDefault();

    $.ajax({
      url: "http://www.omdbapi.com/?i=" + this.state.data.imdbID,
    }).done(response=>{
      $('.show-movie').show();
      this.props.displayMovie(response);
    }.bind(this))
  }

  render() {
    let movieData = this.props.movie
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
