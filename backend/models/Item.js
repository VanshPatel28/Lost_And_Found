const mongoose = require('mongoose');

const itemSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
    },
    type: {
      type: String,
      enum: ['lost', 'found'], // Ensures the type is one of these two values
      required: [true, 'Please specify if the item was lost or found'],
    },
    location: {
      type: String,
      default: 'Not specified',
    },
    contact: {
      type: String,
      required: [true, 'Please add contact information'],
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

module.exports = mongoose.model('Item', itemSchema);