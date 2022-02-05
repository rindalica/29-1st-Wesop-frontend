import React from 'react';

function CategoryModalLayout({
  categoryModalClassNames,
  children,
  categoryImg,
}) {
  return (
    <div className={categoryModalClassNames}>
      <div className="categoryModalMain">
        <div className="modalLogoBox">
          <img
            className="modalLogo"
            src="../../../images/logo-darkgray.png"
            alt="modalLogo"
          />
        </div>
        {children}
        {categoryImg.map(y => {
          return (
            <img
              className="categoryImg"
              key={y.id}
              alt={y.imgAlt}
              src={y.imgSrc}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CategoryModalLayout;
