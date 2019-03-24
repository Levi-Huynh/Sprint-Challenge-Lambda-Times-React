import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.img} />
        </div>
        <span>By {props.author}</span>
      </div>
    </div>
  );
};

Card.PropTypes= {
  object: PropTypes.shape({
  headline: props.string.isRequired,
  author: props.string.isRequired,
  img: props.string.isRequired,
  tab: props.string.isRequired
})
};

// Make sure to include PropTypes.

export default Card;
