import React, { useState } from 'react';

import './SubcatProductsIntro.scss';

function SubcatProductsIntro({ category, description }) {
  return (
    <div className="SubcatIntroDescription">
      <h1 className="SubcatIntroHeadline">{category}</h1>
      <p className="SubcatIntroInfo">{description}</p>
    </div>
  );
}

export default SubcatProductsIntro;
