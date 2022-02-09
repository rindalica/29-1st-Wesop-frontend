import React, { useState, useEffect } from 'react';
import CategoryModal from './NavModal/CategoryModal';
import './Nav.scss';

function Nav() {
  const [modal, setModal] = useState('categoryModalBoxHidden');
  const [navColor, setNavColor] = useState(false);
  //TODO
  // const [login, setLogin] = useState('로그인');
  // const [cartLength, setCartLength] = useState(1);
  const [categoryImg, setCategoryImg] = useState([]);
  const closeModal = () => {
    setNavColor(false);
    setModal('categoryModalBoxHidden');
  };
  const [categoryLists, setCategoryLists] = useState([]);
  useEffect(() => {
    fetch('/data/NavData.json')
      .then(res => res.json())
      .then(data => {
        setCategoryLists(data);
      });
  }, []);

  return (
    <div className="nav">
      <div className={navColor ? 'categoryNavModal' : 'categoryNav'}>
        <nav>
          <ul className="mainCategories">
            {categoryLists.map(
              ({ id, categoryName, className, categoryImg }) => {
                return (
                  <li key={id} className="mainCategory">
                    <button
                      onClick={function handleModal() {
                        setModal('categoryModalBox' + className);
                        setNavColor(true);
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
              <button className="mainCategoryClose" onClick={closeModal}>
                닫기 X
              </button>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="individualMenu">
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
