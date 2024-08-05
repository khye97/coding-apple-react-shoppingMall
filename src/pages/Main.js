import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from '../data.js';
import { Link } from 'react-router-dom';


function Main (props){
  function sort (){
    let sortArray = [...data];
    sortArray.sort(function(a, b){
      if(a.title > b.title){return 1}
      if(a.title === b.title){return 0}
      if(a.title < b.title){return -1}
    });    
    props.setShoes(sortArray);
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