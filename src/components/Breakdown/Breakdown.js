import React, { useContext } from 'react'
import { VictoryLabel, VictoryPie } from 'victory'
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
        let percent = (value / total) * 100
        return percent
    }

    const getLabel = (value, label) => {
        if (!value) {
            return null
        } else {
            let percent = getPercentage(value)
            return (label + ' ' + `${percent.toFixed(2)}%`)
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
                colorScale={['#083D77', '#0FA3B1', '#F4D35E', '#EE964B', '#F95738']}
                labels={({ datum }) => datum.x}
                style={{ labels: { fontSize: '12px' } }}
                labelComponent={
                    <VictoryLabel
                        backgroundPadding={14}
                        backgroundStyle={{ fill: 'grey', opacity: 0.5 }}
                    />
                }
            />
        </div>
    )
}

export default Breakdown
