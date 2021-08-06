import React from "react";
import { Button } from "./styled";
import PropTypes from "prop-types";

const ButtonLoadMore = ({ onIncrement }) => (
  <Button type="button" onClick={onIncrement}>
    Load More
  </Button>
);

ButtonLoadMore.propTypes = {
  onIncrement: PropTypes.func.isRequired,
};

export default ButtonLoadMore;
