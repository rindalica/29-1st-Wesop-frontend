import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './NextPage.scss';

function NextPage() {
  const navigate = useNavigate();
  const params = useParams();

  const goToNext = () => {
    navigate(`/skin/categories/${Number(params.subcatId) + 1}`);
  };

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

        <button className="nextBtn" type="button" onClick={goToNext}>
          <div className="Btn-content">
            <span className="Btn-label"> 각질 제거</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default NextPage;
