import React from "react";
import PropTypes from "prop-types";
import { Li, Img } from "./styled";

const ImageGalleryItem = ({ src, largeImg, getLargeImg }) => {
  return (
    <Li>
      <Img src={src} alt="" data-src={largeImg} onClick={getLargeImg} />
    </Li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
};
export default ImageGalleryItem;
