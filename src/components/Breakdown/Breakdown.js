import React, { useContext } from 'react'
import { VictoryPie } from 'victory'
import './Breakdown.css'
import { AppContext } from '../../ContextProvider'

function Breakdown() {
    const { transactions } = useContext(AppContext)
    const total = transactions.length
    const balanceTransactions = transactions.filter(item => item.transactionType === 'addBalance').length
    const foodTransactions = transactions.filter(item => item.transactionType === 'food').length
    const gasTransactions = transactions.filter(item => item.transactionType === 'gas').length
    const entTransactions = transactions.filter(item => item.transactionType === 'entertainment').length
    const otherTransactions = transactions.filter(item => item.transactionType === 'other').length



    const getPercentage = value => {
        if (!value) {
            return;
        } else {
            let percent = (value / total) * 100
            return (`${percent.toFixed(2)}%`)
        }
    }

    const getLabel = (value, label) => {
        if (!value) {
            return null
        } else {
            return label
        }
    }


    const data = [
        {
            x: getLabel(balanceTransactions, 'Income'),
            y: getPercentage(balanceTransactions)
        },
        {
            x: getLabel(foodTransactions, 'Food'),
            y: getPercentage(foodTransactions)
        },
        {
            x: getLabel(gasTransactions, 'Gas'),
            y: getPercentage(gasTransactions)
        },
        {
            x: getLabel(entTransactions, 'Entertainment'),
            y: getPercentage(entTransactions)
        },
        {
            x: getLabel(otherTransactions, 'Other'),
            y: getPercentage(otherTransactions)
        },
    ]
    return (
        <div className='container'>
            <VictoryPie
                data={data}
                innerRadius={110}
                colorScale={['#083D77', '#0FA3B1', '#F4D35E', '#EE964B', '#F95738']}
                labels={({ datum }) => [datum.x, datum.y]}
            />
        </div>
    )
}

export default Breakdown
