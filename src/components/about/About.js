import React from 'react'
import './about.css'

const About = () => {
  return (
    <>
      <div className="container-fluid about">
        <div className="container">
          <div className="about-us">
            <h1 className="a-title">
              About us
            </h1>
            <div className="d-flex a-block">
              <div className="left">
                <div>
                  <img className="imf-fluid" src="#"/>
                </div>
              </div>
              <div className="right">
                <div className="r-content">
                  <h1 className="r-title"></h1>
                  <p className="r-desc">
                    Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to 
                    make a type specimen book.
                    <br />
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 
                    1960s with the release of Letraset sheets containing.
                    <br />
                    Lorem Ipsum passages, and more recently with desktop publishing 
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <a href="#" className="r-btn">
                    <i className="fal fa-arrow-right"></i>
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
