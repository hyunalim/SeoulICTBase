
//function App(){} 를 화살표 함수로 표현해보기
const App = () => {

    //JS문법 const 사용-> JSX에 사용하려면 {}감싸주기
    const content = "JSX" 
    
    //style은 객체 리터럴 표기법으로 작성!
    //규칙: 속성명에 - 사용 불가(산술연산자로인식하기때문), 속성값은 자바스크립트 타입으로 써야함
    const style = {
        color : 'tomato',
        fontSize: '18px'
    }

    //리액트 프레그먼트: 태그들을 하나로 감싸주는 이름없는 태그<>
    return <>
        <h1>처음 만나는 JSX</h1> 
        <p style={style} className="text"> {/* style,class사용법 JS와 다름 */}
            새로운 문법 {content}
            </p> 
        </>

}

export default App