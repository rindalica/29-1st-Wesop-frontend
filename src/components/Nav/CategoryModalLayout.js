import React from 'react';

function CategoryModalLayout({ categoryModalClassNames, children }) {
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
      </div>
    </div>
  );
}

export default CategoryModalLayout;
