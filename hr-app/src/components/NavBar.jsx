import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
    .navbar {
        background-color: #6286d3;

    }
    .navbar-nav .nav-link {
        margin-right: 20px;
    }
      
      .mb-3 {
        font-size: 100%;
        padding: 0.5rem 1rem;
        outline: none;
        height: 30px;
        width: 180px;
      }
      
      .search-btn {
        border: none;
        background-color: transparent;
        cursor: pointer;
        color: #a8a3a3;
        margin-left: -39px;
      }
      
      .user-btn {
        background-color: transparent;
        cursor: pointer;
        margin-left: 20px;
      }
`;

export const NavBar = () => (
    <Styles>
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="/">Home Page</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/company">Company Profile</Nav.Link>
                <Nav.Link href="/employeelist">Employee List</Nav.Link>
                <Nav.Link href="/payroll">Payroll Management</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar>
    </Styles >
)
