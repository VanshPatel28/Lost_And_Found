import React, { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/items';

const ReportForm = ({ itemType }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    contact: '',
    type: itemType, // 'lost' or 'found'
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      if (!formData.title || !formData.description || !formData.contact) {
        setMessage('Title, Description, and Contact are required.');
        setLoading(false);
        return;
      }

      await axios.post(API_BASE_URL, formData);
      setMessage(`Successfully submitted your ${itemType} report!`);
      
      setFormData({
        title: '',
        description: '',
        location: '',
        contact: '',
        type: itemType,
      });
    } catch (error) {
      console.error('Submission Error:', error);
      setMessage(`Failed to submit report. Error: ${error.response?.data?.message || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const formTitle = itemType === 'lost' ? 'Report a Lost Item 😭' : 'Report a Found Item 🎉';
  const buttonText = itemType === 'lost' ? 'Submit Lost Item Report' : 'Submit Found Item Report';

  return (
    // CHANGE HERE: Added min-h-screen and bg-light-bg-blue to the main wrapper
    <div className="min-h-screen bg-light-bg-blue py-10"> 
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-xl shadow-2xl"> {/* Form container remains white for readability */}
          <h2 className="text-3xl font-bold text-primary-blue mb-6">{formTitle}</h2>
          {/* Display message using Tailwind alerts */}
          {message && (
            <div className={`p-4 mb-4 rounded-lg font-medium ${message.includes('Failed') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`} role="alert">
              {message}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Item Title: *</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                placeholder={`e.g., ${itemType === 'lost' ? 'Red backpack' : 'Black wallet'}`}
              />
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description: *</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                placeholder={`Provide a detailed description of the ${itemType} item...`}
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location ({itemType === 'lost' ? 'Last Seen' : 'Found At'}):</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                placeholder="e.g., Library 3rd floor, Main Street"
              />
            </div>
            
            <div>
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Your Contact Information: *</label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
                placeholder="Email or Phone Number"
              />
            </div>

            <button type="submit" className="w-full btn-cta bg-primary-blue hover:bg-blue-800" disabled={loading}>
              {loading ? 'Submitting...' : buttonText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportForm;