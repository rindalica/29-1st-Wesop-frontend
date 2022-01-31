import React, { useState, useEffect } from 'react';
import './SubcatNav.scss';

function SubcatNav() {
  const [list, setLists] = useState([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(data => {
        setLists(data);
      });
  }, []);

  return (
    <div className="Subnav">
      <ul className="SubnavUl">
        {list.map(x => {
          return (
            <li className="SubnavLi" key={x.id}>
              <button type="button" className="SubnavSelected">
                <span className="SubnavInnerText">{x.categoryName}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SubcatNav;
