class Search extends React.Component {
  constructor() {
  super();
  this.handleSubmit = this.handleSubmit.bind(this);
}

  handleSubmit(event) {
    event.preventDefault();
    let query = this.refs.content.value;
    let url = "https://www.omdbapi.com/?s=" + query + "&apikey=4b804138";
    $.ajax({
      url: url,
    }).done(response=>{
      this.props.handleSearch(response.Search);
      document.getElementById('search').value = '';
      $('.show-movie').hide();
    }).fail(error =>{
      alert("Sorry! We could not find any matching search results.")
      document.getElementById('search').value = '';
    })
  }

  render() {
    return (
      <div>
        <form id="search-form" onSubmit={this.handleSubmit}>
          <input ref='content' id="search" type="text" name="query" placeholder="Search by Movie Title" />
        </form>
      </div>
    )
  }
}
