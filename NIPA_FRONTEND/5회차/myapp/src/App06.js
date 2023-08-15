import { createContext, useContext } from "react";

//스타일 테마 하나를 만들어서 그것들을 전체 컴포넌트에 뿌리기
const themDefault = { border: '1px solid tomato'}
const themContext = createContext(themDefault) //Context 하나 만들기

export default function App() {
    const them = useContext(themContext) //themContext를 공통 them으로 사용할것임
    
    //하위 컨텍스트 만들기: themContext가 제공되는 것 안에서 하위 컨텍스트 만들기
    //프로바이더의 하위 컴포넌트라면 뭐든 Context를 받아서 사용 가능
    return <themContext.Provider value={themDefault}>
        <div>
            <h1>여기는 App컴포넌트</h1>
            <Sub1 />
        
        </div>
    </themContext.Provider>
}

function Sub1(){
    const theme = useContext(themContext)
    return <div>
        나는 하위 컴포넌트 Sub1
    </div>
}