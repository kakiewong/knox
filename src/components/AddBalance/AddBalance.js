import React from 'react'
import { useFormik } from 'formik'
import '../AddTransaction/AddTransaction.css'

function AddBalance() {
    const formik = useFormik({
        initialValues: {
            amount: '',
            location: '',
            date: ''
        },
        onSubmit: values => {
            console.log(values)
        }
    })

    return (
        <div className='form'>
            <h1>Add Balance</h1>
            <form onSubmit={formik.handleSubmit} className='form-container'>
                <span>
                    <label>Amount:</label>
                    <input
                        type='text'
                        id='amount'
                        name='amount'
                        onChange={formik.handleChange}
                        value={formik.values.amount}
                    />
                </span>
                <span>
                    <label>Source</label>
                    <input
                        type='text'
                        id='location'
                        name='location'
                        onChange={formik.handleChange}
                        value={formik.values.location}
                    />
                </span>
                <span>
                    <label>Date</label>
                    <input
                        type='date'
                        id='date'
                        name='date'
                        onChange={formik.handleChange}
                        value={formik.values.date}
                    />
                </span>
                <button type='submit' className='submit-btn'>Submit</button>
            </form>
        </div>
    )
}

export default AddBalance
