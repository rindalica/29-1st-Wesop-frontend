import React from 'react'; //{ useEffect }
import { Link } from 'react-router-dom';
//import Nav from '../../components/Nav/Nav';
//import Footer from '../../components/Footer/Footer';
import './ProductsDetail.scss';
import '../../styles/reset.scss';
import '../../styles/variables.scss';
import Slider from './Slider';

function ProductsDetail() {
  // useEffect(() => {
  //   fetch("", {
  //     method: "GET",
  //   })
  //   .then((res) => res.json())
  //   .then((result) => )
  // })

  return (
    <>
      <title>Products Detail</title>
      {/* <Nav /> */}
      {/* heading section */}
      <div className="heading">
        <div className="logo">
          <logo />
        </div>
        <div className="imageBox">
          <img alt="product" src="https://picsum.photos/300" />
        </div>
      </div>
      <div className="sidebar">
        <div className="sort">
          <ul className="sortBox">
            <li>
              <Link to="">스킨</Link>
            </li>
            <li>
              <Link to="">{}</Link>
            </li>
          </ul>
        </div>
        <div className="sideHeading">
          <div className="productName">
            <h1 className="name">{}</h1>
          </div>
          <div className="productExplanation">
            <p className="explain">{}</p>
          </div>
        </div>
        <ul className="productInfo">
          <li className="skinBox">
            <div className="skinType">피부 타입</div>
            <div className="description">{}</div>
          </li>
          <li className="useBox">
            <div className="feeling">사용감</div>
            <div className="description">{}</div>
          </li>
          <li className="ingredientsBox">
            <div className="ingredients">주요 성분</div>
            <div className="description">{}</div>
            <button>
              <span className="moreBtnIcon">+</span>
            </button>
          </li>
          <li className="sizeBox">
            <div className="size">사이즈</div>
            <div className="description">{}</div>
          </li>
          <div className="cartBtn">
            <button type="button" className="button">
              <span>카트에 추가하기 - {}</span>
            </button>
          </div>
        </ul>
      </div>

      {/* middle section */}
      <aside className="message">
        <div className="leftMsg">
          <p>무료 선물 포장 서비스</p>
          <p>주문하신 모든 제품에 대해 선물 포장 서비스를 제공해 드립니다.</p>
        </div>
        <div className="rightMsg">
          <p>샘플 & 코튼 백 증정</p>
          <p>
            모든 주문 건에 무료 샘플과 코튼 백을 제공해 드립니다. (샘플 종류는
            임의 지정이 불가합니다.)
          </p>
        </div>
      </aside>

      {/* middle 2 section */}
      <article className="productsDescription">
        <sectin>
          <div className="mainPicture">
            <img
              alt="detail"
              className="explainImg"
              src="https://picsum.photos/370"
            />
          </div>
        </sectin>
        <section>
          <ul className="explainList">
            <li className="howToUse">
              <span>사용법</span>
              <h2>{}</h2>
            </li>
            <li className="useAmountBox">
              <div className="useAmount">사용량</div>
              <div className="description">{}</div>
            </li>
            <li className="textureBox">
              <div className="texture">텍스쳐</div>
              <div className="description">{}</div>
            </li>
            <li className="scentBox">
              <div className="scent">향</div>
              <div className="description">{}</div>
            </li>
          </ul>
        </section>
      </article>

      {/* recommend section */}
      <article className="recommend">
        <div className="recommendProduct">
          <h2>함께 사용하기 좋은 제품</h2>
        </div>
        <div className="recommendBox">
          <div className="recommendItem">
            {/* slider section */}
            <Slider />
          </div>
        </div>
      </article>

      {/* <Footer />? */}
    </>
  );
}

export default ProductsDetail;
