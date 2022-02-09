import React, { useState, useEffect } from 'react';
import CategoryModal from './CategoryModal';
import './Nav.scss';

function Nav() {
  const [modal, setModal] = useState('categoryModalBoxHidden');
  const [navColor, setNavColor] = useState('categoryNav');
  const [login, setLogin] = useState('로그인');
  const [cartLength, setCartLength] = useState(1);
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
        // console.log('data');
        setCategoryLists(data);
      });
  }, []);

  return (
    <div className="nav">
      <div className={navColor}>
        <nav>
          <ul className="mainCategories">
            {categoryLists.map(
              ({ id, categoryName, className, categoryImg, liClassName }) => {
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
        <nav>
          <ul className="individualMenu">
            <li className="loginMenu">
              <button className="loginBtn">{login}</button>
            </li>
            <li className="cartMenu">
              <button className="cartBtn">카트 {cartLength}</button>
            </li>
          </ul>
        </nav>
      </div>
      <CategoryModal categoryImg={categoryImg} categoryModalClassName={modal} />
    </div>
  );
}

export default Nav;
