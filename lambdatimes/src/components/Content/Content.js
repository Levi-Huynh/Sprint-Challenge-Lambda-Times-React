import React, { Component } from 'react';
import TopBar from '../../components/TopBar';
import Header from '../../components/Header';

import MainPage from './MainPage';

const Content = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <MainPage/>
    </div>
  );
}

export default Content;
