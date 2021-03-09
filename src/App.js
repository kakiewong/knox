import React, { useState } from 'react'
import './App.css';
import Header from './components/Header/Header'
import Budget from './components/Budget/Budget'
import Slider from './components/Slider/Slider'

function App() {
  const [budget, setBudget] = useState(0)
  const [transactions, setTransaction] = useState([])

  return (
    <div className="app">
      <Header />
      <Slider />
      <div className='showcase'>
        <Budget budget={budget} />
        <div className='view-toggle'>
          <button>Transactions</button>
          <button>Breakdown</button>
        </div>
      </div>
    </div>
  );
}

export default App;
