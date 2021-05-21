import React from 'react'
import './Param.css'

import {useParams} from 'react-router-dom'

export default props => {
    const {id} = useParams()
    return (    
        <div className="Param" >
            <h1>Param</h1>
            <h2>Value: {id}</h2>
        </div>
)
}