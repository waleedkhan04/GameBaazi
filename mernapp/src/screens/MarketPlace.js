import React, { useState, useEffect } from "react";
import "../styling/MarketPlace.css";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import withAuth from "../components/withAuth";

const MarketPlace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend when component mounts
    fetchProducts();
  }, []); // Empty dependency array means this effect runs only once, similar to componentDidMount

  const fetchProducts = () => {
    // Fetch products from the backend API
    fetch("http://localhost:5000/api/fetchproducts") // Adjust the API endpoint according to your backend setup
      .then((response) => response.json())
      .then((data) => {
        // Extract only necessary fields from the response data
        const formattedProducts = data.map((product) => ({
          id: product.id,
          name: product.name,
          price: product.price,
          imageSrc: product.img_path,
          type: product.type,
        }));

        setProducts(formattedProducts);
        setOriginalProducts(formattedProducts); // Save original products
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  const handleSearch = () => {
    // Filter products based on search term and replace existing products with search results
    const filtered = originalProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(filtered);
  };

  const handleFilterChange = (filterType) => {
    setFilterType(filterType);
    filterProducts(filterType);
  };

  const filterProducts = (filterType) => {
    // Filter products based on type (front end)
    if (filterType !== "") {
      const filtered = originalProducts.filter(
        (product) => product.type === filterType
      );
      setProducts(filtered);
    } else {
      // If filter type is empty, reset to original products
      setProducts(originalProducts);
    }
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="container">
          <h1 className="marketplace-heading text-center mt-5">MARKET</h1>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <input
              type="text"
              style={{
                width: "50%",
                padding: "8px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#fff",
                color: "#333",
              }}
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              style={{
                marginLeft: "10px",
                padding: "8px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#007bff",
                color: "#fff",
                cursor: "pointer",
              }}
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <select
              style={{
                padding: "8px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#fff",
                color: "#333",
              }}
              value={filterType}
              onChange={(e) => handleFilterChange(e.target.value)}
            >
              <option value="">All</option>
              <option value="Accessory">Accessory</option>
              <option value="Game">Game</option>
              <option value="Subscription">Subscription</option>
              <option value="Console">Console</option>
              <option value="Recommendations">Recommendations</option>
            </select>
          </div>
          <div className="products-container">
            {/* Map through filtered products and render ProductCard for each */}
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                productName={product.name}
                price={product.price}
                imageSrc={`http://localhost:5000/${product.imageSrc}`}
                type={product.type}
                // Since the backend response doesn't contain "genre", I removed it from here
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(MarketPlace);
