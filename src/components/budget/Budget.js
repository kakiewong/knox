import React, { useContext } from 'react'
import { AppContext } from '../../ContextProvider'
import './Budget.css'

function Budget() {
    const { budget } = useContext(AppContext);

    return (
        <div className='budget-display'>
            <h3>Balance:</h3>
            <h1>${budget}</h1>
        </div>
    )
}

export default Budget
