import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Sidebar.css';

const Sidebar = ({ routes }) => {
    // Function to dynamically adjust sidebar height to match the card height
    const matchSidebarHeight = () => {
        const card = document.querySelector('.card');
        const sidebar = document.querySelector('.sidebar');

        if (card && sidebar) {
            const cardHeight = card.offsetHeight;
            sidebar.style.height = `${cardHeight}px`;
        }
    };

    // Function to update height dynamically based on clicks and window resizing
    useEffect(() => {
        // Initial adjustment
        matchSidebarHeight();

        // Adjust on window resize
        window.addEventListener('resize', matchSidebarHeight);

        // Adjust on clicks within the main content
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.addEventListener('click', matchSidebarHeight);
        }

        // Cleanup event listeners
        return () => {
            window.removeEventListener('resize', matchSidebarHeight);
            if (mainContent) {
                mainContent.removeEventListener('click', matchSidebarHeight);
            }
        };
    }, []);

    return (
        <div className="sidebar">
            <nav className="nav">
                {routes.map((route, index) => (
                    <NavLink key={index} to={route.path}>
                        {route.name}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
};

Sidebar.propTypes = {
    routes: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            element: PropTypes.element,
        })
    ).isRequired,
};

export default Sidebar;
