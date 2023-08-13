import React from 'react'
import styled from 'styled-components'

//s-c가 제공하는 styled를 이용해서 div에 스타일을 추가하는 컴포넌트를 만들고, ''로 템플릿 전달
const Circle= styled.div `
    width: 250px;
    height: 250px;
    background-color: orange;
    border-radius: 50%;
`
//props 화살표 함수는 화살표 뒤에 값을 반환한다
const ColoredCircle = styled.div`
    width: 250px;
    height: 250px;
    background-color: ${(props) => props.bgColor ? props.bgColor:"red"};
    border-radius: 50%;
`

function App() {
    
    return <><Circle/> 
    <ColoredCircle bgColor = "orange"/>
    <ColoredCircle bgColor = "tomato"/>
    <ColoredCircle bgColor = "purple"/>
    </>
}
export default App