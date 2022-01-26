import React from 'react';
import './CategoryModal.scss';
function CategoryModal() {
  return (
    <div className="categoryModal">
      <div className="categoryModalMain">
        <div>
          <img
            className="modalLogo"
            src="../../../images/logo-darkgray.png"
            alt="modalLogo"
          />
        </div>
        <div className="categoryDetail">
          <h2>카테고리</h2>
          <ul className="categoryDetailList">
            <li>
              <a>
                <span>스킨 케어 모두 보기</span>
              </a>
            </li>
            <li>
              <a>
                <span>클렌저</span>
              </a>
            </li>
            <li>
              <a>
                <span>스킨 케어 모두 보기</span>
              </a>
            </li>
            <li>
              <a>
                <span>클렌저</span>
              </a>
            </li>
            <li>
              <a>
                <span>스킨 케어 모두 보기</span>
              </a>
            </li>
            <li>
              <a>
                <span>클렌저</span>
              </a>
            </li>
            <li>
              <a>
                <span>스킨 케어 모두 보기</span>
              </a>
            </li>
            <li>
              <a>
                <span>클렌저</span>
              </a>
            </li>
            <li>
              <a>
                <span>스킨 케어 모두 보기</span>
              </a>
            </li>
            <li>
              <a>
                <span>클렌저</span>
              </a>
            </li>
            <li>
              <a>
                <span>스킨 케어 모두 보기</span>
              </a>
            </li>
            <li>
              <a>
                <span>클렌저</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="categorySkintype">
        <h2>피부타입</h2>
        <ul className="categoryDetailList">
          <li>
            <a>
              <span>중성</span>
            </a>
          </li>
          <li>
            <a>
              <span>건성</span>
            </a>
          </li>
          <li>
            <a>
              <span>지성</span>
            </a>
          </li>
          <li>
            <a>
              <span>복합성</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="categoryMainImg">
        <img
          className="categorySkinImg "
          src="https://images.pexels.com/photos/1619488/pexels-photo-1619488.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
      </div>
    </div>
  );
}

export default CategoryModal;
