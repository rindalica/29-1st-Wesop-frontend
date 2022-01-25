import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

const Button = ({ link, content }) => {
  return (
    <Link to={link}>
      <div className="Button">
        {content}
        <i className="fas fa-arrow-right" />
      </div>
    </Link>
  );
};

export default Button;
