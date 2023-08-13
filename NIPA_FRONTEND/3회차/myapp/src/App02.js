//디지털시계 react 버전
import { useState, useEffect } from 'react'
import "./App02.css"

//1초마다 변화하는 시계 보여주기 위해 상태추가 date,time
//useEffect( () => {},[]):배열 비워져있음. 최초1회만 호출 
//setInterval(): 1000ms에 한번씩 불러오기 
//setDate, setTime: 날짜나 시간이 변하면 실행
function App(){

  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  useEffect(function(){
    setInterval(function(){
      let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let date = now.getDate();
      let hour = now.getHours();
      let minute = now.getMinutes();
      let second = now.getSeconds();
    
      month = month < 10 ? `0${month}` : month;
      date = date < 10 ? `0${date}` : date;
      hour = hour < 10 ? `0${hour}` : hour;
      minute = minute < 10 ? `0${minute}` : minute;
      second = second < 10 ? `0${second}` : second;
    
      setDate(`${year}년 ${month}월 ${date}일`)
      setTime(`${hour}:${minute}:${second}`)
    }, 1000);
  }, [])

  return <div className="clock">
    <div className="today">{date}</div>
    <div className="time">{time}</div>
  </div>
}

export default App;