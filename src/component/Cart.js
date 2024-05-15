import React from "react";
import "../style/Cart.css";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

function Cart({checkIn,checkOut,setCheckIn,setCheckOut , Count,setCount,book,setBook}) {
  //Removing cart product
  const removeproduct = (product) => {
    const exist = book.find((x) => {
      return x.id === product.id;
    });
    if (exist.qty > 0) {
      setBook(
        book.filter((el) => {
          return el.id !== product.id;
        })
      );
    }
  };
  // Increase Quantity of cart product
  const incqty = (product) => {
    const exist = book.find((x) => {
      return x.id === product.id;
    });
    setBook(
      book.map((el) => {
        return el.id === product.id ? { ...exist, qty: exist.qty + 1 } : el;
      })
    );
  };
  // decrese Quantity of cart product
  const decqty = (product) => {
    const exist = book.find((x) => {
      return x.id === product.id;
    });
    setBook(
      book.map((el) => {
        return el.id === product.id ? { ...exist, qty: exist.qty - 1 } : el;
      })
    );
  };
  //Total Price
  const total = book.reduce((price, item) => price + item.qty * item.price, 0);

  return (
    <div>
      <div className="cart">
        {/* cart1  */}
        <div className="cart1">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-12 d-flex justify-content-center"
                id="content"
              >
                <h1>BOOKING</h1>
              </div>
            </div>
          </div>
        </div>
        {/* cart1  */}

        {/* {
            book.length === 0 && 
            <>
            <div className='empty_cart'>
                <h2>Your Shopping cart is empty</h2>
                <Link to='/Room.js'><button>Shop Now</button></Link>
            </div>
            </>
        } */}
        
        {/* cart2  */}
        <div className="cart2">
          <div class="table-responsive">
            <table class="table align-middle">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">ROOMS</th>
                  <th scope="col">NAME</th>
                  <th scope="col">CHECK-IN</th>
                  <th scope="col">CHECK-OUT</th>
                  <th scope="col">STAY</th>
                  <th scope="col">GUEST</th>
                  <th scope="col">ROOM-BOOK</th>
                  <th scope="col">PRICE</th>
                  <th scope="col">SUBTOTAL</th>
                </tr>
              </thead>
              <tbody>
                {book.map((el, key) => (
                  <tr key={key}>
                    <td onClick={() => removeproduct(el)}>
                      <IoIosClose />
                    </td>
                    <td>
                      <img src={el.image} width={"50px"} alt="" />
                    </td>
                    <td>{el.name}</td>
                    <td>{checkIn.toLocaleDateString()}</td>
                    <td>{checkOut.toLocaleDateString()}</td>
                    <td>{Count}</td>
                    <td>{el.guests}</td>
                    <td className="d-flex">
                      <button
                        className="shadow bg-body-tertiary rounded"
                        onClick={() => incqty(el)}
                      >
                        +
                      </button>
                      <p>{el.qty}</p>
                      <button
                        className="shadow bg-body-tertiary rounded"
                        onClick={() => decqty(el)}
                      >
                        -
                      </button>
                    </td>
                    <td>${el.price}</td>
                    <td>${el.price * el.qty * Count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* cart2  */}

        {/* cart3  */}
        <div className="cart3">
          <div className="container" id="cart3width">
            <div className="row">
              <div className="col-lg-12">
                <h4>CART TOTALS</h4>
                <div className="row border">
                  <div className="col-lg-12 d-flex">
                    <p>Service Charges</p>
                    <p>$50</p>
                  </div>
                  <hr />
                  <div className="col-lg-12 d-flex">
                    <p>Grand Total</p>
                    {book.length > 0 && (
                      <>
                        <p className="ms-5">${total + 50}</p>
                      </>
                    )}
                  </div>
                </div>
                <button className="btn">
                  <Link id="checkout" to='/Checkout'>PROCEED TO CHECKOUT</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* cart3  */}
      </div>
    </div>
  );
}

export default Cart;
