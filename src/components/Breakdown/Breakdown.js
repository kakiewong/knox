import React, { useContext } from 'react'
import { VictoryPie } from 'victory'
import './Breakdown.css'
import { AppContext } from '../../ContextProvider'

function Breakdown() {
    const { transactions } = useContext(AppContext)
    const total = transactions.length
    const balanceTransactions = transactions.filter(item => item.transactionType === 'addBalance')
    const foodTransactions = transactions.filter(item => item.transactionType === 'food')
    const gasTransactions = transactions.filter(item => item.transactionType === 'gas')
    const entTransactions = transactions.filter(item => item.transactionType === 'entertainment')
    const otherTransactions = transactions.filter(item => item.transactionType === 'other')


    return (
        <div>
            <button onClick={() => console.log(foodTransactions)}>Hello</button>
        </div>
    )
}

export default Breakdown
