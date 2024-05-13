import React from "react";
import Navbar from "../components/Navbar";
import withAuth from "../components/withAuth";

function Cart() {
  // Dummy data for items in the cart
  const items = [
    { name: "Item 1", price: 10 },
    { name: "Item 2", price: 15 },
    { name: "Item 3", price: 20 },
    { name: "Item 4", price: 25 },
  ];

  // Calculate total price
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <Navbar />
      <div className="container py-5 text-white">
        <div className="row">
          <div className="col-lg-8">
            <h2>Your Cart</h2>
            <div className="card bg-dark text-white mb-3">
              <div className="card-body">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="d-flex justify-content-between align-items-center mb-3"
                  >
                    <h5 className="mb-0">{item.name}</h5>
                    <h5 className="mb-0">${item.price.toFixed(2)}</h5>
                    <button className="btn btn-danger">
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
          </div>
          <div className="col-lg-4">
            <h2>Payment Details</h2>
            <div className="card bg-dark text-white mb-3">
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="cardNumber" className="form-label">
                      Card Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cardNumber"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="cardName" className="form-label">
                      Cardholder's Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cardName"
                      required
                    />
                  </div>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="expiryDate" className="form-label">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="expiryDate"
                        required
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="cvv" className="form-label">
                        CVV
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cvv"
                        required
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary mt-3">
                    Pay Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default withAuth(Cart);
