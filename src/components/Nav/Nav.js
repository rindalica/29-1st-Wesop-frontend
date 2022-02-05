import React, { useState, useEffect } from 'react';
import CategoryModal from './CategoryModal';
import './Nav.scss';

function Nav() {
  const [modal, setModal] = useState('categoryModalBoxHidden');
  const [navColor, setNavColor] = useState('categoryNav');
  const [categoryImg, setCategoryImg] = useState([]);
  const handleClose = () => {
    setNavColor('categoryNav');
    setModal('categoryModalBoxHidden');
  };
  const [categoryLists, setCategoryLists] = useState([]);
  useEffect(() => {
    fetch('/data/dataJimin.json')
      .then(res => res.json())
      .then(data => {
        setCategoryLists(data);
      });
  }, []);
  //console.log(categoryLists);

  return (
    <div className="nav">
      <div className={navColor}>
        <nav className="primaryMenu">
          <ul className="mainCategories">
            {categoryLists.map(
              ({ id, categoryName, className, categoryImg }) => {
                return (
                  <li key={id} className="mainCategory">
                    <button
                      onClick={function handleModal() {
                        setModal('categoryModalBox' + className);
                        setNavColor('categoryNavModal');
                        setCategoryLists(categoryLists);
                        setCategoryImg(categoryImg);
                      }}
                      className="mainCategoryBtn"
                    >
                      {categoryName}
                    </button>
                  </li>
                );
              }
            )}
            <li className="mainCategory">
              <button className="mainCategoryClose" onClick={handleClose}>
                닫기 X
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
      <CategoryModal categoryImg={categoryImg} categoryModalClassName={modal} />
    </div>
  );
}

export default Nav;
