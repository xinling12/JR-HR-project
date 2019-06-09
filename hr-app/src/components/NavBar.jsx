import React,{Component} from 'react';
import '../App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import SearchBar from 'material-ui-search-bar';



class NavBar extends Component{
  render(){
    return(
      <AppBar>
        <Toolbar>
        <h2>Leave Operations</h2>
        </Toolbar>
      </AppBar>
    );
  }
}


export default NavBar;