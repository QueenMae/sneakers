import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/products');
        const data = await response.json();
        setProducts(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setFilteredResults([]);
    } else {
      const results = products.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(results);
    }
  }, [query, products]);

  const excludedRoutes = ["/login", "/register"];

  return (
    <nav className="bg-pink-200 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-16" />
        </div>
        {!excludedRoutes.includes(location.pathname) && (
          <div className="flex-grow flex justify-center relative">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            {query && filteredResults.length > 0 && (
              <div className="absolute top-12 left-0 w-full bg-white shadow-lg rounded-lg mt-2 z-10 max-h-48 overflow-auto">
                {loading ? (
                  <p className="p-4 text-gray-500">Loading...</p>
                ) : (
                  <ul>
                    {filteredResults.map((item) => (
                      <li
                        key={item.id}
                        className="p-2 hover:bg-gray-200 cursor-pointer"
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        )}
        <div className="flex space-x-4">
          <a href="/" className="text-white hover:text-gray-200 transition">
            Home
          </a>
          <a href="/login" className="text-white hover:text-gray-200 transition">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
