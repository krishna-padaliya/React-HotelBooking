import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import About from "./About";
import Rooms from "./Rooms";
import Cart from "./Cart";
import Contact from "./Contact";
import RoomInfopage from "./RoomInfopage";
import Checkout from "./Checkout";

function Layout({
  room,
  Filter,
  allcatefilter,
  bookNow,
  book,
  setBook,
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
  Count,
  setCount,
}) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home bookNow={bookNow} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/room"
          element={
            <Rooms
              room={room}
              Filter={Filter}
              allcatefilter={allcatefilter}
              bookNow={bookNow}
            />
          }
        />
        <Route
          path="/room/RoomInfopage/:id"
          element={
            <RoomInfopage
            book={book}
              bookNow={bookNow}
              checkIn={checkIn}
              setCheckIn={setCheckIn}
              checkOut={checkOut}
              setCheckOut={setCheckOut}
              Count={Count}
              setCount={setCount}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              book={book}
              setBook={setBook}
              checkIn={checkIn}
              setCheckIn={setCheckIn}
              checkOut={checkOut}
              setCheckOut={setCheckOut}
              Count={Count}
              setCount={setCount}
            />
          }
        />
         <Route path='/Checkout' element={<Checkout book={book} setBook ={setBook} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Layout;
