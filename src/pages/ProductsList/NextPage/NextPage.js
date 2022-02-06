import React from 'react';
import './NextPage.scss';

function NextPage() {
  return (
    <div className="nextPageContainer">
      <div className="nextPageImageContainer">
        <img
          className="nextPageImage"
          src="/images/products/next.webp"
          alt="nextImage"
        />
      </div>
      <div className="nextPageInfo">
        <h5 className="nextPageHeader">다음 단계</h5>

        <h2 className="nextTitle">마찰로 만드는 아름다움</h2>

        <button className="nextBtn" type="button">
          <div className="Btn-content">
            <span className="Btn-label"> 각질 제거</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default NextPage;
