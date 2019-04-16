import React, { Component } from 'react';
import './App.css';
import AppBar from './components/AppBar'
import TemporaryDrawer from './components/TemporaryDrawer'

class App extends Component {
  state={
    handelsMenu: false,
  
  }
  handel = () =>{
    this.setState({ handelsMenu: true })
  }
  getVaue = (e) => {
    console.log(e.currentTarget.value);
  }

  render() {
    return (
      <div className="App">
      <AppBar  handel={this.handel} getVaue={this.getVaue}/>
      <TemporaryDrawer handelsMenu={this.state.handelsMenu} />
      </div>
    );
  }
}

export default App;
