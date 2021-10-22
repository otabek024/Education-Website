import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <>
      <div id="contact" className="container-fluid contact-page">
        <div className="container">
          <div className="fo-wrapper">
            <ul className="fo-list">
              <li className="fo-list-item">Guide</li>
              <li className="fo-list-item">Support</li>
              <li className="fo-list-item">API</li>
              <li className="fo-list-item">Community</li>
            </ul>
            <span className="copyright">
              &copy; Otabek Abdurakhmonov 2021
              <a href="#" className="contact-arrow bottom-0 end-0 p-5">
                <i className="fas fa-arrow-up"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

{/* <a href="#" className="contact-arrow bottom-0 end-0 p-5">
<i className="fas fa-arrow-up"></i>
</a> */}

export default Contact
