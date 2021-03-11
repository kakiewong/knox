import React, { useContext } from 'react'
import './Slider.css'
import AddTransaction from '../AddTransaction/AddTransaction'
import { AppContext } from '../../ContextProvider'


function Slider() {
    const { toggle, setToggle } = useContext(AppContext)

    const toggleSlider = () => {
        setToggle(!toggle)
    }

    return (
        <div className={toggle ? 'slider out' : 'slider in'}>
            <button onClick={toggleSlider}><i className="im im-x-mark"></i></button>
            <AddTransaction />
        </div>
    )
}

export default Slider
