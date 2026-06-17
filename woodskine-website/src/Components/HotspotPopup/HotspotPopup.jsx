import React from 'react';
import './HotspotPopup.css';

export default function HotspotPopup({ pin, position, onClose }) {
  if (!pin) return null;

  return (
    <div className="hotspot-popup-backdrop" onClick={onClose}>
      <div
        className="hotspot-popup-card"
        style={position}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="hotspot-popup-close" onClick={onClose}>
          ×
        </button>

        <div className="hotspot-popup-icon">
          <div className="hotspot-popup-handle"></div>
          <div className="hotspot-popup-body"></div>
        </div>

        <div className="hotspot-popup-content">
          <h4 className="hotspot-popup-name">{pin.name}</h4>
          <span className="hotspot-popup-price">{pin.price}</span>
          <a href="#quickview" className="hotspot-popup-link">Quick view</a>
        </div>
      </div>
    </div>
  );
}