import React from 'react'
//부트스트랩이 만들어준 스타일시트 쓰기
import 'bootstrap/dist/css/bootstrap.min.css'
//부트스트랩이 제공하는 리액트 컴포넌트 가져와서 쓰기
//Carousel 슬라이드쇼를 만드는 것
import { Carousel } from 'react-bootstrap';

export default function App() {

  return (
    <Carousel className='w-50'>
    {/* w-50: 너비는 50% 라는 의미 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
        {/* disply속성 block w-50: 너비는 50% 라는 의미 */}
    
          src="http://via.placeholder.com/1280x960"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>첫 번째 슬라이드</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://via.placeholder.com/1280x960"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>두 번째 슬라이드</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://via.placeholder.com/1280x960"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>세 번째 슬라이드</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}