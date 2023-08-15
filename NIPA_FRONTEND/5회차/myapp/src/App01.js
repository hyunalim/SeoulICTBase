// React.memo
import React, { useState } from "react";

// 리액트 메모 했을 때와 안 했을 때 차이를 봐야 함 
const Content = React.memo(({ listText }) => {
  console.log("Content is rendered")
  return <ul>{listText.map((item, index) => <li key={index}>{item}</li>)}</ul>
})

//App에서 전달해준 네 가지 속성 (상태 2, 상태함수2)
const Form = ({ listText, currentText, setListText, setCurrentText }) => {
  console.log("Form is rendered")
  return <form onSubmit={e => {
    e.preventDefault()
    setListText([...listText, currentText])
  }}
  >
    <input name="text" 
    onChange={e => {
      setCurrentText(e.target.value)
    }}/>
    <input type="submit" />
    <Content listText={listText} />
  </form>
}

//App에서 상태관리하고 자식요소인 Form에서 사용->리렌더링 
const App = () =>  {
  console.log("App is rendered")
  const [ currentText, setCurrentText ] = useState("")
  const [ listText, setListText ] = useState([])
  
  return <>
    <Form setCurrentText={setCurrentText} 
    setListText={setListText} 
    currentText={currentText} 
    listText={listText} />
  </>
}

export default App;
