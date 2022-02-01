import React, { useState } from 'react';
import SubcatProductsDetail from '../SubcatProductsDetail/SubcatProductsDetail';
import './SubcatProductsIntro.scss';

function SubcatProductsIntro({ lists }) {
  return (
    <div className="container">
      <div className="SubcatIntro">
        <div className="SubcatIntroDescription">
          <h1 className="SubcatIntroHeadline">
            {lists && lists.categoryDetailDescriptionHeader}
          </h1>
          <p className="SubcatIntroInfo">
            {lists && lists.categoryDetailDescription}
          </p>
        </div>
      </div>
      <SubcatProductsDetail productList={lists.productList} />
    </div>
  );
}

export default SubcatProductsIntro;
