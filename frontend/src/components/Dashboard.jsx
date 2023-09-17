import React from 'react'
import Header from './Header'

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 mb-5">
              <h3 style={{ fontFamily: 'Arial, sans-serif', fontSize: '24px', color: 'black' }}>
                What Book Are You Looking For
              </h3><br />
              <p style={{ fontFamily: 'Verdana, sans-serif', fontSize: '16px', color: 'green' }}>
                Not Sure What to Read Next? Explore Our Catalog of Public Domain Books With Our Editors
              </p>
            </div>
            <div className="row mt-3">

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                <div class="card mb-3" >
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt6NQjA5iz-HI3lTJSQAoIOq3P2twWji34gg&usqp=CAU" class="img-fluid rounded-start" alt="Book Cover"style={{ height: '100%' }}  />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Rich Dad Poor Dad</h5>
                        <p class="card-text">Author: Robert Kiyosaki</p>
                        <p class="card-text">Genre: Personal Finance</p>
                        <p class="card-text">Availability: <span class="text-success">Available</span></p>
                        <p class="card-text">Due Date: N/A</p>
                        <p class="card-text">Description: A bestselling book on financial education...</p>
                        <button class="btn btn-primary">Rent</button>
                        {/* <p class="card-text mt-2"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>



              <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
              <div class="card mb-3" >
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src="data:image/jpeg;base64,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" class="img-fluid rounded-start" alt="Book Cover"style={{ height: '100%' }}  />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Revoultion 2020</h5>
                        <p class="card-text">Author: Chetan Bhagat</p>
                        <p class="card-text">Genre: Romace</p>
                        <p class="card-text">Availability: <span class="text-success">Available</span></p>
                        <p class="card-text">Due Date: N/A</p>
                        <p class="card-text">Description: A bestselling book in 2020</p>
                        <button class="btn btn-primary">Rent</button>
                        {/* <p class="card-text mt-2"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                <div class="card mb-3" >
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src="..." class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6"></div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6"></div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6"></div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Dashboard