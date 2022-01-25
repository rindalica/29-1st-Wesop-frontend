import React, { useState } from 'react';
import './Nav.scss';

// import { FiSearch } from 'react-icons/fi';

function Nav() {
  const categoryData = [
    { name: '스킨케어' },
    { name: '바디&헨드' },
    { name: '헤어' },
    { name: '향수' },
    { name: '홈' },
    { name: '키트&여행 제품' },
    { name: '기프트 가이드' },
    { name: '읽기' },
    { name: '스토어' },
  ];

  const [isClick, setIsClick] = useState(false);
  const [navClassName, setNavClassName] = useState('nav');
  const handleClick = () => {
    setIsClick(!isClick);
    isClick ? setNavClassName('nav') : setNavClassName('navClick');
  };

  return (
    <div className={navClassName}>
      <nav className="primaryMenu">
        <ul className="mainCategories">
          {categoryData.map(data => {
            return (
              <li className="mainCategory">
                <button onClick={handleClick} className="mainCategoryBtn">
                  {data.name}
                </button>
              </li>
            );
          })}
          <li className="mainCategory">
            <button className="mainCategoryBtn">
              검색{/* <FiSearch /> */}
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

export default Nav;
