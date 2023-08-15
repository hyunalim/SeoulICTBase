import { useReducer  } from "react"; //복잡한 상태관리

const initialState = {//객체리터럴
    count:0
} 

//리듀서 함수는 두 개의 인수를 전달받는다. "현재상태", "action"
//action: 상태를 '어떻게' 해달라는 내용
const reducer = (state,action) => { 
    if (action.type=='increment') 
        return{count: state.count+1}
    else if (action.type=='decrement') {
        return {count: state.count-1}
    }
}   

const App=()=> {
    //state상태, dispatch 리듀서에게 액션을전달하는 함수
    const [state, dispatch] = useReducer(reducer, initialState)
    return<>
        <h1>{state.count}</h1>
        <button onClick={()=>{ dispatch({type:'decrement'})}}>-</button>
        <button onClick={()=>{ dispatch({type:'increment'})}}>+</button>
    </>
//-가 호출되면 dispatch가 type이 decrement인 함수를 호출하고, reducer함수의 action에 전달-> decrement에 해당되는 값 반환

}

export default App