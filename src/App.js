import { useState } from 'react';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import './App.css';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Detail.js'
import Main from './pages/Main.js'


function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Hyejin Mall</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail Page</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/event')}}>Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Main shoes={shoes} setShoes={setShoes}/>} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="*" element={<div>없는 페이지입니다</div>} />
        <Route path='/about' element={<About />}>
          <Route path="member" element={<div>멤버 소개 페이지입니다</div>}/>
          <Route path="location" element={<div>주소 페이지입니다</div>}/>
        </Route>
        <Route path='/event' element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path="two" element={<div>생일기념 쿠폰 받기</div>}/>
        </Route>
      </Routes>

    </div>
  );
}

function About (){
  return (
    <div>
      <h4>About 페이지</h4>
      <Link to="/about/member">member</Link>```
      <Link to="/about/location">location</Link>
      <Outlet></Outlet>
    </div>
  );
}

function Event (){
  let navigate = useNavigate();
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <div onClick={()=>{navigate('one')}}>one</div>
      <div onClick={()=>{navigate('two')}}>tow</div>
      <Outlet></Outlet>
    </div>
  );
}

export default App;