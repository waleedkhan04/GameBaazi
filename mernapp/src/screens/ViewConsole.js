import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import withAuth from "../components/withAuth";

const ViewConsole = () => {
  const location = useLocation();
  const { id } = location.state;
  const [consoleData, setConsoleData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/adminviewconsoles/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setConsoleData(data);
        } else {
          setError("Error fetching console data");
        }
      } catch (error) {
        setError("Error fetching console data");
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
            {consoleData && (
              <div className="view-product-card">
                <img
                  src={`http://localhost:5000/${consoleData.img_path}`}
                  alt="Console Image"
                />
                <h3>{consoleData.name}</h3>
                <div className="price">${consoleData.price}</div>
                <div className="variant">Variant: {consoleData.variant}</div>
                <div className="generation">
                  Generation: {consoleData.generation}
                </div>
                <p>{consoleData.description}</p>
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

export default withAuth(ViewConsole);
