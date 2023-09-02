import React from 'react'
import './Footer.scss'
import Logo from '../../images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faPinterest, faSquareFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className='footer'>
      <section className="left">
        <img src={Logo} alt="logo" />
      </section>

      <section className="right">
          <div className="col">
            <p>Features</p>
            <ul>
              <li>Link Shortening</li>
              <li> Branded Links</li>
              <li>  Analytics</li>
            </ul>
          </div>

          <div className="col">
            <p>  Resources</p>
            <ul>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </ul>
          </div>

          <div className="col">
            <p>Company</p>
            <ul>
              <li> About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="socials">
          <FontAwesomeIcon icon={faSquareFacebook}  className='icon'/>
          <FontAwesomeIcon icon={faTwitter} className='icon' />
          <FontAwesomeIcon icon={faPinterest} className='icon'/>
          <FontAwesomeIcon icon={faInstagram}  className='icon'/>
          </div>
      </section>
    </footer>
  )
}

export default Footer