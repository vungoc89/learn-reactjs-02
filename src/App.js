import logo from './logo.svg';
// import './App.css';
import React from 'react';
import TodoFeature from './features/Todo/pages';
import AlbumFeature from './features/Album/pages';

function App() {
  return (
    <div className="App">
      <TodoFeature></TodoFeature>
      {/* <AlbumFeature></AlbumFeature> */}
    </div>
  );
}

export default App;
