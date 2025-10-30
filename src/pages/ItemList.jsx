import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemCard from '../components/ItemCard'; // Assuming ItemCard is still functional

const API_BASE_URL = 'http://localhost:5000/api/items';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(API_BASE_URL);
        setItems(response.data);
      } catch (err) {
        console.error('Error fetching items:', err);
        setError('Failed to load items. Please ensure the backend server is running.');
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  // Display loading/error states outside the main content box
  if (loading) return <div className="min-h-screen bg-light-bg-blue p-10 text-center">Loading items...</div>;
  if (error) return <div className="min-h-screen bg-light-bg-blue p-10 text-center text-red-600">Error: {error}</div>;

  return (
    // CHANGE HERE: Added min-h-screen and bg-light-bg-blue to the main wrapper
    <div className="min-h-screen bg-light-bg-blue py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-bold text-primary-blue mb-6">All Reported Items</h2>
          <p className="text-gray-600 mb-6">Total items found: <span className="font-semibold text-primary-blue">{items.length}</span></p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.length > 0 ? (
              items.map((item) => (
                <div key={item._id}>
                  {/* Assuming ItemCard is adapted for Tailwind or renders within a Tailwind context */}
                  <ItemCard item={item} /> 
                </div>
              ))
            ) : (
              <p className="col-span-3 text-center text-gray-500">No items have been reported yet. Be the first!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemList;