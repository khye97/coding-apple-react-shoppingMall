import {Button, Navbar, Container, Nav, Tab, Tabs} from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';


// let YellowBtn = styled.button`
//   background: gold;
//   padding: 20px
// `

function Detail (props){
  useEffect(() => {
    setTimeout(()=>{ setAlertTimer(false); }, 2000);
    return () => { clearTimeout() }
  }, []);

  let [alertTimer, setAlertTimer] = useState(true);
  let {id} = useParams();
  let [num, setNum] = useState();
  let isMountedRef = useRef(false);
  let [isMounted, setIsMounted] = useState(false);
  let [tab, setTab] = useState(0);

  let result = props.shoes.filter(function(item){return item.id == id})
  console.log(result);
  console.log(isMounted.current);

  useEffect(() => {
    if (isMounted){
      if (isNaN(num)) {
        alert('숫자를 입력하세요');
      }
    } else {
      setIsMounted(true);
    }
  }, [num]);

  // useEffect(() => {
  //   if (isMountedRef.current){
  //     if (isNaN(num)) {
  //       alert('숫자를 입력하세요');
  //     }
  //   } else {
  //     isMountedRef.current = true;
  //   }
  // }, [num]);
  
  return (
    <Container>
      {alertTimer && <div className='alert alert-warning'>2초 이내 구매시 할인</div>}
      <input type='text' onChange={(event) => { setNum(event.target.value) }} />
      <Row>
        <Col md={6}>
          <img src={"https://codingapple1.github.io/shop/shoes"+ (Number(id) + 1) +".jpg"} width="100%" />
        </Col>
        <Col md={6}>
          <h4 className="pt-5">{result[0].title}</h4>
          <p>{result[0].content}</p>
          <p>{result[0].price}</p>
          <button className="btn btn-danger">주문하기</button> 
          {/* <YellowBtn>버튼</YellowBtn> */}
        </Col>
      </Row>
      <Row>
        {/* <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="home" title="Home">
            Tab content for Home
          </Tab>
          <Tab eventKey="profile" title="Profile">
            Tab content for Profile
          </Tab>
          <Tab eventKey="contact" title="Contact">
            Tab content for Contact
          </Tab>
        </Tabs> */}
        <Nav variant="tabs"  defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link eventKey="link0" onClick={() => { setTab(0) }}>버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link1" onClick={() => { setTab(1) }}>버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link2" onClick={() => { setTab(2) }}>버튼2</Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent tab={tab} />
      </Row>
    </Container>
  );
}

function TabContent (props){
  if (props.tab == 0){
    return <div>내용0</div>
  } else if (props.tab == 1){
    return <div>내용1</div>
  } else if (props.tab == 2){
    return <div>내용2</div>
  }
}

export default Detail;