import logo from './logo.svg';
import './App.css';
import React from 'react'


// Component imports
import { Content } from './components/content';
import { Header } from './components/header';
import { Footer } from './components/footer';

// Bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';

// Navigation bar imports
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}

      


        {/* NAVBAR code */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/home">home</Nav.Link>

                <Nav.Link href="/read">Read</Nav.Link>

                <Nav.Link href="/create">Create</Nav.Link>
              </Nav>
          </Container>
        </Navbar>
        
        {/* Setting the Routes */}
        <Router>
          <Routes>
            <Route path ='/home' element={<Content></Content>}></Route>
            <Route path ='/read' element={<Header></Header>}></Route>
            <Route path ='/create' element={<Footer></Footer>}></Route>
          </Routes>
        </Router>
        

        {/* Calling the component content */}
        {/* <Header></Header>

        <Content></Content>

        <Footer></Footer> */}

      {/* </header> */}
    </div>
  );
}

export default App;
