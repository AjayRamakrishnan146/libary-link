import React from 'react'

const Signup = () => {
  return (
    <div id='signup'>
            <div className="container">
            <div className="row g-3 d-flex justify-content-center align-items-center vh-100">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="row g-3 border border-dark p-5" id='signup1'>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" name="name" id="" className="form-control border border-dark"/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                            <label htmlFor="" className="form-label">email</label>
                            <input type="email" name="mail" id=""  className="form-control border border-dark" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                            <label htmlFor="" className="form-label">Phone</label>
                            <input type="number" name="phone" id=""  className="form-control border border-dark"/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                            <label htmlFor="" className="form-label">Location</label>
                            <input type="text" name="location" id=""  className="form-control border border-dark" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                            <label htmlFor="" className="form-label">Username</label>
                            <input type="text" name="username" id=""  className="form-control border border-dark" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" name="password" id=""  className="form-control border border-dark" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                            <button className="btn btn-success" >Register</button>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup