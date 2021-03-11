import React, { useContext } from 'react'
import { useFormik } from 'formik'
import { AppContext } from '../../ContextProvider'
import './AddTransaction.css'

function AddTransaction() {

    const { transactions, budget, setTransactions, setBudget } = useContext(AppContext)

    const today = new Date()

    const dd = today.getDate()
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const yy = today.getFullYear()

    const maxDate = yy + '-' + mm + '-' + dd

    const updateBudget = value => {
        if (value.transactionType === 'addBalance') {
            setBudget(budget + parseFloat(value.amount))
        } else {
            setBudget(budget - parseFloat(value.amount))
        }
    }

    const validate = values => {
        const errors = {};
        if (!values.amount) {
            errors.amount = '*Required'
        } else if (!/^\d*\.?\d{1,2}$/g.test(values.amount)) {
            errors.amount = '*Invalid'
        }
        if (!values.location) {
            errors.location = '*Required'
        } else if (values.location.length > 15) {
            errors.location = 'Character limit 15'
        }
        if (values.transactionType === 'none') {
            errors.transactionType = '*Required'
        }
        if (!values.date) {
            errors.date = '*Required'
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            amount: '',
            location: '',
            transactionType: '',
            date: '',
        },
        validate,
        onSubmit: values => {
            setTransactions([
                {
                    ...values,
                    id: Math.random() * 100
                },
                ...transactions
            ])
            updateBudget(values)
            formik.handleReset()
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
                        onBlur={formik.handleBlur}
                        value={formik.values.amount}
                    >
                    </input>
                    {formik.errors.amount && formik.touched.amount
                        ? <p className='error'>{formik.errors.amount}</p> : null}
                </span>
                <span>
                    <label>Source:</label>
                    <input
                        type='text'
                        id='location'
                        name='location'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.location}
                    >
                    </input>
                    {formik.errors.location && formik.touched.location
                        ? <p className='error'>{formik.errors.location}</p> : null}
                </span>
                <span>
                    <label>Transaction Type:</label>
                    <select
                        id='transactionType'
                        name='transactionType'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.transactionType}
                    >

                        <option value='none'>Select an option</option>
                        <option value='addBalance'>Add Balance</option>
                        <option value='food'>Food</option>
                        <option value='gas'>Gas</option>
                        <option value='entertainment'>Entertainment</option>
                        <option value='other'>Other</option>
                    </select>
                    {formik.errors.transactionType && formik.touched.transactionType
                        ? <p className='error'>{formik.errors.transactionType}</p> : null}
                </span>
                <span>
                    <label>Date:</label>
                    <input
                        type='date'
                        id='date'
                        name='date'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.date}
                        max={maxDate}
                    >
                    </input>
                    {formik.errors.date && formik.touched.date
                        ? <p className='error'>{formik.errors.date}</p> : null}
                </span>
                <button
                    type='submit'
                    className='submit-btn'>Submit
                </button>
            </form>
        </div>
    )
}

export default AddTransaction
