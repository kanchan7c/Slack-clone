import React from 'react';
import './app.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <Sidebar />
        {/* react-router for chat screen  */}
      </div>
    </div>
  );
}

export default App;
