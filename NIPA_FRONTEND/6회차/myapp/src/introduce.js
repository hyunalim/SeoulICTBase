import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Nav, Navbar, Col, Row, Image, Carousel  } from 'react-bootstrap';

import "./App.css"
import "./Custom.css"

function App() {
  return (
    <> 
      <Navbar className="justify-content-center" sticky="top">
        <Nav>
          <Nav.Link href="#about">ABOUT</Nav.Link>
          <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
          <Nav.Link href="#contact">CONTACT</Nav.Link>
        </Nav>
      </Navbar>
      <Container id="about">
        <Row className='py-5'>
          <Col>
            <h2 className="heading">ABOUT</h2>
          </Col>
        </Row>
        <Row className="w-75 m-auto" >
          <Col className='text-end'>
            {/* 이미지의 경우 public 파일 경로를 기본으로 한다.*/}
            <Image src="./profile.png" alt="프로필 사진" 
            style={{ border: '2px solid #91C8E4', width: 300, marginRight: '50px' }} />
          </Col>
          <Col>
            <h3 className="about__category">PROFILE</h3>
            <p>
              #Hyuna Lim<br />
              개발 공부 2개월 차<br />
              NIPA AI웹개발+ 수강 중 <br />
        
              <br />
              # STRENGTH <br />
              끝까지 붙들고 있는 집요함 <br />
              세상 만사가 궁금한 호기심왕 <br />
              <br />
              # WEAKNESS <br />
              침대가 너무 좋아 <br />
              세상엔 맛있는 게 왜이리 많을까? <br />

               <br />
            </p>
            </Col>
        </Row>
      </Container>
      <Container id="portfolio">
        <Row className='py-5'>
          <Col>
            <h2 className="heading">PORTFOLIO</h2>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Carousel className='w-75 m-auto'>
            <Carousel.Item>
              <img
                className="d-block h-40 w-100"
                src="./project1.png"
                alt="첫 번째 프로젝트"
              />
              <Carousel.Caption>
                <h3>첫 번째 프로젝트</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="http://via.placeholder.com/1280x960"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>두 번째 프로젝트</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="http://via.placeholder.com/1280x960"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>세 번째 프로젝트</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
      <Container id="contact">
        <Row className='py-5'>
          <Col>
            <h2 className="heading">CONTACT</h2>
          </Col>
        </Row> 
        <Row className='mb-4'>
          <Col className="text-center border border-light px-0">
            <h3 style={{ background: "#91C8E4", margin: 0, padding: 3 }}>MAIL</h3>
            <p style={{ margin: 0, padding: 10 }}>1234@naver.com</p>
          </Col>
          <Col className="text-center border border-light px-0">
            <h3 style={{ background: "#91C8E4", margin: 0, padding: 3 }}>PHONE</h3>
            <p style={{ margin: 0, padding: 10 }}>010-1234-1346</p>
          </Col>
          <Col className="text-center border border-light px-0">
            <h3 style={{ background: "#91C8E4", margin: 0, padding: 3 }}>GitHub</h3>
            <p style={{ margin: 0, padding: 10 }}>@hyunalim</p>
          </Col>
        </Row>
        <Row className='justify-content-center py-5'>
          Copyright &copy; Hyuna Lim. All Right Reserved.
          </Row>
      </Container>
    </>
  );
}

export default App;
