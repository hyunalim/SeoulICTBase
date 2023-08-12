// 요소 선택 및 상수 선언
//querySelector: css 선택자로 선택하겠다는 의미 
const todaySpan = document.querySelector("#today")
const numbersDiv = document.querySelector('.numbers')
const drawButton = document.querySelector('#draw')
const resetButton = document.querySelector('#reset')
const lottoNumbers = []
const colors = ['orange', 'skyblue', 'red', 'purple', 'green']

//오늘날짜
const today = new Date()
let year = today.getFullYear()
let month = today.getMonth() + 1
let date = today.getDate()
todaySpan.textContent = `${year}년 ${month}월 ${date}일 `

// paintNumber 함수
function paintNumber(number){
  const eachNumDiv = document.createElement('div')
  eachNumDiv.classList.add('eachnum')
  let colorIndex = Math.floor(number / 10)
  eachNumDiv.style.backgroundColor = colors[colorIndex]
  eachNumDiv.textContent = number
  numbersDiv.appendChild(eachNumDiv)
}

// 추첨 버튼 클릭 이벤트 핸들링 
drawButton.addEventListener('click', function(){ //drawButton 클릭했을 때
//lottonumbers(6자리숫자저장하는배열)가 6개보다 작으면 반복  
  while(lottoNumbers.length < 6){  
    
    //Math.random:0~1까지 랜덤숫자 추출, Math.floor:소수점 이하 버리기4
    //+1부터 45까지 추출
    let ran = Math.floor(Math.random() * 45) + 1

    //중복불가: lttoNumber에 직전 숫자가 없을경우에만 추가 
    if(lottoNumbers.indexOf(ran) === -1){
      lottoNumbers.push(ran)
      paintNumber(ran)
    }
  }
})

// 다시 버튼 클릭 이벤트 핸들링
resetButton.addEventListener('click', function(){
  //저장된 배열 삭제
  lottoNumbers.splice(0, 6)
  numbersDiv.innerHTML = ""
})