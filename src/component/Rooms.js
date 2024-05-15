import React from "react";
import "../style/Rooms.css";
import { Bs1CircleFill } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";
import { Bs3CircleFill } from "react-icons/bs";
import { Bs4CircleFill } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiMenuSearchLine } from "react-icons/ri";
import { Link } from "react-router-dom";
// toast
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Rooms = ({ room, Filter, allcatefilter, bookNow }) => {
  return (
    <div>
      <div className="rooms">
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
        {/* rooms1  */}
        <div className="rooms1">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-12 d-flex justify-content-center"
                id="content"
              >
                <h1>ROOMS</h1>
              </div>
              <div
                className="col-lg-12 d-flex justify-content-center"
                id="content"
              >
                <p className="me-4">
                  <span>
                    <Bs1CircleFill />
                  </span>{" "}
                  SEARCH
                </p>
                <p className="me-4">
                  <span>
                    <Bs2CircleFill />
                  </span>{" "}
                  BOOKING
                </p>
                <p className="me-4">
                  <span>
                    <Bs3CircleFill />
                  </span>{" "}
                  CHECKOUT
                </p>
                <p>
                  <span>
                    <Bs4CircleFill />
                  </span>{" "}
                  THANK YOU
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* rooms1  */}

        {/* rooms2   */}
        <div className="rooms2">
          <div className="container-fulid">
            <div className="row">
              <div className="col-lg-12 d-flex justify-content-center">
                <div class="dropdown">
                  <button class="dropbtn">
                    STAY PRICE <RiArrowDropDownLine />
                  </button>
                  <div class="dropdown-content">
                    <a href="#">LOWEST PRICE</a>
                    <a href="#">HIGHEST PRICE</a>
                  </div>
                </div>
                <div class="dropdown">
                  <button class="dropbtn">
                    ROOM SIZE <RiArrowDropDownLine />{" "}
                  </button>
                  <div class="dropdown-content">
                    <a href="#">LARGER ROOM</a>
                    <a href="#">SMALLER ROOM</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* rooms2  */}

        {/* rooms3 */}
        <div className="rooms3">
          <div className="container">
            <div className="row d-flex">
              <div className="col-lg-4 m-0 p-0" id="rm_left">
                <h4>
                  <RiMenuSearchLine /> ALL CATEGORIES
                </h4>
                <ul>
                  <li onClick={() => allcatefilter()}>All Rooms</li>
                  <li onClick={() => Filter("small")}>Small Rooms</li>
                  <li onClick={() => Filter("view")}>Room With View</li>
                  <li onClick={() => Filter("famliy")}>Famliy Rooms</li>
                  <li onClick={() => Filter("double")}>Double Rooms</li>
                  <li onClick={() => Filter("apartment")}>Apartments</li>
                  <li onClick={() => Filter("luxury")}>Luxury Rooms</li>
                </ul>
              </div>
              <div className="col-lg-8 d-flex flex-wrap" id="rm_right">
                {room.map((e) => (
                  <>
                    <div class="card" style={{ width: "22rem" }}>
                      <div className="imgoverly">
                        {/* <Link to={`RoomInfopage/${e.id}`} */}
                        <img src={e.image} class="card-img-top" alt="..." />
                        {/* /> */}
                        <div class="middle">
                          <div class="text">
                            <Link to={`RoomInfopage/${e.id}`} id="Link">
                              EXPLOER
                            </Link>
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
                            <img
                              src={e.service1}
                              alt=""
                              srcset=""
                              width={"30px"}
                            />
                            <img
                              src={e.service2}
                              alt=""
                              srcset=""
                              width={"30px"}
                            />
                            <img
                              src={e.service3}
                              alt=""
                              srcset=""
                              width={"30px"}
                            />
                            <img
                              src={e.service4}
                              alt=""
                              srcset=""
                              width={"30px"}
                            />
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
        {/* rooms3 */}
      </div>
    </div>
  );
};

export default Rooms;
