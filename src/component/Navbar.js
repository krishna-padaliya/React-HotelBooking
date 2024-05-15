import React from "react";
import "../style/Navbar.css";
import { Link } from "react-router-dom";
import { FaEarthAmericas } from "react-icons/fa6";
import { RiShareFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { TiStarOutline } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";

function Navbar({book}) {
  return (
    <div>
      <div className="navbar">
        <div className="top_nav">
          <div className="container-fulid">
            <div className="row m-0 p-0 d-flex justify-content-between">
              <div className="col-lg-6 col-md-sm-12  d-flex ">
                <li className="me-3">
                  <FaEarthAmericas /> &nbsp; LANGUAGES
                </li>
                <li className="me-3">
                  <RiShareFill /> &nbsp; OUR SOCIALS
                </li>
                <li>
                  <FaFacebookF /> &nbsp; <FaTwitter /> &nbsp; <FaLinkedinIn />{" "}
                  &nbsp; <FaYoutube />
                </li>
              </div>
              <div className="col-lg-6 d-flex justify-content-lg-end justify-content-sm-start ">
                <li className="me-3">
                  <TiStarOutline /> &nbsp; OUR ROOMS
                </li>
                <li>
                  <FaLocationDot /> &nbsp; CONTACT US
                </li>
              </div>
            </div>
          </div>
        </div>

        <div className="middle_nav">
          <div className="container">
            <div className="row">
              <div className="col-lg-md-sm-12 text-center mt-4 mb-3">
                <img
                  className="mx-auto d-block"
                  src="http://www.nicdarkthemes.com/themes/hotel-resort/wp/demo/hotel/wp-content/uploads/sites/2/2022/11/logo-new-4.png"
                  alt=""
                  width={"175px"}
                />
              </div>
            </div>
          </div>
          <hr />
        </div>

        <div className="bottom_nav">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <Link to="/" class="nav-link active" aria-current="page" href="#">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" class="nav-link" href="#">
                About Us
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/room" class="nav-link" href="#">
                Rooms
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/cart" class="nav-link" href="#">
                Shop
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/contact" class="nav-link" aria-disabled="true">
                Contact
              </Link>
            </li>
            <button className="btn"  id='cartlength'>
            <Link to="/cart" class="nav-link" href="#" id="bookbtn">
                Book Now
              </Link>
                <span className=" badge ">
                {book.length}
                <span class="visually-hidden">unread messages</span>
                </span>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
