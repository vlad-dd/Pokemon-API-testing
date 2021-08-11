import React from 'react'
import './Type.css'

const Leaders = ({name, url}) => {
    return (
        <div className='current_leader'>
            <div><img className='type_gif' src={url} /></div>
            <div className='current_leader_name'>{name}</div>
        </div>
    )
}

export default Leaders
