import React from 'react'
import { Link } from 'react-router-dom'

const Heading = () => {
    return (
        <div>
            <h2 className='text-center d-flex align-items-center justify-content-center'>
                <Link to='/' className='text-light heading-logo p-1 py-3'>MGN</Link><span className='main-heading text-light'> MG DAILY NEWS</span>
            </h2>
        </div>
    )
}

export default Heading