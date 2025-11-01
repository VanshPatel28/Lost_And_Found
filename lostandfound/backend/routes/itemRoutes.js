const express = require('express');
const router = express.Router();
const {
  addItem,
  getItems,
  searchItems,
} = require('../controllers/itemController');

// Define routes
router.post('/', addItem);
router.get('/', getItems);
router.get('/search', searchItems);

module.exports = router;