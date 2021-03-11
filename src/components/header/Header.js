import React, { useContext } from 'react';
import './Header.css';
import { AppContext } from '../../ContextProvider';

function Header() {
    const { toggle, setToggle } = useContext(AppContext)

    const toggleSlide = () => {
        setToggle(!toggle)
    }

    return (
        <div className='nav'>
            <h1 id='title'>KNOX</h1>
            <button className='btn' onClick={toggleSlide}><i className="im im-plus"></i></button>
        </div>
    )
}

export default Header
