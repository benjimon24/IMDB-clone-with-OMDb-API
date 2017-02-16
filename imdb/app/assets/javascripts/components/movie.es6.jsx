class Movie extends React.Component {
  render() {
    let movieData = {"poster": 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg', "title": "Batman", "year": "2017", "rating": "10/10", "plot": "Joyce bullies Ben"};

    return (
      <li className="movie">
          <div className="movie-content">
            <p>
              <img className ="poster" src={movieData.poster} />
              <span className="title">{movieData.title}</span> <br />
              <span className="year">{movieData.year}</span> <br />
              <span className="rating">{movieData.rating}</span> <br />
              <span className="plot">{movieData.plot}</span>
            </p>
          </div>
        </li>
    );
  };
}
