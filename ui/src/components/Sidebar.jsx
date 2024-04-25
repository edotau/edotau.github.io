import React from 'react'
import { NavLink, } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Sidebar.css'


const Sidebar = ({ routes, },) => {
    return (
        <div className="sidebar">
            <nav className="nav">
                {routes.map((route, index,) => (
                    <NavLink key={index} to={route.path}>
                        {route.name}
                    </NavLink>
                ),)}
            </nav>
        </div>
    )
}

Sidebar.propTypes = {
    routes: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            element: PropTypes.element,
        },),
    ).isRequired,
}

export default Sidebar
