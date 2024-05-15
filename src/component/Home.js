import React, { useEffect, useState } from "react";
import "../style/Home.css";
import { FaStar } from "react-icons/fa";
import Data from "./Data";
// about
import '../style/About.css'
import homeab from '../image/homeab.jpg'
// contact
import '../style/Contact.css'
import { TiLocation } from "react-icons/ti";
import { MdCall } from "react-icons/md";
import { IoMdMailUnread } from "react-icons/io";
// toast
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home({bookNow}) {
  const [newProduct, setNewProduct] = useState([]);
  const [primeProduct, setPrimeProduct] = useState([]);
  const [topProduct, setTopProduct] = useState([]);
  const [allProduct, setAllProduct] = useState(Data);

  // allProduct filter
  const FilterCat = (x) => {
    const FilterProduct = Data.filter((e) => {
      return e.type === x;
    });
    setAllProduct(FilterProduct);
  };
  const ProductAll = () => {
    setAllProduct(Data);
  };

  // product type
  useEffect(() => {
    productcategory();
  });

  const productcategory = () => {
    // new product
    const newcat = Data.filter((e) => {
      return e.type == "new";
    });
    setNewProduct(newcat);
    // prime rooms
    const primecat = Data.filter((e) => {
      return e.type == "prime";
    });
    setPrimeProduct(primecat);
    const topcat = Data.filter((e) => {
      return e.type == "topselling";
    });
    setTopProduct(topcat);
  };
  return (
    <div>
      <div className="home">
      <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* sec1  */}
        <div className="sec1">
          <div
            className="container-fluid d-flex align-items-center justify-content-center"
            style={{ height: "450px" }}
          >
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1 id="heading">SEA HOTEL</h1>
                <br />
                <p>
                  143 TH AVENUE, MIAMI <br /> TEL 1 345 2348 <br />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
                <button>ROOM SUITES</button>
              </div>
            </div>
          </div>
        </div>
        {/* sec1  */}

        {/* about2  */}
        <div className="about2">
          <div className="container">
            <div className="row d-flex">
              <div className="col-lg-6">
               <img src={homeab} alt="" width={"500px"} height={"530px"} />
              </div>
              <div className="col-lg-6">
              <h6>RESORT HOTEL</h6>
              <h4>Relax Wonderful Suites & Rooms</h4>
              <div className="row d-flex">
                <div className="col-lg-6">
                <p>Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit. Proin tempor nunc vel nisl condimentum, nec tempor risus.</p>
                <p>Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit. Proin tempor nunc vel nisl condimentum, nec tempor risus.</p>
                  <div className="row">
                    <div className="col-lg-6">
                      <img src="https://www.nicdarkthemes.com/themes/hotel-resort/wp/demo/hotel/wp-content/uploads/sites/2/2022/11/team10-150x150.jpeg" class="rounded-circle" width={"80px"} alt="" />
                    </div>
                    <div className="col-lg-6">
                      <h3>Hanna Stuart</h3>
                       <h5>HOTEL MANAGER</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                 <p>Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit. Proin tempor nunc vel nisl condimentum, nec tempor risus.</p>
                 <p>Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit. Proin tempor nunc vel nisl condimentum, nec tempor risus.</p>
                  <img src="https://www.nicdarkthemes.com/themes/hotel-resort/wp/demo/hotel/wp-content/uploads/sites/2/2022/09/signature.png" width={"200px"} alt="" className='mt-3' />
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        {/* about2  */}


        {/* sec2  */}
        <div className="sec2">
          {/* Rooms Category  */}
          <div className="container-fulid">
            <div className="row">
              <div className="col-lg-12">
                <ul class="nav nav-tabs justify-content-end">
                  <li class="nav-item">
                    <a class="nav-link active" onClick={() => ProductAll()}>
                      ALL
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" onClick={() => FilterCat("new")}>
                      NEW
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" onClick={() => FilterCat("prime")}>
                      PRIME ROOMS
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" onClick={() => FilterCat("topselling")}>
                      TOP SELLING
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Rooms  */}
          <div className="container-fulid">
            <div className="row">
              <div className="col-lg-12 d-flex align-item-center justify-content-between flex-wrap">
                {allProduct.map((e) => (
                  <>
                    <div class="card" style={{ width: "25rem" }}>
                      <div className="imgoverly">
                      <img src={e.image} class="card-img-top" alt="..." />
                      <div class="middle">
                        <div class="text" onClick={() => bookNow(e)}>Book Now</div>
                      </div>
                      </div>
                      <div class="card-body text-center">
                        <p class="card-title">{e.name}</p>
                        <p class="card-text">${e.price}</p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
          {/* rooms  */}
        </div>
        {/* sec2  */}


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
  );
}

export default Home;
