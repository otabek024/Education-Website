import React from 'react'
import './navbar.css'


const Navbar = () => {

  // const googleTranslateElementInit = () => {
  //   new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
  // }

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#">ITPOWER</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0 text-center">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#news">News</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">About us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#courses">Courses</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#team">Team</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#sign-up">Sign up</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
            <form class="d-flex justify-content-center align-items-center">
              <div className="n-languages">
                <div id="google_translate_element" className="g-translator"></div>
              </div>
              <div>
                <i className="fas fas fa-phone"> 1 23 456 78 90</i>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
