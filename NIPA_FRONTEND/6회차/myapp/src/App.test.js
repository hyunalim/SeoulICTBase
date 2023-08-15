//screen: 페이지가 렌더링된 결과화면
import { render, screen } from '@testing-library/react';
import App from './App01';


//테스트 하나 만들기, 
//첫 번째 인수: 리액트 링크 learn 해보기, 두번째 인수: test 내용 함수형태로 정의

test('renders learn react link', ()=>{
  render(<App/>) //App컴포넌트 렌더링(테스트) 해보기
  const linkElement = screen.getByText("This is TDD") //화면에서 텍스트 가져오기
  expect(linkElement).toBeInTheDocument() //linkElement가 화면에 있길 기대한다. expect-matchernpm 

}
) 
