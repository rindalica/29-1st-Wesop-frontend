import React from 'react';
import { Link } from 'react-router-dom';
import './LinkButton.scss';

const LinkButton = ({ btnLink, btnText }) => {
  return (
    <Link className="LinkButton" to={btnLink}>
      <div className="button">
        {btnText}
        <i className="fas fa-arrow-right" />
      </div>
    </Link>
  );
};

export default LinkButton;
