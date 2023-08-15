//fireEvent: 이벤트 발생시키는 test를 위한 객체 
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App02";

//최초 렌더링 시 상태값이 0으로 표시되는지 테스트 하는 코드
test("the counter starts at 0", () => {
  render(<App />);
  //screen object를 이용해서 원하는 엘레멘트에 접근(접근할 때  ID로)
  const counterElement = screen.getByTestId("counter"); //testid가 counter인 내용을 읽어들이기
  // id가 counter인 엘레멘트의 텍스트가 0인지 테스트
  expect(counterElement).toHaveTextContent(0); //h3요소에 대해서 toHaveTextContent가 0이길 기대한다.
  //이걸 통과하지 못하면 h3에 0말고 다른게 통과해서 렌더링 하는 것  
});

//minus 버튼이 제대로된 내용을 가지고 있는 테스트
test("minus button has correct text", () => {
  render(<App />);
  const minusButtonElement = screen.getByTestId("minus-button"); //마이너스 버튼 가져오기
  expect(minusButtonElement).toHaveTextContent("-"); //마이너스버튼에 -가 있는지 확인
});

//plus 버튼이 제대로된 내용을 가지고 있는 지 테스트
test("plus button has correct text", () => {
  render(<App />);
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toHaveTextContent("+");
});

// 증가 감소 버튼에서 클릭 이벤트 발생했을 때 증감이 정상적으로 이루어지는가 테스트
test("When the + button is pressed, the counter changes to 1", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  //리액트 테스트 앱이 fireevent로 buttonElement를 클릭해서 테스트 해보는 것
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
});

test("When the - button is pressed, the counter changes to -1", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("minus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(-1);
});




//on/off 버튼 가져와서 스타일 검사
test("on/off button has blue color", () => {
    render(<App />);
    const buttonElement = screen.getByTestId("on/off-button");
    expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
  });//bgc가 blue인지 검사 

//on/off 버튼을 누렀을때 -,+버튼이 차단되는지 확인하는 테스트 
test("Prevent the -,+ button from being pressed when the on/off button is clicked", () => {
  render(<App />);
  const onOffButtonElement = screen.getByTestId("on/off-button");
  //온오프버튼 클릭 테스트 
  fireEvent.click(onOffButtonElement);
  //+버튼이 disabled 상태가 되었는지 확인 
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toBeDisabled();
});
