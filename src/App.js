import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import AppBar from './components/AppBar'
import TemporaryDrawer from './components/TemporaryDrawer'

class App extends Component {
  handel = () =>{
    console.log('asdsad')
  }
  getVaue = (e) => {
    console.log(e.currentTarget.value);
  }

  render() {
    return (
      <div className="App">
      <AppBar handel={this.handel} getVaue={this.getVaue}/>
      <TemporaryDrawer/>
      </div>
    );
  }
}

export default App;
