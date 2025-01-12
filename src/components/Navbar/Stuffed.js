import React from "react"


function Stuffed(){
    return(
      <>
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

      

        </>
    )
}
export default Stuffed
