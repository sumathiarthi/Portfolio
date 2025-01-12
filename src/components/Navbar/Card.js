import React from 'react'
import Slider from './Slider'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function Card(){
    return(
        <>
      <Slider/> 

      <div
  class="card text-bg-none"
  style={{
    border: 'none',
  }}
>
  <img
    src="/images/background1.jpg"
    class="card-img"
    alt="..."
    style={{
      border: 'none',
      maxHeight: '100vh',
      width: '100%',
      objectFit: 'cover', // Ensures the background image scales correctly
    }}
  />
  <div class="card-img-overlay">
    <div
      class="card mb-3"
      style={{
        maxWidth: '100%',
        margin: 'auto',
        top: '6em',
        border: 'none',
      }}
    >
      <div class="row g-0 d-flex flex-wrap align-items-center">
        
        <div class="col-md-4 d-flex justify-content-center">
          <img
            src="/images/profile.jpeg"
            class="img-fluid rounded-start"
            alt="About Us"
            style={{
              width: '90%',
              maxWidth: '300px',
              objectFit: 'cover',
              margin: '1em auto',
              height: 'auto',
            }}
          />
        </div>
        
        <div class="col-md-8">
          <div class="card-body" style={{ width: '100%' }}>
            <h1 class="card-title text-center text-md-start">
              <b style={{ color: 'salmon', marginRight: '0.3em' }}>ABOUT</b>
              <b style={{ color: '#2c3e50' }}>ME</b>
            </h1>
            <h2
              class="text-center text-md-start"
              style={{ color: '#34495e' }}
            >
              Hello!! I'm ARTHI
            </h2>
            <hr />
            <p
              style={{
                color: '#34495e',
                fontSize: 'clamp(1rem, 2vw, 1.3rem)', // Responsive font size
              }}
            >
              <b style={{ color: 'salmon' }}>
                I am a recent MCA graduate with a background in B.Sc. Computer
                Science.
              </b>
              Currently focused on enhancing your technical skills. You're
              preparing for interviews, working on projects like responsive
              design in React, and you have a keen interest in learning various
              technologies such as{' '}
              <b style={{ color: 'salmon' }}>
                Java, Python (Django), and JavaScript (React.js)
              </b>
              .<br />
              Proficient in creating structured and visually appealing web
              pages. You have experience in designing responsive layouts that
              adapt to various screen sizes, ensuring a seamless user
              experience across devices. Below this, I have attached my
              LinkedIn profile for my brief details.
            </p>
            <br />
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              fill="#0077b5"
              class="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
            <a
              rel="noopener"
              target="_blank"
              href="https://www.linkedin.com/in/arthi-k-26a18b241"
              style={{
                textDecoration: 'none',
                color: '#0077b5',
                fontWeight: 'bold',
                borderRadius: '5px',
                padding: '5px 10px',
                display: 'inline-block',
                transition: 'background-color 0.3s ease, color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#0077b5';
                e.target.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#0077b5';
              }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="card text-bg-none" style={{border:'none',
    
  }} >
  <img src="/images/background1.jpg" class="card-img" alt="..."
  
  style={{border:'none',maxHeight:'95vh'
    
  }}
  
  />
  <div class="card-img-overlay">
    
  <div class="card mb-3" style={{maxwidth:"540px", marginTop:'5em',border:'none'}} >
  <div class="row g-0">
    <div class="col-md-7">
    <div class="card-body" style={{height:'80%'}}>
    <h5 class="card-title">
        <b style={{color:'#34495e',fontSize:'2em',marginLeft:'1em'}}>MY EDUCATION</b>
        </h5><br/><br/>
        <h4 style={{color:'salmon',marginLeft:'4em'}}><u>MCA (Master of Computer Applications)</u></h4><br/>
        <p class="card-text">
      <b style={{color:'#34495e',fontSize:"1.1em",marginLeft:'7em'}}>
CSI Institute of Technology, Thovalai, Anna University</b><br/>
<b style={{color:'#34495e',fontSize:"1.1em",marginLeft:'8em'}}>CGPA: 8.50 | Passed out: 2024</b> 
</p><br/><br/>



<h4 style={{color:'salmon',marginLeft:'4em'}}><u>B.Sc. Computer Science</u></h4><br/>
        <p class="card-text">
      <b style={{color:'#34495e',fontSize:"1.1em",marginLeft:'7em'}}>
      Pioneer Kumaraswamy College, Kanyakumari<br/></b>
<b style={{color:'#34495e',fontSize:"1.1em",marginLeft:'8em'}}>CGPA: 8.56 | Passed out: 2022
</b> 
</p>
       
      </div>
    </div>
    <div class="col-md-4">
    <img 
        src="/images/arthi1 (1).jpg"
        className="img-fluid rounded-circle"
        alt="About Us"
        style={{width: '80%',
           maxwidth: '300px', 
           objectFit:'cover',
           marginLeft:'3em',
           height:'88%',
           marginRight:'4em',
           marginTop:'2em'
          }} />
    </div>
  </div>
</div>
   
  </div>
</div>

     



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



  <div className="card text-bg-none border-0">
  <img
    src="/images/background2.jpg"
    className="card-img"
    alt="Background"
    style={{ maxHeight: '80vh', objectFit: 'cover', width: '100%' }}
  />
  <div className="card-img-overlay d-flex flex-column justify-content-center align-items-start">
    <h1
      className="card-title text-start mb-4"
      style={{ color: '#34495e', marginLeft: '4rem' }}
    >
      PLEASE <br />
      GET IN TOUCH
    </h1>
    <h4
      className="card-text text-start mb-4"
      style={{ color: 'salmon', marginLeft: '8rem' }}
    >
      <i>For Further Information</i>
    </h4>
    <div className="contact-info">
      <p className="d-flex align-items-center" style={{ marginLeft: '3rem' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-telephone-forward-fill me-2"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708"
          />
        </svg>
        <strong>+91 9787531232</strong>
      </p>
      <p className="d-flex align-items-center" style={{ marginLeft: '3rem' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-envelope-arrow-up-fill me-2"
          viewBox="0 0 16 16"
        >
          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zm.192 8.159 6.57-4.027L8 9.586l1.239-.757.367.225A4.49 4.49 0 0 0 8 12.5c0 .526.09 1.03.256 1.5H2a2 2 0 0 1-1.808-1.144M16 4.697v4.974A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-1.965.45l-.338-.207z" />
          <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016" />
        </svg>
        <strong>sumathiarthi74@gmail.com</strong>
      </p>
      <p className="d-flex align-items-center" style={{ marginLeft: '3rem' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-linkedin me-2"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
        </svg>
        <a
          rel="noopener"
          target="_blank"
          href="https://www.linkedin.com/in/arthi-k-26a18b241"
          className="text-decoration-none fw-bold"
          style={{ color: '#0077b5' }}
        >
          LinkedIn Profile
        </a>
      </p>
    </div>
  </div>
</div>










</>
    )
}

export default Card

