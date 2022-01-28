import React, { useState, useEffect } from 'react';
import CategoryModal from './CategoryModal';
import CategoryNav from './CategoryNav';
import './Nav.scss';

// import { FiSearch } from 'react-icons/fi';

function Nav() {
  const [navColor, setNavColor] = useState('categoryNav');
  const [border, setBorder] = useState('');
  const [modal, setModal] = useState('categoryModalBoxHidden');
  const handleClickSkin = () => {
    setNavColor('categoryNavModal');
    setModal('categoryModalBoxSkin');
  };
  const handleClickBody = () => {
    setNavColor('categoryNavModal');
    setModal('categoryModalBoxBody');
  };
  const handleClickHair = () => {
    setNavColor('categoryNavModal');
    setModal('categoryModalBoxHair');
  };
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
  return (
    <div className="nav">
      <CategoryNav
        className={navColor}
        onClickSkin={handleClickSkin}
        onClickBody={handleClickBody}
        onClickHair={handleClickHair}
        onClickClose={handleClose}
      />
      <CategoryModal Lists={categoryLists} categoryModalClassName={modal} />
    </div>
  );
}

export default Nav;
