import React from 'react'

export default function AllEvents() {
    let database = [{
        id: 1,
        eventName: 'Information Technology',
        thumbnailImage: 'https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1496&q=80',
        imageDescription: "Image of IT Event",
        eventDate: "30-09-2023",
        eventLocation: 'PC Hotel, Karachi'
    },

    {
        id: 2,
        eventName: 'Evolution of AI',
        thumbnailImage: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1557&q=80',
        imageDescription: "Image of AI Event",
        eventDate: "25-09-2023",
        eventLocation: 'Expo Center, Karachi'
    },

    {
        id: 3,
        eventName: 'Strategies of HRM',
        thumbnailImage: 'https://plus.unsplash.com/premium_photo-1661544694664-f281ae4b06a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
        imageDescription: "About Human Resource Management",
        eventDate: "30-09-2023",
        eventLocation: 'PC Hotel, Karachi'
    },

    ]

    return (
        <>
            <div className="container-fluid">

                <div className="row">
                    {
                        database.map((value, i) => {
                            return (
                                <>
                                    <div className="card mx-4 mt-2" style={{ width: '360px ', height: '310px', borderRadius: '1px solid black' }}>
                                        <img src={value.thumbnailImage} key={i} className='card-img-top' height={200} />
                                        <div className="card-body">
                                            <div className="card-title">
                                                <p className='card-text mb-0 text-center fw-bold h5'>{value.eventName}</p>
                                                <p className='card-text mb-0'>📅 Date: {value.eventDate}</p>
                                                <p className='card-text mt-0 mx-2'>📍 Location: {value.eventLocation}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>


            </div >

        </>
    )
}
