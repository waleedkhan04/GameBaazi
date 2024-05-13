import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import AdminNavbar from "../components/AdminNavbar";
import withAdminAuth from "../components/withAdminAuth";

function AdminOrderDetails() {
  const orders = [
    {
      orderId: 1,
      datePlaced: "2024-04-13",
      total: "$20",
      items: [
        { itemName: "Item 1", itemPrice: "$10" },
        { itemName: "Item 2", itemPrice: "$5" },
        { itemName: "Item 3", itemPrice: "$5" },
      ],
    },
    {
      orderId: 2,
      datePlaced: "2024-04-14",
      total: "$30",
      items: [
        { itemName: "Item 4", itemPrice: "$15" },
        { itemName: "Item 5", itemPrice: "$10" },
        { itemName: "Item 6", itemPrice: "$5" },
      ],
    },
    {
      orderId: 3,
      datePlaced: "2024-04-15",
      total: "$40",
      items: [
        { itemName: "Item 7", itemPrice: "$20" },
        { itemName: "Item 8", itemPrice: "$15" },
        { itemName: "Item 9", itemPrice: "$5" },
      ],
    },
    {
      orderId: 4,
      datePlaced: "2024-04-16",
      total: "$50",
      items: [
        { itemName: "Item 10", itemPrice: "$25" },
        { itemName: "Item 11", itemPrice: "$20" },
        { itemName: "Item 12", itemPrice: "$5" },
      ],
    },
  ];

  const { orderId } = useParams();

  const order = orders.find((order) => order.orderId === parseInt(orderId));

  const handleDispatchOrder = () => {
    console.log("Order dispatched!");
  };

  //if (!order) {
  // return <div>Order not found</div>;
  // }

  return (
    <>
      <AdminNavbar />
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
                <button
                  className="btn btn-primary mt-3"
                  onClick={handleDispatchOrder}
                >
                  Dispatch Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default withAdminAuth(AdminOrderDetails);
