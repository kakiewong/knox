import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className='nav'>
            <h1 id='title'>KNOX</h1>
            <div className='btn-container'>
                <button className='btn'>Add Balance</button>
                <button className='btn'>Add Expense</button>
            </div>
        </div>
    )
}

export default Header
