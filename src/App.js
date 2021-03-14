import React, { useContext } from 'react'
import './App.css';
import Header from './components/Header/Header'
import Budget from './components/Budget/Budget'
import Slider from './components/Slider/Slider'
import Main from './components/Main/Main'
import { ContextProvider } from './ContextProvider'

function App() {

  return (
    <ContextProvider>
      <div className="app">
        <Header />
        <Slider />
        <div className='showcase'>
          <Budget />
          <Main />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
