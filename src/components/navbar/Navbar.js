import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#">ITPOWER</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">About us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">News</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Courses</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Team</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Reviews</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Contacts</a>
              </li>
            </ul>
            <form class="d-flex justify-content-center align-items-center">
              <div className="n-languages">
                <button className="btn">En/</button>
                <button className="btn">Ru/</button>
                <button className="btn">Uz</button>
              </div>
              <div>
                <i className="fas fas fa-phone"> 8 95 202 11 22</i>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
