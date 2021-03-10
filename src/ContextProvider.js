import React, { useState, createContext } from 'react'

export const AppContext = createContext();

export function ContextProvider({ children }) {
    const [budget, setBudget] = useState('0')
    const [transactions, setTransactions] = useState([])
    const [toggle, setToggle] = useState(false)

    return (
        <AppContext.Provider value={{
            budget: budget,
            transactions: transactions,
            toggle: toggle,
            setBudget: setBudget,
            setTransactions: setTransactions,
            setToggle: setToggle
        }}>
            {children}
        </AppContext.Provider>
    )
}

