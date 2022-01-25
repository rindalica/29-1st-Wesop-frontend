import React from 'react';
import styled from 'styled-components';

function Slider({ img }) {
  return <IMG src={img} />;
}
const IMG = styled.img`
  width: 100%;
  height: 70vh;
`;

export default Slider;
