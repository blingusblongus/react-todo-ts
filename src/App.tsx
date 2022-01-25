import React from 'react';
import './App.css';
import InputField from './components/InputField';

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">
        Hello World
      </span>
      <InputField />
    </div>
  )
}

export default App;
