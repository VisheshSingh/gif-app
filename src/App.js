import React from 'react';
import './App.css';
import Random from './Random';
import Tag from './Tag';

function App() {
  return (
    <div className='App'>
      <h1>GIF App</h1>
      <main>
        <Random />
        <Tag />
      </main>
    </div>
  );
}

export default App;
