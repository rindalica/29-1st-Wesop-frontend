import React, { useState, useEffect } from 'react';
import CategoryModal from './NavModal/CategoryModal';
import LoginModal from '../LoginModal/LoginModal';
import './Nav.scss';

function Nav() {
  const [modal, setModal] = useState('categoryModalBoxHidden');
  const [navColor, setNavColor] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [categoryImg, setCategoryImg] = useState([]);
  const [categoryLists, setCategoryLists] = useState([]);
  const [cartModal, setCartModal] = useState(false);

  useEffect(() => {
    fetch('/data/NavData.json')
      .then(res => res.json())
      .then(data => {
        setCategoryLists(data);
      });
  }, []);

  useEffect(() => {
    document.body.className = isLoginOpen ? 'noScroll' : '';
  }, [isLoginOpen]);

  const closeModal = () => {
    setNavColor(false);
    setModal('categoryModalBoxHidden');
  };

  const openLogin = () => {
    setIsLoginOpen(true);
  };

  const openModal = () => {
    setCartModal(!cartModal);
  };
  return (
    <>
      <LoginModal isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} />
      {/* Fix : cart 머지 후 가져오기 */}
      {/* <CartModal cartModal={cartModal ? 'cartModal' : 'hidden'} /> */}
      <div className="Nav">
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
                <button className="loginBtn" type="button" onClick={openLogin}>
                  로그인
                </button>
              </li>
              <li className="cartMenu">
                <button className="cartBtn" type="button" onClick={openModal}>
                  카트
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <CategoryModal
          categoryImg={categoryImg}
          categoryModalClassName={modal}
          closeModal={closeModal}
        />
      </div>
    </>
  );
}

export default Nav;
