class Header extends React.Component {
  constructor() {
  super();
  this.handleSubmit = this.handleSubmit.bind(this);
}

//   handleSubmit(event) {
//   event.preventDefault();
//   let query = this.refs.content.value;
//
//   $.ajax({
//     url: `/movies/search/${query}`,
//     data: {query}
//   }).done(response => {
//     this.props.searchResults(response);
//     document.getElementById('search').value = '';
//   }).fail(error => {
//       alert("We couldn't find any matching search results")
//   })
// }

  handleSubmit(event) {
    event.preventDefault();
    let query = this.refs.content.value;
    url = "http://www.omdbapi.com/?s=" + query;
    $.ajax({
      url: url,
    }).done(response=>{
      this.props.searchResults(response.Search);
      document.getElementById('search').value = '';
    }.bind(this))
  }

  render() {
    return (
      <header>
        <form id="search-form" onSubmit={this.handleSubmit}>
          <input ref='content' id="search" type="text" name="query" placeholder="Search by Title" />
        </form>
      </header>
    )
  }
}
