import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';


let YellowBtn = styled.button`
  background: gold;
  padding: 20px
`

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

  let result = props.shoes.filter(function(item){return item.id == id})
  console.log(result);
  console.log(isMounted.current);

  // useEffect(() => {
  //   if (isMounted){
  //     if (isNaN(num)) {
  //       alert('숫자를 입력하세요');
  //     }
  //   } else {
  //     setIsMounted(true);
  //   }
  // }, [num]);

  useEffect(() => {
    if (isMountedRef.current){
      if (isNaN(num)) {
        alert('숫자를 입력하세요');
      }
    } else {
      isMountedRef.current = true;
    }
  }, [num]);
  
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
          <YellowBtn>버튼</YellowBtn>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;