//리액트 컴포넌트는 상태가 변경될 때 리렌더링이 된다.
//상태를 만들어서 함수 안에서 변화할 수 있도록 만들어야 화면도 변화할 수 있다. 
// useState를 사용해야함
//input에 내용을 쓰면 <p>영역에 나타날 수 있도록 <input>내용을 상태에 저장
//useState에 빈내용 저장하고 구조분해 text(상태변수), setText(상태변화함수)
//input에서 내용이 변할때 마다(onChange) setText함수를 실행하겠다
//onChange(e)에서 e의 타겟 값을 console.log에 출력
//useEffect: 생명주기마다의 동작을 관리하는 함수

import { useState, useEffect } from 'react'


function App(){
  const[text, setText] = useState("")
  const[number, setNumber] =useState(0)
  
  const onIncrease = () => {setNumber(number+1)}
  const onDecrease = () => {setNumber(number-1)}
  
  //useEffect(콜백함수, 의존성배열): text, number가 변하면 콜백함수 호출 
  useEffect(() => {
    alert("text가 변화했어요")
  }, [text,number])

  return<>
    <input type="text" placeholder='아무내용' 
    onChange={(e) => {setText(e.target.value)}} />
    <p>{text}</p>  

    <h1>{number}</h1>
    <button onClick={onDecrease}>-</button>
    <button onClick={onIncrease}>+</button>
  </>
}
export default App