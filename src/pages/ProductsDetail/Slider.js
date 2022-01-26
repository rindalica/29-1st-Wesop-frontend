import React from 'react';

function Slider() {
  function rightButton() {
    // transform: translate(-50vw);
    return (
      <>
        <p>hi</p>;
      </>
    );
  }
  return (
    <div className="slide-box">
      <button className="left-btn">{'<'}</button>
      <button className="right-btn" onClick={rightButton}>
        {'>'}
      </button>
      <div className="box">
        <div className="container">
          <div className="inside-img">
            <img alt="slide" src="https://picsum.photos/300/300?random=1" />
            <div>
              <p>만다린</p>
              <p>시트러스함유</p>
            </div>
          </div>
          <div className="inside-img">
            <img alt="slide" src="https://picsum.photos/300/300?random=2" />
          </div>
          <div className="inside-img">
            <img alt="slide" src="https://picsum.photos/300/300?random=3" />
          </div>
          <div className="inside-img">
            <img alt="slide" src="https://picsum.photos/300/300?random=4" />
          </div>
          <div className="inside-img">
            <img alt="slide" src="https://picsum.photos/300/300?random=5" />
          </div>
          <div className="inside-img">
            <img alt="slide" src="https://picsum.photos/300/300?random=6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;

{
  /* <Slider {...settings}>
{item &&
  item.recommendation_items.map(product => (
    <Recommendproduct
      id={product.id}
      // title={product.title}
      // content={product.content}
      name={product.product}
      image={product.image_url}
    />
  ))}
</Slider>  */
}
