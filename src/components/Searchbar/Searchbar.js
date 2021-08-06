import React, { Component } from "react";
import PropTypes from "prop-types";
import { Header, Form, Button, Span, Input } from "./styled";

class Searchbar extends Component {
  state = {
    value: "",
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value: value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };
  render() {
    return (
      <Header>
        <Form onSubmit={this.onSubmit}>
          <Button type="submit">
            <Span className="label">Search</Span>
          </Button>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;
