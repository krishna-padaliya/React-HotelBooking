import React from "react";
import "../style/Checkout.css";
// toast 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Checkout({ book }) {
  //Total Price
  const total = book.reduce((price, item) => price + item.qty * item.price, 0)
  function checkout(){
    // toast("Wow so easy!")
    toast('Your Reservation Sucessfully!!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  return (
    <div>
      <div className="checkout">
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
        {/* checkout1  */}
        <div className="checkout1">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-12 d-flex justify-content-center"
                id="content"
              >
                <h1>CHECKOUT</h1>
              </div>
            </div>
          </div>
        </div>
        {/* checkout1  */}

        {/* checkout2  */}
        <div className="checkout2">
          <div className="container">
            <div class="row">
              <div class="col-md-4 order-md-2 mb-4">
                <h4 class="d-flex justify-content-between align-items-center mb-3">
                  YOUR CART
                </h4>
                <ul class="list-group mb-3">
                  <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      {book.map((el) => (
                        <>
                          <div className="d-flex justify-content-between">
                            <div>
                              <h6 class="my-0">{el.name}</h6>
                              {/* <small class="text-muted">{el.}</small> */}
                            </div>

                            <span class="text-muted ms-5">${el.price}</span>
                          </div>
                          <hr />
                        </>
                      ))}
                    </div>
                  </li>

                  <li class="list-group-item d-flex justify-content-between bg-light">
                    <div class="text-success">
                      <h6 class="my-0">Promo code</h6>
                      <small>EXAMPLECODE</small>
                    </div>
                    <span class="text-success">-$5</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between">
                    {book.length > 0 && (
                      <>
                        <span>Total (USD)</span>
                        <strong>${total}</strong>
                      </>
                    )}
                  </li>
                </ul>

                <form class="card p-2" id="br">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Promo code"
                      style={{ border: "3px, dotted,#bbb" }}
                    />
                    <div class="input-group-append">
                      <button
                        type="submit"
                        class="btn"
                       id="redeem"
                      >
                        Redeem
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-md-8 order-md-1">
                <h4 class="mb-3" >
                  BILLING ADDRESS
                </h4>
                <form class="needs-validation" novalidate>
                  <div class="mb-3">
                    <label for="username">Username</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">@</span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        id="username"
                        placeholder="Username"
                        required
                      />
                      <div class="invalid-feedback" style={{ width: "100%" }}>
                        Your username is required.
                      </div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="email">
                      Email <span class="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="you@example.com"
                    />
                    <div class="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="address">Address</label>
                    <input
                      type="text"
                      class="form-control"
                      id="address"
                      placeholder="1234 Main St"
                      required
                    />
                    <div class="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="address2">
                      Address 2 <span class="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="address2"
                      placeholder="Apartment or suite"
                    />
                  </div>
                  <div class="row">
                    <div class="col-md-5 mb-3">
                      <label for="country">Country</label>
                      <select
                        class="custom-select form-select d-block w-100"
                        id="country"
                        required
                      >
                        <option value="">Choose...</option>
                        <option>United States</option>
                      </select>
                      <div class="invalid-feedback">
                        Please select a valid country.
                      </div>
                    </div>
                    <div class="col-md-4 mb-3">
                      <label for="state">State</label>
                      <select
                        class="custom-select form-select d-block w-100"
                        id="state"
                        required
                      >
                        <option value="">Choose...</option>
                        <option>California</option>
                      </select>
                      <div class="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </div>
                    <div class="col-md-3 mb-3">
                      <label for="zip">Zip</label>
                      <input
                        type="text"
                        class="form-control"
                        id="zip"
                        placeholder=""
                        required
                      />
                      <div class="invalid-feedback">Zip code required.</div>
                    </div>
                  </div>
                  <hr class="mb-4" />
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="same-address"
                    />
                    <label class="custom-control-label" for="same-address">
                      Shipping address is the same as my billing address
                    </label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="save-info"
                    />
                    <label class="custom-control-label" for="save-info">
                      Save this information for next time
                    </label>
                  </div>
                  <hr class="mb-4" /> <br />
                  <h4 class="mb-3">
                    PAYMENT
                  </h4>
                  <div class="d-block my-3">
                    <div class="custom-control custom-radio">
                      <input
                        id="credit"
                        name="paymentMethod"
                        type="radio"
                        class="custom-control-input"
                        checked
                        required
                      />
                      <label class="custom-control-label" for="credit">
                        Credit card
                      </label>
                    </div>
                    <div class="custom-control custom-radio">
                      <input
                        id="debit"
                        name="paymentMethod"
                        type="radio"
                        class="custom-control-input"
                        required
                      />
                      <label class="custom-control-label" for="debit">
                        Debit card
                      </label>
                    </div>
                    <div class="custom-control custom-radio">
                      <input
                        id="paypal"
                        name="paymentMethod"
                        type="radio"
                        class="custom-control-input"
                        required
                      />
                      <label class="custom-control-label" for="paypal">
                        PayPal
                      </label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label for="cc-name">Name on card</label>
                      <input
                        type="text"
                        class="form-control"
                        id="cc-name"
                        placeholder=""
                        required
                      />
                      <small class="text-muted">
                        Full name as displayed on card
                      </small>
                      <div class="invalid-feedback">Name on card is required</div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label for="cc-number">Credit card number</label>
                      <input
                        type="text"
                        class="form-control"
                        id="cc-number"
                        placeholder=""
                        required
                      />
                      <div class="invalid-feedback">
                        Credit card number is required
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-3 mb-3">
                      <label for="cc-expiration">Expiration</label>
                      <input
                        type="text"
                        class="form-control"
                        id="cc-expiration"
                        placeholder=""
                        required
                      />
                      <div class="invalid-feedback">Expiration date required</div>
                    </div>
                    <div class="col-md-3 mb-3">
                      <label for="cc-cvv">CVV</label>
                      <input
                        type="text"
                        class="form-control"
                        id="cc-cvv"
                        placeholder=""
                        required
                      />
                      <div class="invalid-feedback">Security code required</div>
                    </div>
                  </div>
                  <hr class="mb-4" />
                  <button id="placeorder"
                    class="btn btn-lg btn-block"
                    onClick={checkout}
                    type="submit"
                  >
                    PLACE ORDER
                  </button>{" "}
                  <br />
                  <br />
                </form>
              </div>
            </div>
          </div>
          </div>
          {/* checkout2  */}
        </div>
      </div>
      );
}

      export default Checkout;
