import React, { Component } from 'react';
import Link from './components/Link';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Welcome to React</h1>
        </header>
        <Link address="www.google.com"/>
      </div>
    );
  }
}

export default App;
