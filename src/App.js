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
  getToogle = e => {
    this.setState({handelsMenu:e});
  }

  render() {
    return (
      <div className="App">
      <AppBar  handel={this.handel} getVaue={this.getVaue}/>
      <TemporaryDrawer handelsMenu={this.state.handelsMenu}  getToogleDrawer={this.getToogle} />
      </div>
    );
  }
}

export default App;
