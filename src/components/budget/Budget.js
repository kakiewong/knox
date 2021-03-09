import React from 'react'
import './Budget.css'

function Budget({ budget }) {
    return (
        <div className='budget-display'>
            <h3>Balance:</h3>
            <h1>${budget}</h1>
        </div>
    )
}

export default Budget
