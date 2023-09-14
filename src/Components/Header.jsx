import React from 'react'
import Option from './Option'

export default function Header() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <p className='fw-bold h4 text-center'>EVENT REGISTRATION APP</p>
                </div>
            </div>

            <Option />
        </>
    )
}
