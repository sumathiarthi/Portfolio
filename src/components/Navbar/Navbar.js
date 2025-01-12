import React from 'react'

import { Outlet, Link } from "react-router-dom";

function Navbar(){
    return(
        <>


          
        <nav class="navbar navbar-expand-lg" style={{background:"white"}}>
  <div class="container-fluid">
  <a className="navbar-brand" href="#" style={{color:"salmon"}}>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-balloon-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2 2 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386"/>
</svg>
            <span style={{ marginLeft: '5px', fontWeight: 'bold', color: '#34495e' }}>MY WEBPAGE</span>
          </a>

          {/* Navbar toggle button for mobile view */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to="/Card" className="nav-link active" style={{ color: 'salmon',marginLeft:"40em",marginRight:"2em" }}>
         <b>HOME</b> 
        </Link>
        </li>
        <li class="nav-item"> 
        <Link to="/Stuffed" className="nav-link active" style={{ color: '#34495e',marginRight:"2em"  }}>
          <b>ABOUT</b>
        </Link>
        </li>
        <li class="nav-item">
        <Link to="/Little" className="nav-link active" style={{ color: 'salmon',marginRight:"2em"  }}>
          <b>EDUCATIONS</b>
        </Link>
        </li>
        <li class="nav-item">
        <Link to="/Rose" className="nav-link active" style={{ color: '#34495e',marginRight:"2em"  }}>
          <b>PROJECTS</b>
        </Link>
        </li>
        
       
        <li class="nav-item">
        <Link to="/Fluffy" className="nav-link active" style={{ color: 'salmon',marginRight:"2em"  }}>
          <b>PING ME</b>
        </Link>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>


  </>
     

    )
}

export default Navbar

