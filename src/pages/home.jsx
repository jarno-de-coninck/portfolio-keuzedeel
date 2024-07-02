import { useState } from 'react'
import { NavLink } from 'react-router-dom';
function Home() {
  return (
    <>
      <div className="row my-auto">
        <div className="col-md-5">
            <h1 className='fw-bold'>HELLO I AM A SOFTWARE <span className='mainColor'>DEVELOPER</span></h1>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam  facilisis ultricies tellus. In tincidunt justo vel fringilla faucibus.  Praesent at mi ipsum. Aliquam erat volutpat. Maecenas nec lacus libero.</p>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam  facilisis ultricies tellus. In tincidunt justo vel fringilla faucibus.  Praesent at mi ipsum. Aliquam erat volutpat. Maecenas nec lacus libero.</p>
            <button className='btn px-4 fw-bold text-white'><NavLink className="nav-link" to="/contact">Contact me</NavLink></button>
        </div>
        <div className="col-md-7 d-flex justify-content-end">
          <img className='w-75' src="./images/mainPicture.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default Home
