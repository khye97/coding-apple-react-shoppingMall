import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from '../data.js';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { useRef, useState } from 'react';


function Main (props){
  let [showAlert, setShowAlert] = useState(false);
  let showMoreBtnCount = useRef(0);

  function sort (){
    let sortArray = [...data];
    sortArray.sort(function(a, b){
      if(a.title > b.title){return 1}
      if(a.title === b.title){return 0}
      if(a.title < b.title){return -1}
    });    
    props.setShoes(sortArray);
  }

  function getAjax (num){
    axios.get(`https://codingapple1.github.io/shop/data${num}.json`)
    .then((result) => {
      let newArray = [...props.shoes, ...result.data];
      props.setShoes(newArray);
      setShowAlert(false);
    })
    .catch(() => {
      console.log('ajax 요청 실패');
    })
    // fetch(`https://codingapple1.github.io/shop/data${num}.json`)
    // .then(res => res.json())
    // .then(result => {
    //   console.log(result);
    //   let newArray = [...props.shoes, ...result];
    //   props.setShoes(newArray);
    //   setShowAlert(false);
    // })
    // .catch(() => {
    //   console.log('ajax 요청 실패(fetch)');
    // })
  }

  function getData (){
    showMoreBtnCount.current = showMoreBtnCount.current + 1;
    console.log(showMoreBtnCount);
    setShowAlert(true);
    if (showMoreBtnCount.current == 1){
      getAjax(2);
    } else if (showMoreBtnCount.current == 2){
      getAjax(3);
    } else {
      alert('마지막 페이지입니다.');
    } 
  }
      

  return (
    <>
      <div className="main-bg"></div>
      <button type='button' onClick={sort}>알파벳순 정렬</button>
      <Container>
        <Row>
          {props.shoes.map((item, index) => {
            return <Item item={item} key={item.id} id={item.id}/>
          })}
        </Row>
        {showAlert ? <Alert variant="primary">loading...</Alert> : null}
        <button onClick={getData}>상품 더보기</button>
      </Container>
    </>
  );
}

function Item (props){
  return (
    <Col lg={4} className='item-image'>
      <img src={"https://codingapple1.github.io/shop/shoes"+ (props.id + 1) +".jpg"}/>
      <Link to={"/detail/" + props.item.id}><h4>{props.item.title}</h4></Link>
      <p>{props.item.price}</p>
    </Col>
  );
}




export default Main;