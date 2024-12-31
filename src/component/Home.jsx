import axios from 'axios';
import React, { useState } from 'react'
import CreateCourse from './CreateCourse';
 
 

const Home = () => {

 const [active, setactive] = useState("active")


//  const apiClient = axios.create({
//   baseURL:HOST,
//   headers: {
//       'Content-Type': 'application/json',
//       "App-Secret":"abdursoft"
//   }
// });

// apiClient.interceptors.request.use(config => {
//   const token = localStorage.getItem('token'); 

//   if (token) {
      // config.headers.Authorization = Bearer${token};
//   }
//   return config;

// });



  return (
    <div className='w-full flex flex-col gap-4 items-center justify-center '>


<CreateCourse/>


    <div className='wrapper'>
    <div class="card">
   <div className='image_box'>
   <img src="https://i.ibb.co.com/pXTGZzV/three.jpg" alt=""/>
    <div className='passed_box'>
    <span className={`${ active == "active" ? "bg-red-600": " bg-[#0066b2]"} passed`}> Passed</span>
    </div>
   </div>
    <div class="text-part">
        <h3> Blue Whale</h3>
        <p>The blue whale is the largest animal on Earth, First Animal
            marily on krill and are found in oceans  </p>
    </div>
    <div class="btn_box">
        <button> See More</button>
    </div>
    </div>

  
    <div class="card">
   <div className='image_box'>
   <img src="https://i.ibb.co.com/pXTGZzV/three.jpg" alt=""/>
    <div className='passed_box'>
    <span className={`${ active == "deactive" ? "bg-red-600": " bg-[#0066b2]"} passed`}> Passed</span>
    </div>
   </div>
    <div class="text-part">
        <h3> Blue Whale</h3>
        <p>The blue whale is the largest animal on Earth, First Animal
            marily on krill and are found in oceans  </p>
    </div>
    <div class="btn_box">
        <button> See More</button>
    </div>
    </div>

  
    <div class="card">
   <div className='image_box'>
   <img src="https://i.ibb.co.com/pXTGZzV/three.jpg" alt=""/>
    <div className='passed_box'>
    <span className={`${ active == "active" ? "bg-red-600": " bg-[#0066b2]"} passed`}> Passed</span>
    </div>
   </div>
    <div class="text-part">
        <h3> Blue Whale</h3>
        <p>The blue whale is the largest animal on Earth, First Animal
            marily on krill and are found in oceans  </p>
    </div>
    <div class="btn_box">
        <button> See More</button>
    </div>
    </div>

  
    <div class="card">
   <div className='image_box'>
   <img src="https://i.ibb.co.com/pXTGZzV/three.jpg" alt=""/>
    <div className='passed_box'>
    <span className={`${ active == "deactive" ? "bg-red-600": " bg-[#0066b2]"} passed`}> Passed</span>
    </div>
   </div>
    <div class="text-part">
        <h3> Blue Whale</h3>
        <p>The blue whale is the largest animal on Earth, First Animal
            marily on krill and are found in oceans  </p>
    </div>
    <div class="btn_box">
        <button> See More</button>
    </div>
    </div>

  
    <div class="card">
   <div className='image_box'>
   <img src="https://i.ibb.co.com/pXTGZzV/three.jpg" alt=""/>
    <div className='passed_box'>
    <span className={`${ active == "active" ? "bg-red-600": " bg-[#0066b2]"} passed`}> Passed</span>
    </div>
   </div>
    <div class="text-part">
        <h3> Blue Whale</h3>
        <p>The blue whale is the largest animal on Earth, First Animal
            marily on krill and are found in oceans  </p>
    </div>
    <div class="btn_box">
        <button> See More</button>
    </div>
    </div>

  
    <div class="card">
   <div className='image_box'>
   <img src="https://i.ibb.co.com/pXTGZzV/three.jpg" alt=""/>
    <div className='passed_box'>
    <span className={`${ active == "deactive" ? "bg-red-600": " bg-[#0066b2]"} passed`}> Passed</span>
    </div>
   </div>
    <div class="text-part">
        <h3> Blue Whale</h3>
        <p>The blue whale is the largest animal on Earth, First Animal
            marily on krill and are found in oceans  </p>
    </div>
    <div class="btn_box">
        <button> See More</button>
    </div>
    </div>

  
    <div class="card">
   <div className='image_box'>
   <img src="https://i.ibb.co.com/pXTGZzV/three.jpg" alt=""/>
    <div className='passed_box'>
    <span className={`${ active == "active" ? "bg-red-600": " bg-[#0066b2]"} passed`}> Passed</span>
    </div>
   </div>
    <div class="text-part">
        <h3> Blue Whale</h3>
        <p>The blue whale is the largest animal on Earth, First Animal
            marily on krill and are found in oceans  </p>
    </div>
    <div class="btn_box">
        <button> See More</button>
    </div>
    </div>
    <div class="card">
   <div className='image_box'>
   <img src="https://i.ibb.co.com/pXTGZzV/three.jpg" alt=""/>
    <div className='passed_box'>
    <span className={`${ active == "deactive" ? "bg-red-600": " bg-[#0066b2]"} passed`}> Passed</span>
    </div>
   </div>
    <div class="text-part">
        <h3> Blue Whale</h3>
        <p>The blue whale is the largest animal on Earth, First Animal
            marily on krill and are found in oceans  </p>
    </div>
    <div class="btn_box">
        <button> See More</button>
    </div>
    </div>

  
  
    
    
    </div>

  
    </div>
  )
}

export default Home