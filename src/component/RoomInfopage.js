import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Data from "./Data";
import { Link } from "react-router-dom";
import "../style/RoomInfopage.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

// datepicker 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// toast
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



// checkIn,checkOut,setCheckIn,setCheckOut , Count,setCount,book
function RoomInfopage({bookNow,checkIn,checkOut,setCheckIn,setCheckOut , Count,setCount,book}) {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);

  // night count state create in appBarClasses.js 
  
// datepicker
// create state in app.js  
// const [checkIn, setCheckIn] = useState(new Date());
//   const [checkOut, setCheckOut] = useState(new Date());

//   const [Count, setCount] = useState(1);

  useEffect(() => {
    const filterProduct = Data.filter((e) => e.id == id);
    // console.log("filterProduct:-",filterProduct)
    setProduct(filterProduct[0]);

    const relatedProduct = Data.filter((e) => e.category === product.category);
    // console.log("relatedProduct:-",relatedProduct)
    setRelatedProduct(relatedProduct);
  }, [id, product.category]);

  return (
    <div>
      <div className="roomInfo">
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
        {/* roomInfo1  */}
        <div className="roomInfo1">
          <div className="container-fulid">
            <div className="row " style={{ height: "350px" }}>
              <div className="col-lg-10 col-sm-12 d-flex justify-content-start align-items-end">
                <ul class="nav flex-lg-row flex-sm-column align-items-sm-start">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#description">
                      DESCRIPTION
                    </a>
                  </li>
                  {/* <li class="nav-item">
                    <a class="nav-link" href="#room-service">
                      ROOM SERVICES
                    </a>
                  </li> */}
                  <li class="nav-item">
                    <a class="nav-link" href="#around-the-hotel">
                      AROUND THE HOTEL
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#similar-rooms">
                      SIMILAR ROOMS
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="col-lg-2 col-sm-12 d-flex justify-content-end align-items-end"
                id="pricediv"
              >
                <div className="row d-flex">
                  <div className="col-lg-4 col-sm-3">
                    <h1>{product.price}</h1>
                  </div>
                  <div className="col-lg-8 col-sm-9">
                    <p className="mt-2">
                      $ <br /> / PER NIGHT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* roomInfo1  */}

      {/* roomInfo2  */}
      <div className="roomInfo2 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>{product.name}</h1>
              <div className="row d-flex">
                <div className="col-lg-2">
                  <p className="mt-2">HOTEL ROME</p>
                </div>
                <div className="col-lg-10 mt-1" id="imgroominfo" style={{marginLeft:"-60px"}}>
                  <img
                    src="https://www.nicdarkthemes.com/themes/hotel-resort/wp/demo/hotel/wp-content/plugins/nd-booking/templates/icon-star-full-grey.svg"
                    alt=""
                    srcset=""
                    width={"15px"}
                  />
                  <img
                    src="https://www.nicdarkthemes.com/themes/hotel-resort/wp/demo/hotel/wp-content/plugins/nd-booking/templates/icon-star-full-grey.svg"
                    alt=""
                    srcset=""
                    width={"15px"}
                  />
                  <img
                    src="https://www.nicdarkthemes.com/themes/hotel-resort/wp/demo/hotel/wp-content/plugins/nd-booking/templates/icon-star-full-grey.svg"
                    alt=""
                    srcset=""
                    width={"15px"}
                  />
                  <img
                    src="https://www.nicdarkthemes.com/themes/hotel-resort/wp/demo/hotel/wp-content/plugins/nd-booking/templates/icon-star-full-grey.svg"
                    alt=""
                    srcset=""
                    width={"15px"}
                  />
                  <img
                    src="https://www.nicdarkthemes.com/themes/hotel-resort/wp/demo/hotel/wp-content/plugins/nd-booking/templates/icon-star-full-grey.svg"
                    alt=""
                    srcset=""
                    width={"15px"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* roomInfo2  */}
       

      {/* roomInfo3  */}
      <div className="roomInfo3">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-lg-8 m-0 p-0">
            <img
                class="img-fluid" width={"740px"} height={"400px"}
                src={product.image}
               
                alt="..."
              />
            </div>
            <div className="col-lg-4 m-0 p-0 " id="date">
              <div className="row d-flex m-0 p-0 mt-3">
                <div className="col-lg-6 col-sm-12" >
                  <center>
                    <p>CHECK-IN</p>
                  </center>
                  <p id="calender">
                  <DatePicker selected={checkIn} onChange={(date) => setCheckIn(date)} />
                  <span className="ms-1"><SlCalender /></span>
                  </p>
                </div>
                <div className="col-lg-6 col-sm-12">
                 <center>
                  <p>CHECK-OUT</p>
                 </center>
                 <p id="calender">
                  <DatePicker selected={checkOut} onChange={(date) => setCheckOut(date)} />
                  <span className="ms-1"><SlCalender /></span>
                  </p>
                </div>
              </div>
              <div className="row d-flex m-0 p-0" >
                <div className="col-lg-6 col-sm-12">
                <center>
                <p>GUESTS</p>
                <h1>{product.guests}</h1>
                </center>
                </div>
                <div className="col-lg-6 col-sm-12">
                <center>
                <p>NIGHTS</p>
                <div className="row">
                  <div className="col-lg-12 d-flex justify-content-center">
                  <h1>{Count}</h1>
                  <div className=" pt-4">
                  <h6 onClick={()=>setCount(Count+1)}><MdKeyboardArrowUp /></h6>
     <h6 onClick={()=>setCount(Count-1)}><MdOutlineKeyboardArrowDown /></h6>
                  </div>
                  </div>
                  <div className="col-lg-3  pt-4">
                 
                  </div>
                </div>
    
                </center>
                </div>
              </div>
              <center>
              <button className="btn" id="mybook" onClick={() => bookNow(product)}>Book Now</button>
              </center>
            </div>
          </div>
        </div>
      </div>
      {/* roomInfo3  */}



      {/* roomInfo4 */}
      <div className="roomInfo4">
        <div className="container mt-3 mb-4">
          <div className="row">
            <div className="col-lg-12">
            <div class="dropdown me-3">
                  <button class="dropbtn">
                  BREAKFAST <RiArrowDropDownLine />
                  </button>
                  <div class="dropdown-content" style={{minWidth:"152px"}}>
                    <a href="#">INCLUDED</a>
                    <a href="#">NOT INCLUDED</a>
                  </div>
                </div>
                <div class="dropdown">
                  <button class="dropbtn">
                  ROOM SERVICE <RiArrowDropDownLine />
                  </button>
                  <div class="dropdown-content" style={{minWidth:"184px"}}>
                    <a href="#">INCLUDED</a>
                    <a href="#">NOT INCLUDED</a>
                  </div>
                </div>
            </div>
          </div>
        </div>
       </div>
      {/* roomInfo4 */}




      {/* roomInfo5 */}
       <div className="roomInfo5" id="description">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h6>DESCRIPTION</h6>
              <p>{product.dec}
              Donec consectetur nibh vel gravida aliquet. Suspendisse sit amet lectus tristique, condimentum libero vel, porta justo. Proin sit amet porta nibh. Pellentesque leo lorem, blandit quis hendrerit a, suscipit dapibus nulla. Aenean ut facilisis felis. Cras tincidunt elementum neque, id viverra magna viverra et. Nam tincidunt urna sed urna vehicula fringilla. Curabitur bibendum dictum nunc, ut elementum nibh efficitur gravida. Phasellus luctus scelerisque libero, nec lobortis tortor volutpat at. Nam vitae turpis in est tristique placerat id sed tortor. Vivamus luctus sed nibh ac cursus. Sed vel ligula non risus tempus fermentum.
              </p>
            </div>
          </div>
        </div>
       </div>
      {/* roomInfo5 */}

         
      {/* roomInfo6  */}
      <div className="roomInfo6" id="around-the-hotel">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h6>AROUND THE HOTEL</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-between">
              {/* 1 */}
              <div className="view">
              <img src="https://www.nicdarkthemes.com/themes/hotel-resort/wp/demo/hotel/wp-content/uploads/sites/2/2022/09/blog-vert2.jpg" alt="" srcset="" width={"270px"}  />
              <div className="viewtext">
              OUR REVIEWS
              </div>
              </div>
              {/* 2 */}
              <div className="view">
              <img src="https://www.nicdarkthemes.com/themes/hotel-resort/wp/demo/hotel/wp-content/uploads/sites/2/2022/09/blog-vert1.jpg" alt="" srcset="" width={"270px"} />
              <div className="viewtext">
              NEW SERVICES
              </div>
              </div>
              {/* 3 */}
              <div className="view">
             <img src="https://www.nicdarkthemes.com/themes/hotel-resort/wp/demo/hotel/wp-content/uploads/sites/2/2022/09/blog-vert3.jpg" alt="" srcset="" width={"270px"} />
              <div className="viewtext">
              LATEST EVENT
              </div>
              </div>
              {/* 4 */}
              <div className="view">
             <img src="https://www.nicdarkthemes.com/themes/hotel-resort/wp/demo/hotel/wp-content/uploads/sites/2/2022/03/blog-3.jpg" alt="" srcset="" width={"270px"} />
              <div className="viewtext">
              NEW PROJECT 
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* roomInfo6  */}

     <hr />

     {/* roomInfo7 */}
     <div className="roomInfo7" id="similar-rooms">
      <div className="conatiner" style={{width:"89%" , margin:"auto"}}>
        <div className="row">
          <div className="col-lg-12">
          <h6>SIMILAR ROOMS</h6>
          </div>
        </div>
        <div className="row">
        <div className="col-lg-12 d-flex flex-wrap" id="rm_right">
        {relatedProduct.map((e) => (
          <>
            <div class="card" style={{ width: "22rem" }}>
              <div className="imgoverly">
               
                <img src={e.image} class="card-img-top" alt="..." />
               
                <div class="middle">
                  <div class="text">
                    <Link to={`RoomInfopage/${e.id}`} style={{color:"#fff" , textDecoration:"none"}}>EXPLOER</Link>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <p class="card-title">{e.name}</p>
                <div className="col d-flex" id="room_feture">
                  <div>
                    <img
                      className="me-2"
                      src="http://www.nicdarkthemes.com/themes/hotel-resort/wp/demo/hotel/wp-content/plugins/nd-booking/inc/shortcodes/include/search-results/icon-user-grey.svg"
                      width={"22px"}
                      alt=""
                    />
                    {e.guests}GUESTS
                  </div>
                  <div>
                    <img
                      className="me-2 ms-4"
                      src="http://www.nicdarkthemes.com/themes/hotel-resort/wp/demo/hotel/wp-content/plugins/nd-booking/inc/shortcodes/include/search-results/icon-plan-grey.svg"
                      width={"22px"}
                      alt=""
                    />
                    {e.ft}
                  </div>
                </div>
                <p id="room_dec">{e.dec}</p>
                <hr />
                <div className="col d-flex justify-content-between">
                  <div id="room_service">
                    <img src={e.service1} alt="" srcset="" width={"30px"} />
                    <img src={e.service2} alt="" srcset="" width={"30px"} />
                    <img src={e.service3} alt="" srcset="" width={"30px"} />
                    <img src={e.service4} alt="" srcset="" width={"30px"} />
                  </div>
                  <div id="room_btn">
                    <button className="btn" onClick={() => bookNow(e)}>
                      {" "}
                      <span> BOOK NOW {e.price} $</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
        </div>
      </div>
     </div>
     {/* roomInfo7 */}















</div>
     
    // </div>
  );
}

export default RoomInfopage;
