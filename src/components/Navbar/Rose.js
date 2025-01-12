import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'



function  Rose(){
    return(

        <>
     <div className="card text-bg-none" style={{ border: 'none' }}>
  <img
    src="/images/background1.jpg"
    className="card-img"
    alt="..."
    style={{ border: 'none', maxHeight: '100vh' }}
  />
  
  <div className="card-img-overlay">
    <div className="row justify-content-center">
      <div className="col-sm-6 mb-3 mb-sm-0 d-flex justify-content-center">
        <div className="card" style={{ height: '80vh' }}>
          <div className="card-body text-center">
            <b
              style={{
                color: '#34495e',
                fontSize: '2em',
                marginLeft: '1em',
              }}
            >
              MY PROJECTS
            </b>
            <br />
            <br />
            <img
              src="/images/hostel.jpg"
              className="img-fluid rounded-start"
              alt="Hostel Management"
              style={{
                width: '100%',
                maxWidth: '300px',
                objectFit: 'cover',
                marginLeft: 'auto',
                marginRight: 'auto',
                height: '35%',
                marginTop: '0.1em',
              }}
            />
            <br />
            <b
              className="card-text"
              style={{
                color: 'salmon',
                fontSize: '1.5em',
                marginTop: '1em',
              }}
            >
              Hostel Management System
            </b>
            <ul style={{ color: '#34495e' }}>
              <br />
              <li>
                Developed an online management system using PHP and MySQL to
                streamline hostel operations.
              </li>
              <li>
                Implemented features for managing room allocation, student
                records, and payment tracking to optimize workflow.
              </li>
              <li>
                Ensured secure access through role-based authentication for
                admins and students.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-sm-6 d-flex justify-content-center">
        <div className="card" style={{ height: '80vh' }}>
          <div className="card-body text-center">
            <img
              src="/images/mca.jpg"
              className="img-fluid rounded-start"
              alt="Multimodal Brain Tumor"
              style={{
                width: '100%',
                maxWidth: '300px',
                objectFit: 'cover',
                marginLeft: 'auto',
                marginRight: 'auto',
                height: '40%',
                marginTop: '2em',
              }}
            />
            <br />
            <br />
            <b
              className="card-text"
              style={{
                color: 'salmon',
                fontSize: '1.5em',
                marginTop: '1em',
              }}
            >
              Multimodal Brain Tumor Segmentation
            </b>
            <ul
              style={{
                color: '#34495e',
                fontSize: '1.1em',
              }}
            >
              <br />
              <li>
                Designed a deep learning model to improve brain tumor
                segmentation accuracy using Python and Machine Learning
                techniques.
              </li>
              <li>
                Utilized monomodal brain images to enhance precision in tumor
                identification.
              </li>
              <li>
                Applied advanced data preprocessing techniques to boost the
                model's performance.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style jsx>{`
  @media (max-width: 767px) {
    .card-body {
      padding: 1em;
    }

    .card-img {
      max-height: 60vh;
    }

    .col-sm-6 {
      margin-bottom: 1em;
    }

    .card {
      height: auto;
    }

    .img-fluid {
      max-width: 100%;
      height: auto;
    }

    .card-text {
      font-size: 1.2em;
    }
  }
`}</style>


        </>
    )
}
export default Rose