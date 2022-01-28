import React from 'react';
import './CategoryNav.scss';

function CategoryNav({
  className,
  onClick,
  onClickSkin,
  onClickBody,
  onClickHair,
  onClickClose,
}) {
  return (
    <div className={className}>
      <nav className="primaryMenu">
        <ul className="mainCategories">
          {/* {categoryMenuData.map(data => {
            return (
              <li key={data.id} className={data.className}>
                <button onClick={onClick} className="mainCategoryBtn">
                  {data.name}
                </button>
              </li>
            );
          })} */}
          <li className="mainCategory">
            <button className="mainCategoryBtn" onClick={onClickSkin}>
              스킨 케어
            </button>
          </li>
          <li className="mainCategory">
            <button className="mainCategoryBtn" onClick={onClickBody}>
              바디 & 핸드
            </button>
          </li>
          <li className="mainCategory">
            <button className="mainCategoryBtn" onClick={onClickHair}>
              헤어
            </button>
          </li>
          <li className="mainCategory">
            <button className="mainCategoryClose" onClick={onClickClose}>
              닫기
            </button>
          </li>
        </ul>
      </nav>

      <nav className="secondaryMenu">
        <ul className="secondaryMenuList">
          <li className="loginMenu">
            <button className="loginBtn">로그인</button>
          </li>
          <li className="cartMenu">
            <button className="cartBtn">카트</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
const categoryMenuData = [
  { id: 1, name: '스킨 케어', className: 'mainCategoryBoxSkin' },
  { id: 2, name: '바디&핸드', className: 'mainCategoryBoxBody' },
  { id: 4, name: '향수', className: 'mainCategory perfume' },
  { id: 5, name: '홈', className: 'mainCategory home' },
  { id: 6, name: '키트&여행 제품', className: 'mainCategory kit' },
  { id: 7, name: '기프트 가이드', className: 'mainCategory gift' },
  { id: 8, name: '읽기', className: 'mainCategory read' },
  { id: 9, name: '스토어', className: 'mainCategory sstore' },
];
export default CategoryNav;
