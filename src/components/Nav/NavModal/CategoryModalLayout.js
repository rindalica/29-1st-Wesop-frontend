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
        {categoryImg.map(img => {
          return (
            <img
              className="categoryImg"
              key={img.id}
              alt={img.imgAlt}
              src={img.imgSrc}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CategoryModalLayout;
