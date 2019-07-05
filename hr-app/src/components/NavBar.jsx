import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/fontawesome-free-solid';
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
        {/* <Navbar className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar "> */}
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


            {/* <Navbar.Brand href="/">Home Page</Navbar.Brand>
            <Nav.Item><Nav.Link href="/company">Company Profile</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/employeelist">Employee List</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/payroll">Payroll Management</Nav.Link></Nav.Item> */}

        </Navbar>




        {/* <Nav className="ml-auto">
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Search..."
                        aria-label="Search..."
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button className="search-btn" variant="outline-secondary">
                            <FontAwesomeIcon icon="search" />
                        </Button>
                    </InputGroup.Append>
                </InputGroup> */}

        {/* <Nav.input className="search-input" type="text" value placeholder="Search..."></Nav.input>
                <Nav.button>className="search-btn"><i className="fa fa-search"></i></Nav.button> */}




        {/* <ul className="navbar-nav">
                <li className="nav-item nav-link nav-brand active">
                    <Nav.Link href="/home">Home Page</Nav.Link>
                </li>
                <li className="nav-item nav-link">
                    <Nav.Link href="/company">Company Profile</Nav.Link>
                </li>
                <li className="nav-item nav-link">
                    <Nav.Link href="/employeelist">Employee List</Nav.Link>
                </li>
                <li className="nav-item nav-link">
                    <Nav.Link href="/payroll">Payroll Management</Nav.Link>
                </li>
            </ul>
            <ul className="navbar-nav felx-row ml-md-auto d-md-flex">
                <input className="search-input" type="text" value placeholder="Search..." />
                <button className="search-btn"><i className="fa fa-search"></i></button>
            </ul> */}

    </Styles >
)
