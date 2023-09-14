import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Option() {
    return (
        <>
            <div className='position-absolute top-50 start-50 translate-middle'>
                <Link to='/view/all/events' className='btn btn-success mx-2'>View All Events</Link>
                <Link to='/register/new/event' className='btn btn-success'>Register New Events</Link>
            </div>
        </>
    )
}

export default Option
