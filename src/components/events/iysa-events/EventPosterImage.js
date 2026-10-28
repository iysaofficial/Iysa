import React from 'react';

const EventPosterImage = ({ image, title }) => (
  <img src={image} alt={title} className="img-fluid rounded shadow" />
);

export default EventPosterImage;
