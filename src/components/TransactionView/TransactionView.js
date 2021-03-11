import React, { useContext } from 'react'
import './TransactionView.css'
import './TransactionItem'
import { AppContext } from '../../ContextProvider'
import TransactionItem from './TransactionItem'


function TransactionView() {
    const { transactions } = useContext(AppContext)

    return (
        <div className='transaction-container'>
            {transactions.map(item =>
                <TransactionItem
                    amount={item.amount}
                    location={item.location}
                    date={item.date}
                    type={item.transactionType}
                    id={item.id}
                />)}
        </div>
    )
}

export default TransactionView
