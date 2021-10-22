import React from 'react'
import './body2.css'

const Body2 = () => {
  return (
    <>
      <div id="news" className="container-fluid p-5 body2">
        <div className="container">
          <div className="b2-content d-flex flex-column justify-content-center align-items-center">
            <h1 className="b2-title-m">
              Our latest news
            </h1>
            <div className="b2-boxes d-flex mt-4 pt-4">
              <div className="b2-cover d-flex flex-column">
                <div className="b2-box">
                  <div>
                    <i className="fas fa-podcast"></i>
                    <h5 className="b2-title">We are hiring Administrator</h5>
                  </div>
                </div>
                  <p className="b2-desc">
                  Hurry up we are hiring responsible 
                  administrator for reception
                  </p>
              </div>
              <div className="b2-cover  d-flex flex-column justify-content-center">
                <div className="b2-box">
                  <div>
                    <i class="fas fa-graduation-cap"></i>
                    <h5 className="b2-title">New course opened</h5>
                  </div>
                </div>
                  <p className="b2-desc">
                    We have opened the new course preparation
                    for the President School 
                  </p>
              </div>

              <div className="b2-cover  d-flex flex-column justify-content-center">
                <div className="b2-box">
                  <div>
                    <i class="fad fa-users-class"></i>
                    <h5 className="b2-title">MDIS Tashkent presentation</h5>
                  </div>
                </div>
                  <p className="b2-desc">
                    Presentation about MDIS in Tashkent in our centre
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Body2
