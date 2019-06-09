import React from 'react';

import './App.css';
import "./styles/main.css";

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
