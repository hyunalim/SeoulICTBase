//함수형 컴포넌트에 props 추가 (매개변수)-> 속성을 받겠다는 의미 
function Food(props){
    return <h1 onClick={()=> props.handleClick(props.food)} //전달받은 handleclick에 food값도 반환
    style={{ color: props.color }}>
        {props.food}
        </h1>
}

//App()을 상위, Food()를 하위로 사용하고 재사용하기
function App(){ 
    return <>
        <Food food="제육볶음" color="red" handleClick ={(food) => {alert(`맛있는 ${food}!`)}}/> 
        <Food food="떡볶이" color="blue"/> 
        <Food food="교촌치킨"color="green"/> 
        <Food food="꽈배기" color="pink"/> </>
}
export default App