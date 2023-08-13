import React from 'react';
import styled from "styled-components";

//@media 600px이상의 화면에선 다른 스타일 지정
const ResponsiveBox = styled.div`
    width: 500px;
    height: 400px;
    background-color: red;
    
    @media screen and (min-width: 768px) {
        width: 300px;
        height: 300px;
        background-color: blue;
      } 
`

function App() {
    return <>
        <ResponsiveBox />
    </>
}

export default App