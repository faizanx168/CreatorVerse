import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../client";

function ViewCreator() {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    async function fetchCreatorFromDatabase() {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();
      if (error) {
        console.error("Error fetching creator:", error);
      } else {
        setCreator(data);
      }
    }

    fetchCreatorFromDatabase();
  }, [id]);

  if (!creator) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{creator.name}</h1>
      <p>{creator.description}</p>
      <a href={creator.url} target="_blank" rel="noopener noreferrer">
        Visit Channel
      </a>
      {creator.imageURL && (
        <div>
          <img src={creator.imageURL} alt={`${creator.name} Thumbnail`} />
        </div>
      )}
      <Link to={`/edit/${creator.id}`}>Edit</Link> {/* Add this line */}
    </div>
  );
}

export default ViewCreator;
