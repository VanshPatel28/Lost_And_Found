const Item = require('../models/Item');

// @desc    Add a new item (lost or found)
// @route   POST /api/items
// @access  Public
const addItem = async (req, res) => {
  try {
    const { title, description, type, location, contact } = req.body;

    // Simple validation
    if (!title || !description || !type || !contact) {
      return res.status(400).json({ message: 'Please include all required fields: title, description, type, and contact' });
    }

    const item = await Item.create({
      title,
      description,
      type,
      location,
      contact,
    });

    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all items
// @route   GET /api/items
// @access  Public
const getItems = async (req, res) => {
  try {
    const items = await Item.find().sort({ date: -1 }); // Show newest first
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Search items by keyword in title or description
// @route   GET /api/items/search?query=keyword
// @access  Public
const searchItems = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ message: 'Please provide a search query' });
    }

    // Case-insensitive search across title OR description
    const items = await Item.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
      ],
    }).sort({ date: -1 });

    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addItem,
  getItems,
  searchItems,
};