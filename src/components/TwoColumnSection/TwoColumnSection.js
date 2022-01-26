import React from 'react';
import LinkButton from '../LinkButton/LinkButton';
import './TwoColumnSection.scss';

const TwoColumnSection = props => {
  const { isTextOnLeft, children, h2text, content, btnText, btnLink, src } =
    props;
  return (
    <div className={`TwoColumnSection ${isTextOnLeft ? 'left' : 'right'}`}>
      <article className="textWrapper">
        <header className="titleWrapper">
          {children}
          <h2 className="mainTitle">{h2text}</h2>
        </header>
        <p className="text">{content}</p>
        <LinkButton btnText={btnText} btnLink={btnLink} />
      </article>
      <div className="sideImg">
        <img alt="cosmetics" src={src} />
      </div>
    </div>
  );
};

export default TwoColumnSection;
