import React from 'react'
import './body1.css'

const Body1 = () => {
  return (
    <>
      <div className="container-fluid p-5 body1">
        <div className="container">
          <div className="b1-content">
            <h1 className="b1-title">Why do they choose us?</h1>
            <div className="boxes">
              <div className="box">
                <i className="fal fa-file-alt"></i>
                <h5 className="b-title">Experience</h5>
                <p className="b-desc">
                  We are proud of our highly qualified teacher 
                  who has at least 10 years of teaching experience
                </p>
              </div>
              <div className="box">
              <i className="fal fa-shapes"></i>
                <h5 className="b-title">Variety courses</h5>
                <p className="b-desc">
                  Many types of courses from begining to the high
                  level of English and Arabic language 
                </p>
              </div>
              <div className="box">
              <i className="fal fa-cube"></i>
                <h5 className="b-title">Unique methods</h5>
                <p className="b-desc">
                  We will not waste your time and teach you with 
                  a latest method
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Body1
