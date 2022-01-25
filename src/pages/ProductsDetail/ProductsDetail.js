import React, { useEffect } from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer'
import { BrowserRouter } from "react-router-dom";
import Slider from './Slider';  

function ProductsDetail(){
  
  useEffect(() => {
    fetch("", {
      method: "GET",
    })
    .then((res) => res.json())
    .then((result) => )
  })

  return (
    <>
      <Nav />
      <title>Products Detail</title>
      <main>
        <div className='productsHead'>
          <img alt="logo" className="logo"></img>
          <img alt="product" src=""></img>
          <div>
            <ul className='description'>
            <h1 className='heading'></h1>
            <p className='description'></p>
              <li></li>
            </ul>
            <button>카트에 추가하기 - </button>
          </div>
        </div>
        <div className='productsMid'>
          <div>
            <span>무료 선물 포장 서비스</span>
            <span>주문하신 모든 제품에 대해 선물 포장 서비스를 제공해 드립니다.</span>
          </div>
          <div>
            <span>샘플 & 코튼 백 증정</span>
            <span>모든 주문 건에 무료 샘플과 코튼 백을 제공해 드립니다. (샘플 종류는 임의 지정이 불가합니다.)</span>
          </div>
        </div>
        <div className='productsDescription'>
          <img alt="product-detail" src=""></img>
          <div>
            <div>
              <h3>사용법</h3>
              <h2></h2>
              <div>
                <dl>
                  <dt>사용량</dt>
                  <dd></dd>
                  <dt>텍스쳐</dt>
                  <dd></dd>
                  <dt>향</dt>
                  <dd></dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className='productsWith'>
          <h2>함께 사용하기 좋은 제품</h2>
          <Slider />
        </div>
      </main>
      <Footer />
    </>
  ) 



export default ProductsDetail;