import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NewEvent() {
    const formikData = useFormik(
        {
            initialValues: {
                eventName: "",
                scheduleOfEvent: "",
                speakerName: "",
                sponsorName: "",
                selectLocation: "",
                companyName: "",
                city: "",
                eventType: ""
            },
            validationSchema: Yup.object(
                {
                    scheduleOfEvent: Yup.string().required('Required'),
                    speakers: Yup.string().max(5, 'Must contain atleast 5 characters').required('Required'),
                    sponsorName: Yup.string().max(5, 'Must contain atleast 5 characters').required('Required'),
                    selectLocation: Yup.string().required('Required'),
                }
            ),
            onSubmit: (values) => {
                console.log(values)
            }
        }
    )

    const notify = () => {
        toast.success('Event registered successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4 mx-auto justify-content-center card p-2 mt-5" style={{ width: '30rem' }}>

                        <form onSubmit={formikData.handleSubmit} className='needs-validation' noValidate>
                            <h5 className='text-center'>REGISTRATION FORM</h5>


                            <div className="row g-3 align-items-center mx-auto mt-1">
                                <div className="col-md-5">
                                    <label className='form-label'>Event Name: </label>
                                </div>
                                <div className="col-md-7">
                                    <input
                                        type='text'
                                        className='form-control'
                                        name='eventName'
                                        onChange={formikData.handleChange}
                                        value={formikData.values.eventName}
                                        placeholder='Enter event name'
                                        onBlur={formikData.handleBlur}
                                    />
                                </div>
                            </div>

                            {/* Schedule of events */}
                            <div className="row g-3 align-items-center mx-auto mt-1">
                                <div className="col-md-6">
                                    <label className='form-label'>Select Schedule of Event: </label>
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type='date'
                                        className='form-control'
                                        name='scheduleOfEvent'
                                        value={formikData.values.scheduleOfEvent}
                                        onChange={formikData.handleChange}
                                    />

                                </div>
                            </div>

                            {/* Speaker */}
                            <div className="row g-3 align-items-center mx-auto mt-1">
                                <div className="col-md-5">
                                    <label className='form-label'>Speaker Name: </label>
                                </div>

                                <div className="col-md-7">
                                    <input
                                        type='text'
                                        className='form-control'
                                        name='speakerName'
                                        value={formikData.values.speakerName}
                                        onChange={formikData.handleChange}
                                        onBlur={formikData.handleBlur}
                                        placeholder='Enter speaker name'
                                    />
                                </div>
                            </div>

                            {/* Sponsors */}
                            <div className="row g-3 align-items-center mx-auto mt-1">
                                <div className="col-md-5">
                                    <label className='form-label'>Sponsor Name: </label>
                                </div>
                                <div className="col-md-7">
                                    <input
                                        type='text'
                                        className='form-control'
                                        name='sponsorName'
                                        onChange={formikData.handleChange}
                                        value={formikData.values.sponsorName}
                                        placeholder='Enter sponsor name'
                                        onBlur={formikData.handleBlur}
                                    />
                                </div>
                            </div>


                            <div className="row g-3 align-items-center mx-auto mt-1">
                                <div className="col-md-5">
                                    <label className='form-label'>Company Name: </label>
                                </div>
                                <div className="col-md-7">
                                    <input
                                        type='text'
                                        className='form-control'
                                        name='companyName'
                                        onChange={formikData.handleChange}
                                        value={formikData.values.companyName}
                                        placeholder='Enter company name'
                                        onBlur={formikData.handleBlur}
                                    />
                                </div>
                            </div>

                            {/* Location Map */}
                            <div className="row g-3 align-items-center mx-auto mt-1">
                                <div className="col-md-5">
                                    <label className='form-label'>Select Location </label>
                                </div>
                                <div className="col-md-7">
                                    <select className='form-select' value={formikData.values.selectLocation} name='selectLocation' onChange={formikData.handleChange}>
                                        <option selected>Select Option</option>
                                        <option value='PC Hotel'>PC Hotel, Karachi</option>
                                        <option value='HBL, Karachi'>HBL, Karachi</option>
                                        <option value='Expo Center, Karachi'>Expo Center, Karachi</option>
                                    </select>
                                </div>

                            </div>


                            <div className="row g-3 align-items-center mx-auto mt-1">
                                <div className="col-5">
                                    <label className='form-label'>Event Type: </label>
                                </div>
                                <div className="col-md-7">
                                    <select className='form-select' value={formikData.values.eventType} name='eventType' onChange={formikData.handleChange}>
                                        <option selected>Select Option</option>
                                        <option value='Conference'>Conference</option>
                                        <option value='Workshop'>Workshop</option>
                                        <option value='Seminar'>Seminar</option>
                                    </select>
                                </div>

                            </div>

                            {/*  */}
                            <div className="row">
                                <div className="col-md-3">
                                    <button type='submit' className='btn btn-success mx-2 mt-2' onClick={notify}>Submit</button></div>
                            </div>
                            <ToastContainer />
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
