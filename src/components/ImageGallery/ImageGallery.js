import React from "react";
import PropTypes from "prop-types";

import ImageGalleryItem from "../ImageGalleryItem";
import { Ul } from "./styled";

const ImageGallery = ({ images, getLargeImg }) => (
  <Ul>
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        src={webformatURL}
        largeImg={largeImageURL}
        getLargeImg={getLargeImg}
      />
    ))}
  </Ul>
);

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  getLargeImg: PropTypes.func.isRequired,
};

export default ImageGallery;
