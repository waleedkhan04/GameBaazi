import React from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import withAdminAuth from "../components/withAdminAuth";

function AdminOrders() {
  const navigate = useNavigate();

  // Dummy array of orders
  const orders = [
    { id: 1, date: "2024-04-13", total: "20$" },
    { id: 2, date: "2024-04-13", total: "40$" },
    { id: 3, date: "2024-04-13", total: "50$" },
    { id: 4, date: "2024-04-13", total: "50$" },
  ];

  const handleViewOrder = (orderId) => {
    navigate(`/adminorderdetails/${orderId}`);
  };

  return (
    <>
      <AdminNavbar></AdminNavbar>
      <div className="container py-5 text-white">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2>Your Orders</h2>
            <table className="table table-dark table-striped">
              <thead>
                <tr>
                  <th scope="col">Order Id</th>
                  <th scope="col">Date Placed</th>
                  <th scope="col">Total</th>
                  <th scope="col">View Order</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <th scope="row">{order.id}</th>
                    <td>{order.date}</td>
                    <td>{order.total}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleViewOrder(order.id)}
                      >
                        View Order
                      </button>
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
export default withAdminAuth(AdminOrders);
