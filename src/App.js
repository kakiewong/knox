import './App.css';
import Header from './components/header/Header'
import Budget from './components/budget/Budget'


function App() {
  return (
    <div className="app">
      <Header />
      <div className='showcase'>
        <Budget />
        <div className='view-toggle'>
          <button>Transactions</button>
          <button>Breakdown</button>
        </div>
      </div>
    </div>
  );
}

export default App;
