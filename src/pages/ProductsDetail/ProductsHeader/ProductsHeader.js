import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductsHeader.scss';
import IngredientsModal from '../IngredientsModal/IngredientsModal';
import CartModal from '../CartModal/CartModal';

function ProductsHeader() {
  const [product, setProduct] = useState([]);
  const [isShow, setIsShow] = useState(false); // 성분 사이드 모달창
  const [addCart, setAddCart] = useState([]);
  const [topShow, setTopShow] = useState(false); // 카트추가 상단 모달창

  useEffect(() => {
    fetch('http://172.30.1.24:8000/skin/products/1')
      .then(res => res.json())
      .then(result => {
        setProduct(result.message);
      });
  }, []);

  // useEffect(() => {
  //   console.log(product);
  // }, [product]);

  const btnHandler = () => {
    setIsShow(!isShow);
  };

  const addToBasket = () => {
    alert('카트에 추가됨');
    setAddCart(addCartt => {
      return [...addCart];
    });
    setTopShow(!topShow);
  };
  console.log(product);
  return (
    <div className="heading">
      <IngredientsModal
        isShow={isShow}
        product={product}
        btnHandler={btnHandler}
      />
      <CartModal topShow={topShow} product={product} />
      <div className="logo">
        <img alt="logo" src="/images/logo-darkgray.png" />
      </div>
      <div className="sideContainer">
        <div className="imageBox">
          <img alt="product" src="https://picsum.photos/300" />
        </div>
        <div className="productDetailHeader">
          <nav className="productDetail">
            <ul className="sortBox">
              <li>
                <Link to="/products-list">스킨</Link>
              </li>
              <span className="dot"> ∙ </span>
              <li>
                <Link to="">하이드레이터</Link>
              </li>
            </ul>
          </nav>
          <div className="productBox">
            <div className="productName">
              <h1 className="name">{product[0] && product[0].name}</h1>
            </div>
            <div className="productExplanation">
              <p className="explain">{product[0] && product[0].description}</p>
            </div>
          </div>
          <ul className="productInfo">
            <li className="skinBox">
              <div className="skinType">피부 타입</div>
              <div className="description">
                {product[0] && product[0].skin_type}
              </div>
            </li>
            <li className="useBox">
              <div className="feeling">사용감</div>
              <div className="description">시원한, 수분감의 가벼운 마무리</div>
            </li>
            <li className="ingredientsBox">
              <div className="buttonBox">
                <div className="ingredients">주요 성분</div>

                <button onClick={btnHandler}>
                  <span className="moreBtnIcon">+</span>
                </button>
              </div>
              <div className="description">
                {product[0] && product[0].key_ingredient}
              </div>
            </li>
            <li className="sizeBox">
              <div className="size">사이즈</div>
              <div className="description">
                {product[0] && product[0].product_detail[0].size}
              </div>
            </li>
            <div className="cartBtn">
              <button onClick={addToBasket} type="button" className="button">
                <span>
                  카트에 추가하기 - ₩
                  {Math.floor(product[0] && product[0].product_detail[0].price)}
                </span>
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductsHeader;
