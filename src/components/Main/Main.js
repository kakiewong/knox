import React, { useContext, useState } from 'react'
import { AppContext } from '../../ContextProvider'
import TransactionView from '../TransactionView/TransactionView'
import Breakdown from '../Breakdown/Breakdown'
import './Main.css'

function Main() {
    const [view, setView] = useState('transactionsView')
    const { transactions } = useContext(AppContext)

    const handleClick = e => {
        setView(e.target.id)
    }
    return (
        <div className='main'>
            <div className='view-toggle'>
                <button id='transactionsView' onClick={handleClick}>Transactions</button>
                <button id='breakdownView' onClick={handleClick}>Breakdown</button>
            </div>
            {transactions.length === 0 ? <h1 id='defaultMessage'>Add A Transaction To Begin!</h1> :
                view === 'transactionsView' ? <TransactionView /> :
                    <Breakdown />
            }
        </div>
    )
}

export default Main
