import React, { useContext } from 'react'
import './TransactionView.css'
import { AppContext } from '../../ContextProvider'

function TransactionItem({ amount, location, date, type, id }) {
    const positive = {
        color: 'green'
    }

    const negative = {
        color: 'red'
    }

    const { transactions, budget, setTransactions, setBudget } = useContext(AppContext)

    let newBudget = budget

    const handleClick = () => {
        setTransactions(transactions.filter(item => item.id !== id))
        if (type === 'addBalance') {
            setBudget(newBudget - parseFloat(amount))
        } else {
            setBudget(newBudget + parseFloat(amount))
        }
    }

    return (
        <div className='line-item' id={id}>
            <button onClick={handleClick}><i className="im im-x-mark"></i></button>
            <p>{location}</p>
            <p>{date}</p>
            <p style={type === 'addBalance' ? positive : negative}>${amount}</p>
        </div>
    )
}

export default TransactionItem
