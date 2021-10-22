import React from 'react'
import './courses.css'
import arabic from '../../img/PT_ARABIC_L1.png'
import english from '../../img/e.png'
import math from '../../img/math.jpg'

const Courses = () => {
  return (
    <>
      <div className="container-fluid courses-page">
        <div className="container">
          <div className="courses">
            <h2 className="courses-main-t mb-4 pb-4">Our courses</h2>
            <div className="course">
              <div className="course-left">
                <img className="img-fluid images-size" src={arabic}/>
              </div>
              <div className="course-right">
                <div className="arabic">
                  <h3 className="arabic-title">Arabic language courses</h3>
                  <div className="arabic-content">
                    <p className="arabic-title-desc april-2">
                      <i className="fas fa-clock"> April 2</i>
                    </p>
                    <p className="arabic-title-desc">
                      <i className="fas fa-calendar"> Tue/Thu/Sat</i>
                    </p>
                    <p className="arabic-title-desc">
                      <i className="fas fa-circle"> For Beginners</i>
                    </p>
                    <p className="arabic-title-desc">
                      <i className="fas fa-play"> Two months</i>
                    </p>
                  </div>
                  <p className="arabic-desc">
                    Lorem Ipsum has been the industry's standard 
                    dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it 
                    to make a type specimen book. 
                  </p>
                  <div className="btn-text">
                    <button className='register-btn'>Register</button>
                    <div className="places-left">7 places left</div>
                  </div>

                </div>
              </div>
            </div>
            <div className="course">
              <div className="course-left">
                <img className="img-fluid images-size" src={english}/>
              </div>
              <div className="course-right">
                <div className="arabic">
                  <h3 className="arabic-title">English language courses</h3>
                  <div className="arabic-content">
                    <p className="arabic-title-desc april-2">
                      <i className="fas fa-clock"> May 3</i>
                    </p>
                    <p className="arabic-title-desc">
                      <i className="fas fa-calendar"> Mon/Wed/Fri</i>
                    </p>
                    <p className="arabic-title-desc">
                      <i className="fas fa-circle"> For Beginners</i>
                    </p>
                    <p className="arabic-title-desc">
                      <i className="fas fa-play"> Two months</i>
                    </p>
                  </div>
                  <p className="arabic-desc">
                    Lorem Ipsum has been the industry's standard 
                    dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it 
                    to make a type specimen book. 
                  </p>
                  <div className="btn-text">
                    <button className='register-btn'>Register</button>
                    <div className="places-left">10 places left</div>
                  </div>

                </div>
              </div>
            </div>
            <div className="course">
              <div className="course-left">
                <img className="img-fluid images-size math-img" src={math}/>
              </div>
              <div className="course-right">
                <div className="arabic">
                  <h3 className="arabic-title">Mathematic courses</h3>
                  <div className="arabic-content">
                    <p className="arabic-title-desc april-2">
                      <i className="fas fa-clock"> May 14</i>
                    </p>
                    <p className="arabic-title-desc">
                      <i className="fas fa-calendar"> Mon/Wed/Fri</i>
                    </p>
                    <p className="arabic-title-desc">
                      <i className="fas fa-circle"> For Beginners</i>
                    </p>
                    <p className="arabic-title-desc">
                      <i className="fas fa-play"> Two months</i>
                    </p>
                  </div>
                  <p className="arabic-desc">
                    Lorem Ipsum has been the industry's standard 
                    dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it 
                    to make a type specimen book. 
                  </p>
                  <div className="btn-text">
                    <button className='register-btn'>Register</button>
                    <div className="places-left">12 places left</div>
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

export default Courses
