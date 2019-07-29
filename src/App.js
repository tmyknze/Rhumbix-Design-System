import React, { Component } from 'react';
import './App.css';
import { Button } from './components/Button/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button onClick={() => alert('👈')} > Primary Button </Button>
      </div>
    );
  }
}

export default App;
