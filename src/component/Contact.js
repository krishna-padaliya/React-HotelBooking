import React from 'react'
import '../style/Contact.css'
import { TiLocation } from "react-icons/ti";
import { MdCall } from "react-icons/md";
import { IoMdMailUnread } from "react-icons/io";
function Contact() {
  return (
    <div>
      <div className="contact">
        {/* conatct1  */}
        <div className="contact1">
        <div className="container">
            <div className="row">
              <div
                className="col-lg-12 d-flex justify-content-center"
                id="content"
              >
                <h1>CONTACT</h1>
              </div>
            </div>
          </div>
        </div>
        {/* conatct1  */}
        

        {/* contact2 */}
        <div className="contact2">
        <div className="container">
          <div className="row d-flex">
            <div className="col-lg-5">
             <h6>CONTACT US</h6>
             <h4>Get In Touch</h4>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor tellus vel mauris scelerisque accumsan. Maecenas quis nunc sed sapien dignissim pulvinar. Se d at gravida.</p>
             <button className='btn' id='b1'>VIEW PRICES</button>
            </div>
            <div className="col-lg-7">
            <input type="text" class="form-control" id="validationCustom01"  required  placeholder='Name'/>
            <input type="email" class="form-control" id="validationCustom01"  required  placeholder='Email'/>
            <textarea name="" id="" cols="76" rows="5" placeholder='Message' className='p-2'></textarea>
            <button className='btn' id='b2'>SEND</button>
            </div>
          </div>
        </div>
        </div>
        {/* contact2 */}


        {/* contact3  */}
         <div className="contact3">
          <div className="container-fulid" id='con1'>
            <div className="row">
              <div className="col-lg-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d403438.8346735232!2d144.968809!3d-37.81661!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato%20Pty%20Ltd!5e0!3m2!1sen!2sus!4v1715450579130!5m2!1sen!2sus" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="col-lg-12" id='con2'>
              <h3>Contacts</h3>
                <p> <span><TiLocation />  </span>111 8th Ave, New York U.S.A.</p>
                <p> <span><MdCall />  </span> Ph +1-202-555-0153</p>
                <p> <span><IoMdMailUnread />  </span> info@site.com</p>
                <button className='btn' id='b3'>CONTACT US</button>
              </div>
            </div>
          </div>
         </div>
        {/* contact3  */}


       


      </div>
    </div>
  )
}

export default Contact
