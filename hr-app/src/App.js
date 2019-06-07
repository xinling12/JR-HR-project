import React,{Component,Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import "./styles/main.css";
import NavBar from './components/NavBar';
import Calendar from './components/Calendar';
import LeaveForm from './components/LeaveForm';

class App extends React.Component{

  render(){
    return(
      <div className="App">
        <header>
          <div id="logo">
            <span className="icon">work</span>
            <span>
              Leave<b>Operations</b>
            </span>
          </div>
          <div className="employee">
            <p>Employee Name</p>
          </div>
        </header>
        <main>
          <Calendar />
        </main>
        <br />
        <hr width="75%"/>
        <LeaveForm />
      </div>

    );
  }
}


export default App;
