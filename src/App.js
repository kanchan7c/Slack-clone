import React from 'react';
import './app.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './Components/Chat';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app_body">
          <Sidebar />
          <Switch>
            <Route path="/room/:roomID">
              <Chat />
            </Route>
            <Route path="/">
              <h1>Welcome</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
