import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styling/ViewProduct.css";
import Navbar from "../components/Navbar";
import withAuth from "../components/withAuth";

const ViewSubscription = () => {
  const location = useLocation();
  const id = location.state.id;
  const [subscriptionData, setSubscriptionData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/adminviewsubscriptions/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setSubscriptionData(data);
        } else {
          console.error("Error fetching subscription data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            {subscriptionData && (
              <div className="view-product-card">
                <img
                  src={`http://localhost:5000/${subscriptionData.img_path}`}
                  alt="Subscription Image"
                />
                <h3>{subscriptionData.name}</h3>
                <div className="price">${subscriptionData.price}</div>
                <div className="genre">
                  Duration: {subscriptionData.duration}
                </div>
                <div className="rating">Region: {subscriptionData.region}</div>
                <p>{subscriptionData.description}</p>
                <button
                  className="btn btn-primary product-buttons"
                  style={{ width: "200px" }}
                >
                  Subscribe Now
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(ViewSubscription);
