import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CreatorCard from "../components/CreatorCard";
import { supabase } from "../client";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  padding: "20px",
  backgroundColor: "#f5f5f5",
};

const cardStyle = {
  background: "#fff",
  padding: "40px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  maxWidth: "800px",
  width: "100%",
};

function ShowCreators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    async function fetchCreatorsFromDatabase() {
      const { data, error } = await supabase.from("creators").select("*");
      if (error) {
        console.error("Error fetching creators:", error);
      } else {
        setCreators(data);
      }
    }

    fetchCreatorsFromDatabase();
  }, []);

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1>All Content Creators</h1>
        <Link to="/add">Add New Creator</Link>
        {creators.length === 0 ? (
          <p>No content creators in the database.</p>
        ) : (
          creators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))
        )}
      </div>
    </div>
  );
}

export default ShowCreators;
