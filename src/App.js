// bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Layout from "./component/Layout";
import { useState } from "react";
import Data from "./component/Data.js";
// toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // Book Now
  const [book, setBook] = useState([]);

  // Rooms
  const [room, setRoom] = useState(Data);

  // Room Filter
  const Filter = (x) => {
    const Flietrcat = Data.filter((e) => {
      return e.category === x;
    });
    setRoom(Flietrcat);
  };
  const allcatefilter = () => {
    setRoom(Data);
  };
  console.log(room);

  // Book Now
  const bookNow = (el) => {
    const exist = book.find((x) => {
      return x.id === el.id;
    });
    if (exist) {
      toast.success("This Room Already Booking!!", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setBook([...book, { ...el, qty: 1 }]);
      toast.success("Booking Sucessfully!!", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  console.log(book)

  // datepicker
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  console.log("checkIn: "+checkIn);
  console.log("checkOut: "+checkOut);

  // Night stay count
  const [Count, setCount] = useState(1);
  console.log("Night: "+Count)

  return (
    <div className="App">
      <Router>
        <Navbar book={book} />
        <Layout
          room={room}
          Filter={Filter}
          allcatefilter={allcatefilter}
          bookNow={bookNow}
          book={book}
          setBook={setBook}
          checkIn={checkIn}
          setCheckIn={setCheckIn}
          checkOut={checkOut}
          setCheckOut={setCheckOut}
          Count={Count}
          setCount={setCount}
        />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
