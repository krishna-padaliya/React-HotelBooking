import React from "react";
import "../style/Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaCloudSun } from "react-icons/fa";
import { ImBehance } from "react-icons/im";
import { FaSkype } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcStripe } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="container-fulid my-5 mx-5">
          <div className="row d-flex">
            <div className="col-lg-3">
              <p>Main Contacts :</p>
              <li>Asburd 14 ( Miami )</li>
              <li>info@resort.com</li>
              <li>+23 3453776547</li>
              <li>Reception 24 H</li>
            </div>
            <div className="col-lg-3">
              <p>Site Links :</p>
              <li>ABOUT US</li>
              <li>OUR SERVICES</li>
              <li>OUR ROOMS</li>
              <li>PAYMENTS</li>
            </div>
            <div className="col-lg-6 ">
              <p>Newsletter</p>

              <div className="col-lg-12 justify-content-between d-flex ">
                <input
                  type="text"
                  placeholder="Insert Your Email"
                  className="form-control"
                />
                <button>SUBSCRIBE</button>
              </div>

              <div className="row d-flex mt-5">
                <div className="col-lg-6">
                  <p>Social :</p>
                  <li className="social">
                    <FaFacebookF /> &nbsp; <FaYoutube /> &nbsp; <FaTwitter />{" "}
                    &nbsp; <FaWhatsapp />
                  </li>
                </div>
                <div className="col-lg-6">
                  <p>Find us also :</p>
                  <li className="social">
                    <IoLogoGooglePlaystore /> &nbsp; <FaCloudSun /> &nbsp;{" "}
                    <ImBehance /> &nbsp; <FaSkype />
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-ft">
          <div className="container-fulid">
            <div className="row m-0 p-0 d-flex justify-content-between">
              <div className="col-lg-6 col-md-sm-12  d-flex p-2">
                <span>MARINA HOTEL & RESTRO</span>
              </div>
              <div className="col-lg-6 d-flex justify-content-lg-end justify-content-sm-start ">
                <li className="me-3">
                  <FaCcVisa />
                </li>
                <li className="me-3">
                  <FaCcMastercard />
                </li>
                <li className="me-3">
                  <FaCcPaypal />
                </li>
                <li>
                  {" "}
                  <FaCcStripe />
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
