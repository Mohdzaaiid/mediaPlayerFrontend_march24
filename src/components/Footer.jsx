import { faInstagram, faTwitter, faFacebook , faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faTicket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
    {/* <div>Landing</div> */}
    <div className="row w-100 p-5">
      <div className="col-md-4">
        <h4 className='text-success mb-4'><FontAwesomeIcon icon={faTicket} className='me-3' />Media Player </h4>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto debitis non tempore laudantium quae nostrum corporis placeat illum, voluptates incidunt magni, architecto ab distinctio? Est officia omnis totam debitis esse!</p>
      </div>
      <div className="col-md-2 d-md-flex justify-content-center">
       <div>
       <h4 className='mb-4'>Links</h4>
        <div>
        <Link to={'/'}><p>Landing Page</p></Link>
        <Link to={'/home'}><p>Home</p></Link>
        <Link to={'/watchhistory'}><p>Watch History</p></Link>
        </div>
       </div>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-2">
        <div>
        <h4 className='mb-4'>Guides</h4>
        <div>
        <p>React</p>
        <p>React Bootstarp</p>
        <p>Bootswatch</p>
        </div>
        </div>
        </div>
      <div className="col-md-3 d-md-flex justify-content-center">
        <div>
        <h4>Contact Us</h4>
        <div className="d-flex mt-4">
          <input type="text" className='form-control' placeholder='Email Id' />
          <button className='btn btn-success ms-4'>Subscribe</button>
        </div>
        <div className="d-flex justify-content-between mt-4">
        <FontAwesomeIcon icon={faInstagram} className='fa-2x' />
        <FontAwesomeIcon icon={faTwitter} className='fa-2x' />
        <FontAwesomeIcon icon={faFacebook} className='fa-2x' />
        <FontAwesomeIcon icon={faLinkedinIn} className='fa-2x' />
        <FontAwesomeIcon icon={faWhatsapp} className='fa-2x' />
        </div>
        </div>
      </div>
      
    </div>

    </>
  )
}

export default Footer