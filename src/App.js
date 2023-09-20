import React from 'react';
import './App.css';
import Header from './Component/Header';
import Content from './Component/Content';

function App() {
  return (
    <React.Fragment>
  <Header message ="this is message from header"/>
  <Content/>
</React.Fragment>
)
}

export default App
