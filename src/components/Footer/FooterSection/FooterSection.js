import React from 'react';

const FooterSection = ({ heading, list, text }) => {
  return (
    <section className="FooterSection">
      <h3 className="heading">{heading}</h3>
      <hr />
      {list && (
        <ul>
          {list.map((li, index) => (
            <li key={index}>{li}</li>
          ))}
        </ul>
      )}
      {text && <p>{text}</p>}
    </section>
  );
};

export default FooterSection;
