import { useState } from 'react';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import './App.css';
//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data.js'

function App() {
  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Hyejin Mall</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Man">Man</Nav.Link>
            <Nav.Link href="#Woman">Woman</Nav.Link>
            <Nav.Link href="#Woman">Kids</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>

      <Container>
        <Row>
          {shoes.map((item, index) => {
            return <Item item={item} key={item.id} id={item.id}/>
          })}
        </Row>
      </Container>

    </div>
  );
}

function Item (props){
  console.log(props);
  return (
    <Col lg={4} className='item-image'>
      <img src={"https://codingapple1.github.io/shop/shoes"+ (props.id + 1) +".jpg"}/>
      <h4>{props.item.title}</h4>
      <p>{props.item.price}</p>
    </Col>
  );
}


export default App;
