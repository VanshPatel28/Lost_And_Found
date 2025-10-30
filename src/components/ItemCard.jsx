import React from 'react';

const ItemCard = ({ item }) => {
  // Use Bootstrap's conditional coloring (bg-danger for lost, bg-success for found)
  const cardBorderClass = item.type === 'lost' ? 'border-danger' : 'border-success';
  const itemTypeColor = item.type === 'lost' ? 'text-danger' : 'text-success';
  const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };

  return (
    <div className={`card shadow-sm mb-3 ${cardBorderClass}`} style={{ borderLeftWidth: '5px', borderLeftStyle: 'solid' }}>
      <div className="card-body">
        <h5 className="card-title text-capitalize">{item.title}</h5>
        <h6 className="card-subtitle mb-2">
            Status: <span className={`fw-bold ${itemTypeColor}`}>{item.type.toUpperCase()}</span>
        </h6>
        <p className="card-text mb-1">
          <strong>Description:</strong> {item.description}
        </p>
        <p className="card-text mb-1 text-muted small">
          <strong>Location:</strong> {item.location}
        </p>
        <p className="card-text mb-1 text-muted small">
          <strong>Date:</strong> {new Date(item.date).toLocaleDateString(undefined, dateOptions)}
        </p>
        <hr/>
        <p className="card-text text-primary fw-bold mb-0">
          Contact: {item.contact}
        </p>
      </div>
    </div>
  );
};

export default ItemCard;