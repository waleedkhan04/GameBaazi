import React from "react";
import Navbar from "../components/Navbar";
import withAuth from "../components/withAuth";

function ViewOrderDetails() {
  // Sample order data for a single order
  const order = {
    orderId: 1,
    datePlaced: "2024-04-13",
    total: "$20",
    items: [
      { itemName: "Item 1", itemPrice: "$10" },
      { itemName: "Item 2", itemPrice: "$5" },
      { itemName: "Item 3", itemPrice: "$5" },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="text-white">Order Details</h2>
            <div className="card bg-dark text-white">
              <div className="card-body">
                <h5 className="card-title">Order #{order.orderId}</h5>
                <p className="card-text">Date Placed: {order.datePlaced}</p>
                <p className="card-text">Total: {order.total}</p>
                <h6 className="text-white">Items:</h6>
                <ul className="list-group list-group-flush">
                  {order.items.map((item, index) => (
                    <li
                      key={index}
                      className="list-group-item bg-dark text-white"
                    >
                      {item.itemName} - {item.itemPrice}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default withAuth(ViewOrderDetails);
