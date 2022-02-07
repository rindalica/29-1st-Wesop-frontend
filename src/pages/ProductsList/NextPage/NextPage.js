import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './NextPage.scss';

function NextPage() {
  const [subcatProducts, setSubcatProducts] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  const goToNext = () => {
    navigate(`/skin/categories/${Number(params.subcatId) + 1}`);
  };

  useEffect(() => {
    fetch(
      `http://172.30.1.24:8000/skin/categories/${Number(params.subcatId) + 1}`
    )
      .then(res => res.json())
      .then(data => {
        if (data) {
          setSubcatProducts(data.message);
        }
      });
  }, [params.subcatId]);

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

        <h2 className="nextTitle">아름다움을 가꿔나가는 과정</h2>

        <button className="nextBtn" type="button" onClick={goToNext}>
          <div className="Btn-content">
            <span className="Btn-label">
              {subcatProducts.sub_category_name}
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default NextPage;
