//react에서 useState만 가져오기
import { useState } from "react"
import "./App05.css"

function App(){



    //0으로 초기화된 변수 만들고 state가 될 것이다.(변경가능한데이터다)
    //count:상태변수(실제상태), changeCount: 상태를 바꿀 수 있는 함수
    const [ count, setCount ] = useState(0) 

    return <>
    <h1 className="heading">{count}</h1>
    <div className="div">
      <button className="btn" onClick={() => setCount(count <-4? count :count - 1)}>-</button>
      <button className="btn" onClick={() => setCount(count >4? count :count + 1)}>+</button>
    </div>
  </>
}


export default App