import React from 'react'
import '../style/About.css'
import about from '../image/about.jpg'
import { IoCheckmark } from "react-icons/io5";

function About() {
  return (
    <div>
      <div className="about">
        {/* about1  */}
        <div className="about1">
        <div className="container">
            <div className="row">
              <div
                className="col-lg-12 d-flex justify-content-center"
                id="content"
              >
                <h1>ABOUT</h1>
              </div>
            </div>
          </div>
        </div>
        {/* about1  */}


        {/* about2  */}
        <div className="about2">
          <div className="container">
            <div className="row d-flex">
              <div className="col-lg-6">
               <img src={about} alt="" width={"450px"} height={"430px"} />
              </div>
              <div className="col-lg-6">
              <h6>HOUR HISTORY</h6>
              <h4>From the Start</h4>
              <div className="row d-flex">
                <div className="col-lg-6">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et metus augue. Mauris ut libero eget.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et metus augue. Mauris ut libero eget.</p>
                  <div className="row">
                    <div className="col-lg-6">
                      <img src="https://www.nicdarkthemes.com/themes/hotel-resort/wp/demo/hotel/wp-content/uploads/sites/2/2022/11/team07-150x150.jpeg" class="rounded-circle" width={"80px"} alt="" />
                    </div>
                    <div className="col-lg-6">
                      <h3>Victor Smith</h3>
                       <h5>GENERAL MANAGER</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et metus augue. Mauris ut libero eget.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et metus augue. Mauris ut libero eget.</p>
                  <img src="https://www.nicdarkthemes.com/themes/hotel-resort/wp/demo/hotel/wp-content/uploads/sites/2/2022/09/signature.png" width={"200px"} alt="" className='mt-3' />
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        {/* about2  */}

        {/* about3  */}
         <div className="about3">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
              <h6>THE STEPS</h6>
              <h4>Our Commitment</h4>
              </div>
              <div className="row d-flex">
                <div className="col-lg-3">
                  <h1>1</h1>
                  <h3>The Beginning</h3>
                  <p>Quisque eu euismod arcu. Morbi dapibus diam, sed interdum velit. Proin tempor nunc vel nisl.</p>
                  <p><span><IoCheckmark /> </span>In sit amet augue non dui</p>
                  <p className='abp'><span><IoCheckmark /> </span>Proin quis elit lacinia arcu</p>
                </div>
                <div className="col-lg-3">
                  <h1>2</h1>
                  <h3>Settling</h3>
                  <p>Mauris vel quam vel felis maximus bibendum vel quis erat. Duis accumsan posuere.</p>
                  <p><span><IoCheckmark /> </span>In sit amet augue non dui</p>
                  <p className='abp'><span><IoCheckmark /> </span>Proin quis elit lacinia arcu</p>
                </div>
                <div className="col-lg-3">
                  <h1>3</h1>
                  <h3>Production</h3>
                  <p>Phasellus mattis arcu ut ante hendrerit faucibus. Sed tristique justo sed nunc sagittis, nec.</p>
                  <p><span><IoCheckmark /> </span>In sit amet augue non dui</p>
                  <p className='abp'><span><IoCheckmark /> </span>Proin quis elit lacinia arcu</p>
                </div>
                <div className="col-lg-3">
                  <h1>4</h1>
                  <h3>Today</h3>
                  <p>Vivamus quis interdum neque. Aenean convallis urna at sapien dignissim, quis fringilla ipsum.</p>
                  <p><span><IoCheckmark /> </span>In sit amet augue non dui</p>
                  <p className='abp'><span><IoCheckmark /> </span>Proin quis elit lacinia arcu</p>
                </div>
              </div>
            </div>
          </div>
         </div>
        {/* about3  */}


        {/* about4  */}
         <div className="about4">
         <div className="container">
            <div className="row">
              <div
                className="col-lg-12 text-center justify-content-center"
                id="content"
              >
                <h1>Daily Promotions</h1>
                <p>Mauris vel quam vel felis maximus bibendum vel quis erat. Duis accumsan posuere est quis egestas. Donec nec odio non tellus convallis mattis a nec purus. Duis quis tortor elit.</p>
                <button className='btn'>CONTACT US</button>
              </div>
            </div>
          </div>
         </div>

        {/* about4  */}
      </div>
    </div>
  )
}

export default About
