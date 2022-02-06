import React, { useEffect, useState, useRef } from 'react';
import './ProductsSlider.scss';

function ProductsSlider() {
  const [product, setProduct] = useState([]);
  const [current, setCurrent] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(result => setProduct(result));
  }, []);

  // useEffect(() => {
  //   slideRef.current.style.transition = 'all 0.5s ease-in-out';
  //   slideRef.current.style.transform = `translateX(-${current}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  // }, [current]);

  const leftBtn = () => {
    setCurrent(current - 1);
  };
  const rightBtn = () => {
    setCurrent(current + 1);
  };

  return (
    <section className="recommendBox">
      <div>
        <aside>
          <div>
            <header>
              <h2>함께 사용하기 좋은 제품</h2>
            </header>
          </div>
        </aside>
        <div>
          <button type="button" onClick={leftBtn}>
            prev click
          </button>
          <div className="recommendProducts">
            {/* {product.map((product) => {return(
              key={product[0] && product[0].product_id}
              name={{product[0] && product[0].name}} 
            )})} */}
            <div className="container">
              <img
                ref={slideRef}
                alt="products"
                src="https://picsum.photos/300"
              />
              <p>{product[0] && product[0].name}</p>
              <span>{product[0] && product[0].description}</span>
            </div>
            <div className="container">
              <img alt="products" src="https://picsum.photos/300" />
              <p>{product[0] && product[0].name}</p>
              <span>{product[0] && product[0].description}</span>
            </div>
            <div className="container">
              <img alt="products" src="https://picsum.photos/300" />
              <p>{product[0] && product[0].name}</p>
              <span>{product[0] && product[0].description}</span>
            </div>
          </div>
          <button type="button" onClick={rightBtn}>
            next click
          </button>
        </div>
      </div>
    </section>

    // <div className="slideBox">
    //   <div className="recommendProduct">
    //     <h2>함께 사용하기 좋은 제품</h2>
    //   </div>
    //   <div className="recommendBox">
    //     <div className="recommendItem" />
    //     <div className="box">
    //       <div className="container">
    //         <div className="inside-img">
    //           <img alt="slide" src="https://picsum.photos/300/300?random=1" />
    //           <div>
    //             <p>만다린</p>
    //             <p>시트러스함유</p>
    //           </div>
    //         </div>
    //         <div className="inside-img">
    //           <img alt="slide" src="https://picsum.photos/300/300?random=2" />
    //         </div>
    //         <div className="inside-img">
    //           <img alt="slide" src="https://picsum.photos/300/300?random=3" />
    //         </div>
    //         <div className="inside-img">
    //           <img alt="slide" src="https://picsum.photos/300/300?random=4" />
    //         </div>
    //         <div className="inside-img">
    //           <img alt="slide" src="https://picsum.photos/300/300?random=5" />
    //         </div>
    //         <div className="inside-img">
    //           <img alt="slide" src="https://picsum.photos/300/300?random=6" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default ProductsSlider;
