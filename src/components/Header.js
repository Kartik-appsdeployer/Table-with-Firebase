import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="Header">
            <h1><Link className='h1' to='/'>Employee</Link></h1>
            <Link className='Links' to="/add">Add Employee</Link>
        </div>
    )
}

export default Header
