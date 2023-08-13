import React from 'react';
import styled, { keyframes } from 'styled-components';

//flex 레이아웃: 자식요소를 고정된 축 방향으로만 진행한다.
//가로 방향으로 자식배치, justify-content: flex의 주축을 기준으로 정렬 방법 
//position:relatives 자식 요소가될 눈알을 제어하기 위함 
//position: absolute 상위요소 (부모요소)가 position을 가지고 있다면 그 기준으로 움직인다
const Eyes = styled.div`
  display: flex;
  justify-content: center;
`;
const Eye = styled.div`
  width: 200px;
  height: 200px;
  border: 5px solid black;
  border-radius: 50%;
  position: relative;
`;

const moving = keyframes`
  0%{
    top: 40%;
    left: 10%;
  }
  100%{
    top: 40%;
    left: 70%;
  }
`
const Ball = styled.div`
  width: 40px;
  height: 40px;
  background-color: #000000;
  border-radius: 50%;
  position: absolute;
  animation: ${moving} 3s 0s linear alternate infinite;
`
function App() {

  return (
    <Eyes>
      <Eye>
        <Ball />
      </Eye>
      <Eye>
        <Ball />
      </Eye>
    </Eyes>
  );
}

export default App