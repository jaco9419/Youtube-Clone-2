import React from "react";

import { Paper, TextField } from "@material-ui/core";

class SearchBar extends React.Component {
  state = {
    searchTerm: "",
  };
  // It is not necessary to bind since this refers to the this in the class (arrow functions don't have it)
  handleChange = (event) => this.setState({ searchTerm: event.target.value });

  handleSubmit = (event) => {
    const { searchTerm } = this.state;
    const { onFormSubmit } = this.props;

    onFormSubmit(searchTerm);

    event.preventDefault();
  };

  render() {
    return (
      <Paper elevetion={6} style={{ padding: "25px" }} className="search-bar">
        <form onSubmit={this.handleSubmit}>
          <TextField
            label="Search..."
            style={{ width: "100%" }}
            onChange={this.handleChange}
          />
        </form>
      </Paper>
    );
  }
}

export default SearchBar;
