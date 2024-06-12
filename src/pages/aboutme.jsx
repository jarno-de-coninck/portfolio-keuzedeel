import { useState } from 'react'

function AboutMe() {
  return (
    <div className="h-75 my-auto w-100">
      <h1 className='fw-bold'>Over mij</h1>
      <div className="row justify-content-between align-items-center d-flex h-75">
        <div className="col-md-3 d-flex flex-column text-center h-50">
          <img className='mx-auto mb-4' src="./images/myself.png" alt="" width={120}/>
          <h3 className='mainColor mt-auto'>Project Roi</h3>
          <p>Learn more about my hobbies and teamroles.</p>
          <div className="d-flex flex-column gap-2">
            <button className='btn px-4 fw-bold text-white w-50 mx-auto'>My CV</button>
            <button className='btn px-4 fw-bold text-white w-50 mx-auto'>Learn more</button>
          </div>
        </div>
        <div className="col-md-3 d-flex flex-column text-center h-50">
          <img className='mx-auto mb-4' src="./images/education.png" alt="" width={120}/>
          <h3 className='mainColor mt-auto'>Project Roi</h3>
          <p>Find out why I chose this career path and how it is going so far.</p>
          <button className='btn px-4 fw-bold text-white w-50 mx-auto'>Learn more</button>
        </div>
        <div className="col-md-3 d-flex flex-column text-center h-50">
          <img className='mx-auto mb-4' src="./images/skills.png" alt="" width={120}/>
          <h3 className='mainColor mt-auto'>Project Roi</h3>
          <p>Find out what kinds of skill I have.</p>
          <button className='btn px-4 fw-bold text-white w-50 mx-auto'>Learn more</button>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
