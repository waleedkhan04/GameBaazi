import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import withAuth from "../components/withAuth";

const ViewGame = () => {
  const location = useLocation();
  const { id } = location.state;
  const [gameData, setGameData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/adminviewgames/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setGameData(data);
        } else {
          setError("Error fetching game data");
        }
      } catch (error) {
        setError("Error fetching game data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {gameData && (
              <div className="view-product-card">
                <img
                  src={`http://localhost:5000/${gameData.img_path}`}
                  alt="Game Image"
                />
                <h3>{gameData.name}</h3>
                <div className="price">${gameData.price}</div>
                <div className="genre">Genre: {gameData.genre}</div>
                <div className="rating">Rating: {gameData.rating}/10</div>
                <p>{gameData.description}</p>
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

export default withAuth(ViewGame);
