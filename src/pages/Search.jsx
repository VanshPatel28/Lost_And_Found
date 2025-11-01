import React, { useState } from 'react';
import axios from 'axios';
import ItemCard from '../components/ItemCard';

const API_BASE_URL = 'http://localhost:5000/api/items/search';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setSearched(true);
    setResults([]);

    try {
      const response = await axios.get(`${API_BASE_URL}?query=${encodeURIComponent(query.trim())}`);
      setResults(response.data);
    } catch (err) {
      console.error('Search Error:', err);
      setError('Search failed. Please check your connection to the API.');
    } finally {
      setLoading(false);
    }
  };

  return (
    // CHANGE HERE: Added min-h-screen and bg-light-bg-blue to the main wrapper
    <div className="min-h-screen bg-light-bg-blue py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-xl shadow-2xl">
          <h2 className="text-3xl font-bold text-primary-blue mb-6">Search Items</h2>
          
          <form onSubmit={handleSearch} className="flex space-x-3 mb-8">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter keyword (e.g., phone, keys, jacket)"
              className="flex-grow border border-gray-300 rounded-md shadow-sm py-2 px-4 focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
            />
            <button type="submit" className="btn-cta bg-primary-blue hover:bg-blue-800 px-8" disabled={loading}>
              {loading ? 'Searching...' : 'Search'}
            </button>
          </form>

          {error && <p className="text-red-600 mb-4">Error: {error}</p>}

          {searched && !loading && (
            <>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Search Results ({results.length} items)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.length > 0 ? (
                  results.map((item) => (
                    <div key={item._id}>
                      <ItemCard item={item} />
                    </div>
                  ))
                ) : (
                  <p className="col-span-3 text-center text-gray-500">No items found matching "{query}". Try a different keyword.</p>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;