import React from 'react'

function Slider(){
    return(

        <>


<div
  class="card text-bg-none"
  style={{
    border: 'none',
  }}
>
  <img
    src="/images/background5.jpg"
    class="card-img"
    alt="..."
    style={{
      border: 'none',
      maxHeight: '90vh',
      width: '100%', // Ensures the image spans full width
      objectFit: 'cover', // Adjusts image to maintain aspect ratio
    }}
  />
  <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center">
    <h1
      class="card-title text-center"
      style={{
        marginTop: '0em', // Adjusted margin for better responsiveness
        color: '#34495e',
        fontSize: 'clamp(1.5rem, 5vw, 3rem)', // Responsive font size
      }}
    >
      WELCOME TO MY WEBPAGE
    </h1>
    <h5
      class="card-text text-center"
      style={{
        color: 'salmon',
        fontSize: 'clamp(1rem, 3vw, 1.5rem)', // Responsive font size
      }}
    >
      Just exploring about me | Portfolio
    </h5>
  </div>
</div>

    
</>
  )
}

export default Slider