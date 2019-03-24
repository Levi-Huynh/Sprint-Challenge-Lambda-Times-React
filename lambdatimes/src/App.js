import React, { Component } from 'react';
// import TopBar from './components/TopBar';
// import Header from './components/Header';
// import Content from './components/Content/Content';
import withAuthenticate from './components/Authentication/withAuthenticate';
import Login from './components/Login';
import Content from './components/Content/Content';
import './CSS/index.css';

const CompFromWithAuthenticate = withAuthenticate (Content)(Login);

const App = () => {
  return (
    <div className="App">
     <CompFromWithAuthenticate/>
    </div>
  );
}

export default App;
