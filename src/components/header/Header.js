import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';
import '../bootstrap/css/bootstrap.min.css';

const Header = () => {
    return (
        <div>
            <div className="col-md-12 bg-dark">
            <div className="col-md-11 m-auto">
             <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Courses</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
             </div>
            </div>
            <Card className="bg-secondary">
                <Card.Body className="text-center">
                    <h2>Online Programming Class - JavaScript, Python & More</h2>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Header;