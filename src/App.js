import React from 'react';
import 'normalize.css';
import './App.css';
import StartScreen from './components/StartScreen';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <StartScreen />
      </div>
    );
  }
}

export default App;
