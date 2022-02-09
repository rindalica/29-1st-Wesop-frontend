import React from 'react';
import SkinProductsListRow from '../SkinProductsListRow/SkinProductsListRow';
import './SkinProductsList.scss';

function SkinProductsList({ productsList }) {
  const arr1 = productsList
    .filter(productsList => productsList.sub_category_id === 1)
    .map(productsList => productsList.products);

  const arr2 = productsList
    .filter(productsList => productsList.sub_category_id === 2)
    .map(productsList => productsList.products);

  const arr3 = productsList
    .filter(productsList => productsList.sub_category_id === 3)
    .map(productsList => productsList.products);

  const arr4 = productsList
    .filter(productsList => productsList.sub_category_id === 4)
    .map(productsList => productsList.products);

  const arr5 = productsList
    .filter(productsList => productsList.sub_category_id === 5)
    .map(productsList => productsList.products);

  const arr6 = productsList
    .filter(productsList => productsList.sub_category_id === 6)
    .map(productsList => productsList.products);

  const arr7 = productsList
    .filter(productsList => productsList.sub_category_id === 7)
    .map(productsList => productsList.products);

  const skinProductsList = [
    {
      sub_category_id: 1,
      sub_category_name: '클렌저',
      sub_category_description:
        '피부의 남은 각질, 불필요한 유분 그리고 기타 잔여물을 말끔히 씻어내어 피부를 깨끗하게 하는 것은 인텔리전트 스킨케어의 기초입니다. products: arr1',
      products: arr1,
    },
    {
      sub_category_id: 2,
      sub_category_name: '클렌저',
      sub_category_description:
        '피부의 남은 각질, 불필요한 유분 그리고 기타 잔여물을 말끔히 씻어내어 피부를 깨끗하게 하는 것은 인텔리전트 스킨케어의 기초입니다. products: arr1',
      products: arr2,
    },
    {
      sub_category_id: 3,
      sub_category_name: '클렌저',
      sub_category_description:
        '피부의 남은 각질, 불필요한 유분 그리고 기타 잔여물을 말끔히 씻어내어 피부를 깨끗하게 하는 것은 인텔리전트 스킨케어의 기초입니다. products: arr1',
      products: arr3,
    },
    {
      sub_category_id: 4,
      sub_category_name: '클렌저',
      sub_category_description:
        '피부의 남은 각질, 불필요한 유분 그리고 기타 잔여물을 말끔히 씻어내어 피부를 깨끗하게 하는 것은 인텔리전트 스킨케어의 기초입니다. products: arr1',
      products: arr4,
    },
    {
      sub_category_id: 5,
      sub_category_name: '클렌저',
      sub_category_description:
        '피부의 남은 각질, 불필요한 유분 그리고 기타 잔여물을 말끔히 씻어내어 피부를 깨끗하게 하는 것은 인텔리전트 스킨케어의 기초입니다. products: arr1',
      products: arr5,
    },
    {
      sub_category_id: 6,
      sub_category_name: '클렌저',
      sub_category_description:
        '피부의 남은 각질, 불필요한 유분 그리고 기타 잔여물을 말끔히 씻어내어 피부를 깨끗하게 하는 것은 인텔리전트 스킨케어의 기초입니다. products: arr1',
      products: arr6,
    },
    {
      sub_category_id: 7,
      sub_category_name: '클렌저',
      sub_category_description:
        '피부의 남은 각질, 불필요한 유분 그리고 기타 잔여물을 말끔히 씻어내어 피부를 깨끗하게 하는 것은 인텔리전트 스킨케어의 기초입니다. products: arr1',
      products: arr7,
    },
  ];

  console.log(skinProductsList);

  return (
    <div className="skinProductsList">
      {productsList &&
        productsList.map(skinProductsList => {
          return (
            <SkinProductsListRow
              key={skinProductsList.sub_category_id}
              id={skinProductsList.sub_category_id}
              name={skinProductsList.sub_category_name}
              description={skinProductsList.sub_category_description}
              productsList={skinProductsList.products}
            />
          );
        })}
    </div>
  );
}

export default SkinProductsList;
