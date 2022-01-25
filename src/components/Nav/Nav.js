import React from 'react';

function Nav() {
  return (
    <div>
      <ul>
        <li>
          <button>{name}</button>
        </li>
      </ul>
      <ul>
        <li>
          <button>로그인</button>
        </li>
      </ul>
    </div>
  );
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
}

export default Nav;
