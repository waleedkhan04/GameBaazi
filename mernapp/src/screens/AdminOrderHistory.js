import React from "react";
import { Link } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import withAdminAuth from "../components/withAdminAuth";

function AdminOrderHistory() {
  // Sample array of order history (dummy data)
  const orderHistory = [
    { orderId: 1, datePlaced: "2024-04-13", status: "Processing" },
    { orderId: 2, datePlaced: "2024-04-14", status: "Shipped" },
    { orderId: 3, datePlaced: "2024-04-15", status: "Delivered" },
    { orderId: 4, datePlaced: "2024-04-16", status: "Completed" },
  ];

  return (
    <>
      <AdminNavbar />
      <div className="container py-5 text-white">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2>Order History</h2>
            <table className="table table-dark table-striped">
              <thead>
                <tr>
                  <th scope="col">Order Id</th>
                  <th scope="col">Date Placed</th>
                  <th scope="col">Order Status</th>
                  <th scope="col">View Order</th>
                </tr>
              </thead>
              <tbody>
                {orderHistory.map((order) => (
                  <tr key={order.orderId}>
                    <th scope="row">{order.orderId}</th>
                    <td>{order.datePlaced}</td>
                    <td>{order.status}</td>
                    <td>
                      <Link
                        to={`/adminorderdetails/${order.orderId}`}
                        className="btn btn-primary"
                      >
                        View Order
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default withAdminAuth(AdminOrderHistory);
