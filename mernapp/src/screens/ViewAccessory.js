import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import withAuth from "../components/withAuth";

const ViewAccessory = () => {
  const location = useLocation();
  const { id } = location.state;
  const [accessoryData, setAccessoryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/adminviewaccessories/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setAccessoryData(data);
        } else {
          setError("Error fetching accessory data");
        }
      } catch (error) {
        setError("Error fetching accessory data");
      } finally {
        setLoading(false);
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
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {accessoryData && (
              <div className="view-product-card">
                <img
                  src={`http://localhost:5000/${accessoryData.img_path}`}
                  alt="Accessory Image"
                />
                <h3>{accessoryData.name}</h3>
                <div className="price">${accessoryData.price}</div>
                <div className="type">Type: {accessoryData.type}</div>
                <div className="brand">Brand: {accessoryData.brand}</div>
                <p>{accessoryData.description}</p>
                <button
                  className="btn btn-primary product-buttons"
                  style={{ width: "200px" }}
                >
                  Add to Cart
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(ViewAccessory);
