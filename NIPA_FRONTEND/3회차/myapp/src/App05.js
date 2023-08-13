//css keyframes 구조분해해서 가져오기
import styled, {keyframes} from 'styled-components'

//태그드 템플릿 리터럴, 키프레임에는 반드시 이름이 있어야함. 매핑을 해야하기 때문.
const boxFade=keyframes`
    0%{
        opacity: 1;
    }
    50%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`


/* 
animation: ${키프레임이름}, 듀레이션, (딜레이, 반복여부, 속도특성)
linear: 속도가 선형적, ease: 빨랐다가 느려짐 
alternate: 진행방향이 역방향
*/

const AnimatedBox = styled.div`
    width: 300px;
    height: 300px;
    background: tomato;
    animation: ${boxFade} 2s 5s infinite alterante; //2초동안, 5초 딜레이

`
function App(){
    return <><AnimatedBox/></>
}

export default App