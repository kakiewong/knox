import React, { useContext } from 'react'
import { useFormik } from 'formik'
import { AppContext } from '../../ContextProvider'
import './AddTransaction.css'

function AddTransaction() {

    const { transactions, setTransactions } = useContext(AppContext)

    const formik = useFormik({
        initialValues: {
            amount: '',
            location: '',
            transactionType: '',
            date: ''
        },
        onSubmit: values => {
            setTransactions([
                values,
                ...transactions
            ])
        }
    })

    return (
        <div className='form'>
            <h1>Add Transaction</h1>
            <form className='form-container' onSubmit={formik.handleSubmit}>
                <span>
                    <label>Amount:</label>
                    <input
                        type='text'
                        id='amount'
                        name='amount'
                        onChange={formik.handleChange}
                        value={formik.values.amount}
                    >
                    </input>
                </span>
                <span>
                    <label>Location:</label>
                    <input
                        type='text'
                        id='location'
                        name='location'
                        onChange={formik.handleChange}
                        value={formik.values.location}
                    >
                    </input>
                </span>
                <span>
                    <label>Transaction Type:</label>
                    <select
                        id='transactionType'
                        name='transactionType'
                        onChange={formik.handleChange}
                        value={formik.values.transactionType}
                    >
                        <option value='addBalance'>Add Balance</option>
                        <option value='food'>Food</option>
                        <option value='gas'>Gas</option>
                        <option value='entertainment'>Entertainment</option>
                        <option value='other'>Other</option>
                    </select>
                </span>
                <span>
                    <label>Date:</label>
                    <input
                        type='date'
                        id='date'
                        name='date'
                        onChange={formik.handleChange}
                        value={formik.values.date}
                    >
                    </input>
                </span>
                <button type='submit' className='submit-btn'>Submit</button>
            </form>
        </div>
    )
}

export default AddTransaction
