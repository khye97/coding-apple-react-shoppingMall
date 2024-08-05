import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';

function Detail (props){
  let {id} = useParams();

  let result = props.shoes.filter(function(item){return item.id == id})
  console.log(result);
  
  return (
    <Container>
      <Row>
        <Col md={6}>
          <img src={"https://codingapple1.github.io/shop/shoes"+ (Number(id) + 1) +".jpg"} width="100%" />
        </Col>
        <Col md={6}>
          <h4 className="pt-5">{result[0].title}</h4>
          <p>{result[0].content}</p>
          <p>{result[0].price}</p>
          <button className="btn btn-danger">주문하기</button> 
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;