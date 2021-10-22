import React from 'react'
import './team.css'
import person1 from '../../img/person1.jpg'
import person2 from '../../img/person 2.jpg'
import person3 from '../../img/person 3.jpg'
import person4 from '../../img/person 4.jpg'
import person5 from '../../img/person 5.jpg'
// import person6 from '../../img/person 6.jpg'

const Team = () => {
  return (
    <>
      <div id="team" className="container-fluid carousel-section">
        <div className="container cars-container">
          <div className="row">
            <h1 className="team-title">Our Team</h1>
            <div className="col-md-12">
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
                  <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active"> 
                    <div className="row">
                      <div className="col-md-4">
                        <div className="single-box">
                          <div className="img-area"><img src={person1} alt=""></img></div>
                          <div className="img-text">
                            <h2>Name 1</h2>
                            <p>
                              Frontend Web Developer with 3 years experience
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single-box">
                          <div className="img-area"><img src={person2} alt=""></img></div>
                          <div className="img-text">
                            <h2>Name 2</h2>
                            <p>
                              Senior Web Developer with 5 years experience
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single-box">
                          <div className="img-area"><img src={person3} alt=""></img></div>
                          <div className="img-text">
                            <h2>Name 3</h2>
                            <p>
                              Backend Web Developer with 4 years experience
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item"> 
                    <div className="row">
                      <div className="col-md-4">
                        <div className="single-box">
                          <div className="img-area"><img src={person4} alt=""></img></div>
                          <div className="img-text">
                            <h2>Name 4</h2>
                            <p>
                              Python specialist with 3 years experience
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single-box">
                          <div className="img-area"><img src={person5} alt=""></img></div>
                          <div className="img-text">
                            <h2>Name 5</h2>
                            <p>
                              JavaScript expert with 7 years experience
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single-box">
                          <div className="img-area"><img src={person2} alt=""></img></div>
                          <div className="img-text">
                            <h2>Name 6</h2>
                            <p>
                              Frontend Web Developer with 2 years experience
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Team
