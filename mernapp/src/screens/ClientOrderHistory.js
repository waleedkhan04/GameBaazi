import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import withAuth from "../components/withAuth";

function ClientOrderHistory() {
  const navigate = useNavigate();

  const viewOrderDetails = (orderId) => {
    navigate(`/vieworderdetails/${orderId}`);
  };

  return (
    <>
      <Navbar />
      <div className="container py-5 text-white">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2>Your Orders</h2>
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
                <tr>
                  <th scope="row">1</th>
                  <td>2024-04-13</td>
                  <td>Processing</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => viewOrderDetails(1)}
                    >
                      View Order
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>2024-04-13</td>
                  <td>Processing</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => viewOrderDetails(2)}
                    >
                      View Order
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>2024-04-13</td>
                  <td>Processing</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => viewOrderDetails(3)}
                    >
                      View Order
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>2024-04-13</td>
                  <td>Processing</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => viewOrderDetails(4)}
                    >
                      View Order
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default withAuth(ClientOrderHistory);
