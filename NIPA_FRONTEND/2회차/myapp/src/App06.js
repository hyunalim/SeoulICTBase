import { useState } from 'react'
import "./App06.css"

function App(){
  
  const [lottoNumbers, setLottoNumbers] = useState([])

  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const date = today.getDate()
  const now = `${year}년 ${month}월 ${date}일 `

  return <div className="container">
    <div className="lotto">
      <h3><span>{now}</span>로또 번호 추첨</h3>
      <div className="numbers">
        {lottoNumbers.map((num, idx) => {
          return <div className="eachnum" key={idx}>{num}</div>
        })}
      </div>
      <button onClick={() => {
        const lottoNumbers = []
        while(lottoNumbers.length < 6){
          let ran = Math.floor(Math.random() * 45) + 1
          if(lottoNumbers.indexOf(ran) === -1){
            lottoNumbers.push(ran)
          }
        }
        setLottoNumbers(lottoNumbers)
      }}>추첨</button>
      <button onClick={() => {
        setLottoNumbers([])
        alert('로또 번호를 다시 추첨합니다.')
      }}>다시</button>
    </div>
</div>
}

export default App;

    //map: 컴포넌트형식의배열생성가능, 매개변수 num, idx
    //컴퍼넌트의 배열은 컴퍼넌트의 랜더링으로 이어짐
    //map을 이용한 컴퍼넌트 랜더링 시에는, 개별 요소에 key 속성을 추가하여 각 요소를 구분한다.
