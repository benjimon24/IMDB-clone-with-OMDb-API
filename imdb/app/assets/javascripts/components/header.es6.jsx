class Header extends React.Component {
  constructor() {
  super();
  this.handleSubmit = this.handleSubmit.bind(this);
}

  handleSubmit(event) {
  event.preventDefault();
  let query = this.refs.content.value;

  $.ajax({
    url: `/movies/search/${query}`,
    data: {query}
  }).done(response => {
    console.log(response)
    debugger;
    this.props.searchResults(response);
    document.getElementById('search').value = '';
  }).fail(error => {
      alert("We couldn't find any matching search results")
  })
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
