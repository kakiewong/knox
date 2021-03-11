import React from 'react'
import './App.css';
import Header from './components/Header/Header'
import Budget from './components/Budget/Budget'
import Slider from './components/Slider/Slider'
import TransactionView from './components/TransactionView/TransactionView'
import { ContextProvider } from './ContextProvider'

function App() {
  return (
    <ContextProvider>
      <div className="app">
        <Header />
        <Slider />
        <div className='showcase'>
          <Budget />
          <div className='view-toggle'>
            <button>Transactions</button>
            <button>Breakdown</button>
          </div>
          <TransactionView />
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
