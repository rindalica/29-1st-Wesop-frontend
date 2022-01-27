import React from 'react';
import LinkButton from '../LinkButton/LinkButton';
import './TwoColumnsPromotion.scss';

const TwoColumnsPromotion = props => {
  const {
    isTextOnLeft,
    isContentImg,
    children,
    subTitle,
    heading,
    paragraph,
    btnText,
    btnLink,
    alt,
    src,
  } = props;
  return (
    <section
      className={`TwoColumnsPromotion ${isTextOnLeft ? 'left' : 'right'}`}
    >
      <article className="textWrapper">
        <header className="titleWrapper">
          {subTitle && <h3 className="subTitle">{subTitle}</h3>}
          <h2 className="mainTitle">{heading}</h2>
        </header>
        <p className="text">{paragraph}</p>
        <LinkButton btnText={btnText} btnLink={btnLink} />
      </article>
      <aside className="asideContent">
        {isContentImg ? <img alt={alt} src={src} /> : children}
      </aside>
    </section>
  );
};

export default TwoColumnsPromotion;
