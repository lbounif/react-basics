import React from 'react'
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className = "UserOutput">
            <p>Hello I am {props.username}</p>
            <p>Hello this is Paragraph two</p>
        </div>
      )
    }
    
export default userOutput