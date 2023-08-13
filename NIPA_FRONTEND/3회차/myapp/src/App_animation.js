import React from 'react';
import styled, { keyframes } from 'styled-components';

//flex 레이아웃: 자식요소를 고정된 축 방향으로만 진행한다.
//가로 방향으로 자식배치, justify-content: flex의 주축을 기준으로 정렬 방법 
const Eyes = styled.div`
  display: flex; 
  justify-content: center;
`;

//position:relatives 자식 요소가될 눈알을 제어하기 위함 
const Eye = styled.div`
  width: 200px;
  height: 200px;
  border: 5px solid black;
  border-radius: 50%;
  position: relative;
`;

const movingBall = keyframes`
  0%{
    top: 40%;
    left: 10%;
  }
  100%{
    top: 40%;
    left: 70%;
  }
`

const movingTongue = keyframes`
50%{
  opacity: 0;
}
`

//position: absolute 상위요소 (부모요소)가 position을 가지고 있다면 그 기준으로 움직인다
const Ball = styled.div`
  width: 60px;
  height: 60px;
  background-color: skyblue;
  border-radius: 50%;
  position: absolute;
  animation: ${movingBall} 3s 0s linear alternate infinite;
`
const Mouth = styled.div`
  width: 350px;
  height: 100px;
  border-bottom: 3px solid #000000;
  border-radius: 30%;
  position: absolute;
  margin: 200px
`
const Tongue = styled.div`
  width: 100px;
  height: 150px;
  border-bottom: 1px #red;
  border-radius: 50%;
  position: absolute;
  margin: 305px;
  background-color: pink;
  animation: ${movingTongue} 0.9s infinite;

`

function App() {

  return (
   <> 
    <Eyes>
      <Eye>
        <Ball />
      </Eye>
      <Eye>
        <Ball />
      </Eye>
      <Mouth></Mouth>
      <Tongue></Tongue>
    </Eyes>
  </>
  );
}

export default App