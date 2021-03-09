import React from 'react'
import './Slider.css'
import AddTransaction from '../AddTransaction/AddTransaction'
import AddBalance from '../AddBalance/AddBalance'

function Slider() {
    return (
        <div className='slider out'>
            <button><i className="im im-x-mark"></i></button>
            <AddTransaction />
        </div>
    )
}

export default Slider
