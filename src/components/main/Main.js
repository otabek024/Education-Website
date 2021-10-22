import React from 'react'
import './main.css'
import mainImg from '../../img/girl.png'

const Main = () => {
  return (
    <>
      <div id="home" className="container-fluid pt-lg-5 mt-5 pt-5 main-bg">
        <div className="container d-flex justify-content-space-between pt-lg-5">
          <div className="left">
            <h1 className="m-title">
              Tired from boring courses? Join us!
            </h1>
            <p className="m-desc">
              Our team teach you with an unique method of 
              teaching, you will never get bored
            </p>
            <a href="#" className="m-btn"> 
              <p>Explore</p>
              <i className="fal fa-arrow-right"></i>
            </a>
            <div className="m-icons">
              <a href="#"><i className="fab fa-telegram"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
            </div>
          </div>
          <div className="right">
            <div className='mainImg'>
              <img className="img-fluid" src={mainImg}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
