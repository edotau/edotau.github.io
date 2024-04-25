import React from 'react'
import AboutMe from './pages/AboutMe'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Playground from './pages/Playground'

const routes = [
    { path: '/', name: 'About Me', element: <AboutMe />, },
    { path: '/experience', name: 'Experience', element: <Experience />, },
    { path: '/projects', name: 'Projects', element: <Projects/>, },
    { path: '/playground', name: 'Playground', element: < Playground/>, },
]

export default routes
