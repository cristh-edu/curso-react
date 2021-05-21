import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

export default props => (
    <div className="App" >
        <Router>
            <Menu />
            <Content />
        </Router>
    </div>
)