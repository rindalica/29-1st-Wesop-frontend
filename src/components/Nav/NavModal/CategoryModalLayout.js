import React from 'react';
import { Link } from 'react-router-dom';
function CategoryModalLayout({
  categoryModalClassNames,
  children,
  categoryImg,
  closeModal,
}) {
  return (
    <div className={categoryModalClassNames}>
      <div className="categoryModalMain">
        <div className="modalLogoBox">
          <Link to="/" onClick={closeModal}>
            <img
              className="modalLogo"
              src="../../../images/logo-darkgray.png"
              alt="modalLogo"
            />
          </Link>
        </div>
        {children}
        {categoryImg.map(img => {
          return (
            <img
              className="categoryImg"
              key={img.imgId}
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
