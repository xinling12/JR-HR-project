import React from "react";
import Link from "react-router";
import "../styles/header.css";

const Header = () => {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar ">
                <ul className="navbar-nav">
                    <li className="nav-item nav-link nav-brand active">
                        <Link to="/home">Home Page</Link>
                    </li>
                    <li className="nav-item nav-link">
                        <Link to="/company">Company Profile</Link>
                    </li>
                    <li className="nav-item nav-link">
                        <Link to="/employeeList">Employee List</Link>
                    </li>
                    <li className="nav-item nav-link">
                        <Link to="/payroll">Payroll Management</Link>
                    </li>
                </ul>
                <ul className="navbar-nav felx-row ml-md-auto d-md-flex">
                    <input className="search-input" type="text" value placeholder="Search..." />
                    <button className="search-btn"><i className="fa fa-search"></i></button>
                </ul>
            </nav>
        </div>

    );
}

export default Header;
