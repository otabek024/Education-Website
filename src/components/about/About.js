import React from 'react'
import './about.css'
import leftImg from '../../img/team-1.jpg'

const About = () => {
  return (
    <>
      <div id="about" className="container-fluid about">
        <div className="container">
          <div className="about-us">
            <h1 className="a-title">
              About us
            </h1>
            <div className="d-flex a-block">
              <div className="a-left">
                <div>
                  <img className="img-fluid team-img" src={leftImg}/>
                </div>
              </div>
              <div className="a-right">
                <div className="ar-content">
                  <h1 className="ar-title">Our values</h1>
                  <p className="ar-desc">
                    Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to 
                    make a type specimen book.
                    <br /> <br />
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 
                    1960s with the release of Letraset sheets containing.
                    <br /> <br />
                    Lorem Ipsum passages, and more recently with desktop publishing 
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <a href="#" className="ar-btn">Explore
                     <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
