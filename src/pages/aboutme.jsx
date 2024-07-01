import React from 'react';
  
function AboutMe() {
  return (
    <div className="container-fluid h-100 my-auto">
      <h1 className="fw-bold text-center mb-4">Over mij</h1>
      <div className="row justify-content-around align-items-stretch h-75">
        {/* Project Roi Section */}
        <div className="col-12 col-sm-6 col-md-4 d-flex flex-column text-center mb-3 mb-md-0">
          <img className="mx-auto mb-4 img-fluid" src="./images/myself.png" alt="Myself" style={{ maxWidth: '120px' }} />
          <h3 className="mainColor mt-auto">Project Roi</h3>
          <p>Learn more about my hobbies and team roles.</p>
          <div className="d-flex flex-column gap-2">
            <button className="btn btn-primary fw-bold text-white w-100">My CV</button>
            <button className="btn btn-secondary fw-bold text-white w-100" data-bs-toggle="modal" data-bs-target="#myHobbies">Learn more</button>
          </div>
        </div>

        {/* Education Section */}
        <div className="col-12 col-sm-6 col-md-4 d-flex flex-column text-center mb-3 mb-md-0">
          <img className="mx-auto mb-4 img-fluid" src="./images/education.png" alt="Education" style={{ maxWidth: '120px' }} />
          <h3 className="mainColor mt-auto">Project Roi</h3>
          <p>Find out why I chose this career path and how it is going so far.</p>
          <button className="btn btn-secondary fw-bold text-white w-100" data-bs-toggle="modal" data-bs-target="#myCareer">Learn more</button>
        </div>

        {/* Skills Section */}
        <div className="col-12 col-sm-6 col-md-4 d-flex flex-column text-center">
          <img className="mx-auto mb-4 img-fluid" src="./images/skills.png" alt="Skills" style={{ maxWidth: '120px' }} />
          <h3 className="mainColor mt-auto">Project Roi</h3>
          <p>Find out what kinds of skills I have.</p>
          <button className="btn btn-secondary fw-bold text-white w-100" data-bs-toggle="modal" data-bs-target="#mySkills">Learn more</button>
        </div>
      </div>

      {/* Modal for Skills */}
      <div className="modal fade" id="mySkills" tabIndex="-1" aria-labelledby="mySkillsLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content projectElement">
            <div className="modal-header projectElement">
              <h4 className="modal-title" id="mySkillsLabel">Skills</h4>
            </div>
            <div className="modal-body projectElement">
              Detailed information about my skills.
            </div>
            <div className="modal-footer projectElement">
              <button type="button" className="btn btn-danger border border-dark" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Career */}
      <div className="modal fade" id="myCareer" tabIndex="-1" aria-labelledby="myCareerLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content projectElement">
            <div className="modal-header projectElement">
              <h4 className="modal-title" id="myCareerLabel">Career</h4>
            </div>
            <div className="modal-body projectElement">
              Detailed information about my career.
            </div>
            <div className="modal-footer projectElement">
              <button type="button" className="btn btn-danger border border-dark" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Hobbies */}
      <div className="modal fade" id="myHobbies" tabIndex="-1" aria-labelledby="myHobbiesLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content projectElement">
            <div className="modal-header projectElement">
              <h4 className="modal-title" id="myHobbiesLabel">Hobbies</h4>
            </div>
            <div className="modal-body projectElement">
              Detailed information about my hobbies.
            </div>
            <div className="modal-footer projectElement">
              <button type="button" className="btn btn-danger border border-dark" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;
