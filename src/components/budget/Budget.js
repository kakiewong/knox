import React, { useContext } from 'react'
import { AppContext } from '../../ContextProvider'
import './Budget.css'

function Budget() {
    const { budget } = useContext(AppContext);

    const positive = {
        color: 'green'
    }

    const negative = {
        color: 'red'
    }

    return (
        <div className='budget-display'>
            <h3>Balance:</h3>
            <h1 style={budget <= 0 ? negative : positive}>${budget.toFixed(2)}</h1>
        </div>
    )
}

export default Budget
