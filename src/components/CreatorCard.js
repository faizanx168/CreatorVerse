import React from "react";
import { Link } from "react-router-dom";

const cardStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  maxWidth: "400px",
  width: "100%",
  marginBottom: "20px",
};

const imageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "4px",
  marginBottom: "10px",
};

function CreatorCard({ creator }) {
  return (
    <div style={cardStyle}>
      <h2>{creator.name}</h2>
      <p>{creator.description}</p>
      {creator.imageURL && (
        <img src={creator.imageURL} alt={creator.name} style={imageStyle} />
      )}
      <Link to={`/creator/${creator.id}`}>View</Link> {/* Add View button */}
      <Link to={`/edit/${creator.id}`}>Edit</Link> {/* Add Edit button */}
    </div>
  );
}

export default CreatorCard;
