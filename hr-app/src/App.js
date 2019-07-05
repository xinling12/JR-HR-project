import React, {
    Component
}
from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css";


import {
    Home
} from '../src/components/Home';
import {
    Company
} from '../src/components/Company';
import {
    EmployeeList
} from '../src/components/EmployeeList';
import {
    Payroll
} from '../src/components/Payroll';
import {
    Layout
} from './components/Layout';
import {
    NavBar
} from './components/NavBar';


export default class App extends Component {
    render() {
        return ( <
            React.Fragment >
            <
            NavBar / >
            <
            Layout >
            <
            Router >
            <
            Switch >
            <
            Route exact path = "/"
            component = {
                Home
            }
            />   <
            Route path = "/company"
            component = {
                Company
            }
            />   <
            Route path = "/employeelist"
            component = {
                EmployeeList
            }
            />   <
            Route path = "/payroll"
            component = {
                Payroll
            }
            />    < /
            Switch > <
            /Router>   < /
            Layout > <
            /React.Fragment >
        );
    }
}