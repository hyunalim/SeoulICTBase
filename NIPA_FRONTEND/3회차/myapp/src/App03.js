import {useRef} from 'react'
    //손가락하나 만들어서 접근하고 싶은 태그에 맵핑
    //useRef의 current 기능을 사용하여 참조중인 요소에 접근,
    //클릭하게되면 InputElem에 포커스 가도록 하는 함수
    //input에 inputElem 맵핑, onclick에 handleClick 맵핑
function App() {

    const inputElem = useRef(null) 
    const handleClick = () => {
        inputElem.current.focus()
    }
    return <>
        <input ref = {inputElem} />
        <button onClick={handleClick}>Focus on input</button>
       </>
}
export default App