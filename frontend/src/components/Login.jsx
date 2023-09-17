import React from 'react'

const Login = () => {
  return (
    <div id='login'>

<div className="container">
            <div className="row d-flex justify-content-center align-items-center vh-100">
                <div className="row  justify-content-center align-items-center">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 border border-dark" id='login1'>
                        <div className="row text-center mt-3">
                            <h3>Login</h3>
                        </div>
                    <div className="row justify-content-center align-items-center">
                     <div className="col col-12 col-sm-6 col-md-6 col-lg-6 ">
                    <label htmlFor="" className="form-label" >Username</label>
                    <input type="text" className="form-control border border-dark" name="username" />
                </div>
                </div>
                <div className="row justify-content-center align-items-center">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 ">
                    <label htmlFor="" className="form-label">Password</label>
                    <input type="password" name="password" id=""  className="form-control border border-dark" />
                </div>
                </div>
                <div className="row mt-3 justify-content-center align-items-center">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6  mb-3">
                    <button className="btn btn-success"  >Login</button>
                </div>
                </div>



                    </div>
                </div>
                
                
            </div>
        </div>



    </div>
  )
}

export default Login