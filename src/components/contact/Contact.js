import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <>
      <div className="container-fluid contact-page">
        <div className="container">
          <div className="contact">
            <div className="contact-left">
              <a className="c-contact">Guide</a>
              <a className="c-contact">Support</a>
              <a className="c-contact">API</a>
              <a className="c-contact">Community</a>
            </div>
            <div className="contact-right">
              <a className="c-contact"> &copy;  Otabek Abdurakhmonov</a>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
